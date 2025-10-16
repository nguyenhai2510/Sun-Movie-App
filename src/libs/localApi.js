import { MOVIES, MOVIE_GENRES, PEOPLE, TV_GENRES, TV_SHOWS } from "@data/localDatabase";

const movieMap = new Map(MOVIES.map((movie) => [String(movie.id), movie]));
const tvMap = new Map(TV_SHOWS.map((show) => [String(show.id), show]));
const peopleMap = new Map(PEOPLE.map((person) => [String(person.id), person]));

const clone = (value) => (value === undefined ? value : JSON.parse(JSON.stringify(value)));

const toMovieSummary = (movie) => ({
  id: movie.id,
  media_type: "movie",
  title: movie.title,
  original_title: movie.original_title,
  overview: movie.overview,
  release_date: movie.release_date,
  poster_path: movie.poster_path,
  backdrop_path: movie.backdrop_path,
  vote_average: movie.vote_average,
  popularity: movie.popularity,
  genre_ids: movie.genre_ids,
});

const toTvSummary = (show) => ({
  id: show.id,
  media_type: "tv",
  name: show.name,
  original_name: show.original_name,
  overview: show.overview,
  first_air_date: show.first_air_date,
  poster_path: show.poster_path,
  backdrop_path: show.backdrop_path,
  vote_average: show.vote_average,
  popularity: show.popularity,
  genre_ids: show.genre_ids,
});

const parseGenres = (value) =>
  value
    ? value
        .split(",")
        .map((genreId) => Number(genreId.trim()))
        .filter(Boolean)
    : [];

const filterByRating = (items, min = 0, max = 10) =>
  items.filter((item) => item.vote_average >= min && item.vote_average <= max);

const filterByGenres = (items, genreIds) =>
  genreIds.length === 0
    ? items
    : items.filter((item) => genreIds.every((genreId) => item.genre_ids.includes(genreId)));

const sortByPopularity = (items) => [...items].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
const sortByVoteAverage = (items) => [...items].sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));
const sortByTrendingScore = (items) =>
  [...items].sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));

const buildRecommendations = (ids, map, summaryFn) =>
  ids
    .map((id) => map.get(String(id)))
    .filter(Boolean)
    .map(summaryFn);

const discover = (collection, summaryFn, queryString) => {
  const searchParams = new URLSearchParams(queryString);
  const genreIds = parseGenres(searchParams.get("with_genres"));
  const minRating = parseFloat(searchParams.get("vote_average.gte") ?? "0");
  const maxRating = parseFloat(searchParams.get("vote_average.lte") ?? "10");

  const filtered = filterByRating(filterByGenres(collection, genreIds), minRating, maxRating);

  return {
    results: sortByPopularity(filtered).map(summaryFn),
  };
};

const handleMovieRequest = (path, queryString) => {
  const [movieId, resource] = path.split("/").filter(Boolean);
  const movie = movieMap.get(movieId);

  if (!movie) {
    throw new Error(`Movie with id ${movieId} was not found in the local database.`);
  }

  if (!resource) {
    return clone(movie);
  }

  if (resource === "videos") {
    return clone(movie.videos ?? { results: [] });
  }

  if (resource === "recommendations") {
    return {
      results: buildRecommendations(movie.recommendations || [], movieMap, toMovieSummary),
    };
  }

  if (resource.includes("?")) {
    return clone(movie);
  }

  if (queryString) {
    return clone(movie);
  }

  throw new Error(`Unsupported movie resource: ${resource}`);
};

const handleTvRequest = (path, queryString) => {
  const [tvId, resource] = path.split("/").filter(Boolean);
  const show = tvMap.get(tvId);

  if (!show) {
    throw new Error(`TV Show with id ${tvId} was not found in the local database.`);
  }

  if (!resource) {
    return clone(show);
  }

  if (resource === "videos") {
    return clone(show.videos ?? { results: [] });
  }

  if (resource === "recommendations") {
    return {
      results: buildRecommendations(show.recommendations || [], tvMap, toTvSummary),
    };
  }

  if (resource.includes("?")) {
    return clone(show);
  }

  if (queryString) {
    return clone(show);
  }

  throw new Error(`Unsupported TV resource: ${resource}`);
};

const handlePersonRequest = (path) => {
  const [personId] = path.split("/").filter(Boolean);
  const person = peopleMap.get(personId);

  if (!person) {
    throw new Error(`Person with id ${personId} was not found in the local database.`);
  }

  return clone(person);
};

const handleTrendingRequest = (segments) => {
  const [mediaType] = segments;

  if (mediaType === "all") {
    const combined = [...sortByTrendingScore(MOVIES), ...sortByTrendingScore(TV_SHOWS)]
      .sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0))
      .slice(0, 20);

    return {
      results: combined.map((item) =>
        item.media_type === "movie" ? toMovieSummary(item) : toTvSummary(item),
      ),
    };
  }

  if (mediaType === "movie") {
    return {
      results: sortByTrendingScore(MOVIES).map(toMovieSummary),
    };
  }

  if (mediaType === "tv") {
    return {
      results: sortByTrendingScore(TV_SHOWS).map(toTvSummary),
    };
  }

  throw new Error(`Unsupported trending media type: ${mediaType}`);
};

export const requestLocalApi = (url) => {
  const [pathWithType, queryString = ""] = url.split("?");
  const segments = pathWithType.split("/").filter(Boolean);

  if (segments.length === 0) {
    throw new Error("Empty URL provided to the local API client.");
  }

  const [resourceType, ...rest] = segments;
  const resourcePath = rest.join("/");

  switch (resourceType) {
    case "discover": {
      const [mediaType] = rest;
      if (mediaType === "movie") {
        return clone(discover(MOVIES, toMovieSummary, queryString));
      }
      if (mediaType === "tv") {
        return clone(discover(TV_SHOWS, toTvSummary, queryString));
      }
      break;
    }
    case "movie": {
      if (rest[0] === "top_rated") {
        return {
          results: sortByVoteAverage(MOVIES).map(toMovieSummary),
        };
      }
      return clone(handleMovieRequest(resourcePath, queryString));
    }
    case "tv": {
      if (rest[0] === "top_rated") {
        return {
          results: sortByVoteAverage(TV_SHOWS).map(toTvSummary),
        };
      }
      return clone(handleTvRequest(resourcePath, queryString));
    }
    case "person": {
      return clone(handlePersonRequest(resourcePath));
    }
    case "trending": {
      return clone(handleTrendingRequest(rest));
    }
    case "genre": {
      const [mediaType] = rest;
      if (mediaType === "movie") {
        return { genres: clone(MOVIE_GENRES) };
      }
      if (mediaType === "tv") {
        return { genres: clone(TV_GENRES) };
      }
      break;
    }
    default:
      break;
  }

  throw new Error(`The local API client does not support the URL: ${url}`);
};
