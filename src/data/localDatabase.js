export const MOVIE_GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 878, name: "Science Fiction" },
  { id: 18, name: "Drama" },
  { id: 9648, name: "Mystery" },
  { id: 14, name: "Fantasy" },
  { id: 35, name: "Comedy" },
];

export const TV_GENRES = [
  { id: 18, name: "Drama" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10759, name: "Action & Adventure" },
  { id: 9648, name: "Mystery" },
  { id: 99, name: "Documentary" },
];

export const MOVIES = [
  {
    id: 1001,
    media_type: "movie",
    title: "Aurora Rising",
    original_title: "Aurora Rising",
    origin_country: ["US"],
    status: "Released",
    budget: 120000000,
    revenue: 450000000,
    release_date: "2023-09-18",
    runtime: 138,
    tagline: "Hope ignites between the stars.",
    overview:
      "As a distant colony loses contact with Earth, Commander Linh Tran leads a daring rescue mission that uncovers a cosmic anomaly capable of rewriting history.",
    vote_average: 8.3,
    vote_count: 4312,
    popularity: 640.32,
    genre_ids: [28, 12, 878],
    genres: [28, 12, 878].map((id) => MOVIE_GENRES.find((genre) => genre.id === id)),
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop_path: "/xnqust9Li4oxfhXD5kcPI5hgz2g.jpg",
    release_dates: {
      results: [
        {
          iso_3166_1: "US",
          release_dates: [
            {
              certification: "PG-13",
              release_date: "2023-09-18T00:00:00.000Z",
            },
          ],
        },
      ],
    },
    credits: {
      cast: [
        {
          id: 9001,
          name: "Ava Nguyen",
          character: "Commander Linh Tran",
          profile_path: "/7M6uEWteI9aGVr3vY9ofuUBeoUj.jpg",
        },
        {
          id: 9002,
          name: "Kai Pham",
          character: "Navigator Theo Vu",
          profile_path: "/4q2gyibFu4Yr0IB5ZS41kwNK4p1.jpg",
        },
        {
          id: 9003,
          name: "Linh Vo",
          character: "Scientist Mai Ly",
          profile_path: "/wnVXGCO1pO0HtM2gbcHjnYFQyL9.jpg",
        },
      ],
      crew: [
        { id: 9101, job: "Director", name: "Liam Tran" },
        { id: 9102, job: "Screenplay", name: "Harper Vo" },
        { id: 9103, job: "Writer", name: "Harper Vo" },
      ],
    },
    videos: {
      results: [
        {
          id: "aurora-rising-trailer",
          key: "dQw4w9WgXcQ",
          name: "Official Trailer",
          site: "YouTube",
          type: "Trailer",
        },
      ],
    },
    recommendations: [1002, 1003],
    spoken_languages: [
      { iso_639_1: "en", name: "English" },
      { iso_639_1: "vi", name: "Vietnamese" },
    ],
    production_companies: [
      { id: 8001, name: "Sunrise Studios" },
      { id: 8002, name: "Orbit Pictures" },
    ],
    trendingScore: 98,
  },
  {
    id: 1002,
    media_type: "movie",
    title: "Lunar Tide",
    original_title: "Lunar Tide",
    origin_country: ["US"],
    status: "Released",
    budget: 68000000,
    revenue: 210000000,
    release_date: "2022-11-04",
    runtime: 124,
    tagline: "The moon remembers everything.",
    overview:
      "A coastal investigator returns home when the moon's orbit shifts, causing violent tides that reveal a buried mystery connecting her family to an ancient signal.",
    vote_average: 7.6,
    vote_count: 2120,
    popularity: 410.21,
    genre_ids: [18, 9648],
    genres: [18, 9648].map((id) => MOVIE_GENRES.find((genre) => genre.id === id)),
    poster_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    backdrop_path: "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
    release_dates: {
      results: [
        {
          iso_3166_1: "US",
          release_dates: [
            {
              certification: "PG",
              release_date: "2022-11-04T00:00:00.000Z",
            },
          ],
        },
      ],
    },
    credits: {
      cast: [
        {
          id: 9003,
          name: "Linh Vo",
          character: "Mara Nguyen",
          profile_path: "/wnVXGCO1pO0HtM2gbcHjnYFQyL9.jpg",
        },
        {
          id: 9004,
          name: "Elias Tran",
          character: "Noah Tran",
          profile_path: "/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg",
        },
        {
          id: 9002,
          name: "Kai Pham",
          character: "Agent Adrian Cho",
          profile_path: "/4q2gyibFu4Yr0IB5ZS41kwNK4p1.jpg",
        },
      ],
      crew: [
        { id: 9104, job: "Director", name: "Sienna Dao" },
        { id: 9105, job: "Writer", name: "Sienna Dao" },
      ],
    },
    videos: {
      results: [
        {
          id: "lunar-tide-trailer",
          key: "lJqBaRqQ7As",
          name: "Official Trailer",
          site: "YouTube",
          type: "Trailer",
        },
      ],
    },
    recommendations: [1001, 1004],
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    production_companies: [{ id: 8003, name: "Tidal Wave" }],
    trendingScore: 87,
  },
  {
    id: 1003,
    media_type: "movie",
    title: "Echoes of Tomorrow",
    original_title: "Echoes of Tomorrow",
    origin_country: ["CA"],
    status: "Released",
    budget: 35000000,
    revenue: 185000000,
    release_date: "2024-02-14",
    runtime: 117,
    tagline: "Messages from the future demand a choice today.",
    overview:
      "An archivist discovers transmissions sent from the future warning of a temporal collapse and must decide which timeline survives.",
    vote_average: 8.7,
    vote_count: 1589,
    popularity: 382.9,
    genre_ids: [878, 18],
    genres: [878, 18].map((id) => MOVIE_GENRES.find((genre) => genre.id === id)),
    poster_path: "/z4naZ5XZuO5GZ96v9MzG1IGBOWJ.jpg",
    backdrop_path: "/dWj5VyHHfJhy8s3V6h9lXWPoGBp.jpg",
    release_dates: {
      results: [
        {
          iso_3166_1: "CA",
          release_dates: [
            {
              certification: "PG-13",
              release_date: "2024-02-14T00:00:00.000Z",
            },
          ],
        },
      ],
    },
    credits: {
      cast: [
        {
          id: 9001,
          name: "Ava Nguyen",
          character: "Archive Librarian Ly",
          profile_path: "/7M6uEWteI9aGVr3vY9ofuUBeoUj.jpg",
        },
        {
          id: 9005,
          name: "Noah Le",
          character: "Dr. Eliot Marlow",
          profile_path: "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
        },
        {
          id: 9004,
          name: "Elias Tran",
          character: "Time Courier Rhys",
          profile_path: "/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg",
        },
      ],
      crew: [
        { id: 9106, job: "Director", name: "Mikaela Huynh" },
        { id: 9107, job: "Screenplay", name: "Jonah Keller" },
        { id: 9108, job: "Writer", name: "Jonah Keller" },
      ],
    },
    videos: {
      results: [
        {
          id: "echoes-of-tomorrow-trailer",
          key: "x61sI-6Z6vQ",
          name: "Official Trailer",
          site: "YouTube",
          type: "Trailer",
        },
      ],
    },
    recommendations: [1001, 1002],
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    production_companies: [{ id: 8004, name: "Cascadia Films" }],
    trendingScore: 95,
  },
  {
    id: 1004,
    media_type: "movie",
    title: "The Last Satellite",
    original_title: "The Last Satellite",
    origin_country: ["GB"],
    status: "Released",
    budget: 54000000,
    revenue: 162000000,
    release_date: "2021-07-22",
    runtime: 129,
    tagline: "A single beacon can save humanity.",
    overview:
      "When a mysterious force wipes out Earth's communication network, a retired engineer must repair the final orbital satellite while rogue factions close in.",
    vote_average: 7.2,
    vote_count: 2988,
    popularity: 264.45,
    genre_ids: [28, 14],
    genres: [28, 14].map((id) => MOVIE_GENRES.find((genre) => genre.id === id)),
    poster_path: "/t2NEeYNXd1XTaa35hcLYP0Qxm1r.jpg",
    backdrop_path: "/1X7vow16X7CnCoexXh4H4F2yX8x.jpg",
    release_dates: {
      results: [
        {
          iso_3166_1: "GB",
          release_dates: [
            {
              certification: "12A",
              release_date: "2021-07-22T00:00:00.000Z",
            },
          ],
        },
      ],
    },
    credits: {
      cast: [
        {
          id: 9005,
          name: "Noah Le",
          character: "Engineer Oliver Pike",
          profile_path: "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
        },
        {
          id: 9006,
          name: "Mai Phan",
          character: "Pilot Aria Holt",
          profile_path: "/mYf3LdmkM5rOF3kSdTgxZLy5H4H.jpg",
        },
        {
          id: 9002,
          name: "Kai Pham",
          character: "Commander Devin Shaw",
          profile_path: "/4q2gyibFu4Yr0IB5ZS41kwNK4p1.jpg",
        },
      ],
      crew: [
        { id: 9109, job: "Director", name: "Elliot Marsh" },
        { id: 9110, job: "Screenplay", name: "Elliot Marsh" },
      ],
    },
    videos: {
      results: [
        {
          id: "the-last-satellite-trailer",
          key: "V5M2WZiMLZA",
          name: "Official Trailer",
          site: "YouTube",
          type: "Trailer",
        },
      ],
    },
    recommendations: [1001, 1003],
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    production_companies: [{ id: 8005, name: "Northstar Media" }],
    trendingScore: 82,
  },
];

export const TV_SHOWS = [
  {
    id: 2001,
    media_type: "tv",
    name: "Nebula Frontier",
    original_name: "Nebula Frontier",
    origin_country: ["US"],
    status: "Returning Series",
    first_air_date: "2022-03-10",
    last_air_date: "2024-05-18",
    number_of_seasons: 3,
    number_of_episodes: 24,
    vote_average: 8.1,
    vote_count: 980,
    popularity: 520.4,
    genre_ids: [10765, 10759],
    genres: [10765, 10759].map((id) => TV_GENRES.find((genre) => genre.id === id)),
    poster_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    backdrop_path: "/nBM0IoCuNESqwZ0i7tAhLwSdAA3.jpg",
    overview:
      "A science vessel charting the unexplored edge of the galaxy discovers a network of portals built by an ancient civilization with unfinished plans for humanity.",
    content_ratings: {
      results: [
        {
          iso_3166_1: "US",
          rating: "TV-14",
        },
      ],
    },
    aggregate_credits: {
      cast: [
        {
          id: 9001,
          name: "Ava Nguyen",
          profile_path: "/7M6uEWteI9aGVr3vY9ofuUBeoUj.jpg",
          roles: [
            {
              character: "Dr. Hana Minh",
              episode_count: 24,
            },
          ],
        },
        {
          id: 9002,
          name: "Kai Pham",
          profile_path: "/4q2gyibFu4Yr0IB5ZS41kwNK4p1.jpg",
          roles: [
            {
              character: "Captain Orion Shaw",
              episode_count: 24,
            },
          ],
        },
        {
          id: 9006,
          name: "Mai Phan",
          profile_path: "/mYf3LdmkM5rOF3kSdTgxZLy5H4H.jpg",
          roles: [
            {
              character: "Navigator Selene Holt",
              episode_count: 18,
            },
          ],
        },
      ],
      crew: [
        {
          id: 9111,
          name: "Isabella Vu",
          jobs: [
            { job: "Director" },
            { job: "Writer" },
          ],
        },
        {
          id: 9112,
          name: "Marco Le",
          jobs: [{ job: "Writer" }],
        },
      ],
    },
    videos: {
      results: [
        {
          id: "nebula-frontier-trailer",
          key: "Q3F1fF1x0Q8",
          name: "Season 3 Trailer",
          site: "YouTube",
          type: "Trailer",
        },
      ],
    },
    seasons: [
      {
        id: 30011,
        name: "Season 3",
        season_number: 3,
        air_date: "2024-03-08",
        episode_count: 8,
        vote_average: 8.3,
        overview: "The crew faces the architects of the portal network in a conflict that spans multiple realities.",
        poster_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      },
      {
        id: 30010,
        name: "Season 2",
        season_number: 2,
        air_date: "2023-03-12",
        episode_count: 8,
        vote_average: 8.0,
        overview: "New alliances form as the Nebula Frontier charts deeper into the unknown.",
        poster_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      },
      {
        id: 30009,
        name: "Season 1",
        season_number: 1,
        air_date: "2022-03-10",
        episode_count: 8,
        vote_average: 7.9,
        overview: "The crew discovers a vast network of wormholes and the dangers guarding them.",
        poster_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      },
    ],
    networks: [
      {
        id: 5001,
        name: "Solar Stream",
        logo_path: "/pmvDamP0iO6bL9FN2cOfsWga86r.png",
      },
    ],
    recommendations: [2002, 2003],
    trendingScore: 96,
  },
  {
    id: 2002,
    media_type: "tv",
    name: "Chronicle of Dawn",
    original_name: "Chronicle of Dawn",
    origin_country: ["US"],
    status: "Ended",
    first_air_date: "2021-01-19",
    last_air_date: "2022-12-07",
    number_of_seasons: 2,
    number_of_episodes: 16,
    vote_average: 7.8,
    vote_count: 540,
    popularity: 332.7,
    genre_ids: [18, 9648],
    genres: [18, 9648].map((id) => TV_GENRES.find((genre) => genre.id === id)),
    poster_path: "/9ZyTZrGwNcAc68BzbqtPfjsSfqq.jpg",
    backdrop_path: "/kO35QLVBRCDLoiZWsCR4VIX89Hp.jpg",
    overview:
      "Each sunrise brings a new clue to a decades-long mystery that binds a mountain town together in unexpected ways.",
    content_ratings: {
      results: [
        {
          iso_3166_1: "US",
          rating: "TV-PG",
        },
      ],
    },
    aggregate_credits: {
      cast: [
        {
          id: 9003,
          name: "Linh Vo",
          profile_path: "/wnVXGCO1pO0HtM2gbcHjnYFQyL9.jpg",
          roles: [
            {
              character: "Detective Mina Pham",
              episode_count: 16,
            },
          ],
        },
        {
          id: 9004,
          name: "Elias Tran",
          profile_path: "/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg",
          roles: [
            {
              character: "Mayor Lucas Tran",
              episode_count: 16,
            },
          ],
        },
      ],
      crew: [
        {
          id: 9113,
          name: "Jordan Wells",
          jobs: [{ job: "Director" }],
        },
        {
          id: 9114,
          name: "Jordan Wells",
          jobs: [{ job: "Writer" }],
        },
      ],
    },
    videos: {
      results: [
        {
          id: "chronicle-of-dawn-trailer",
          key: "OSLxAWWl2r0",
          name: "Series Trailer",
          site: "YouTube",
          type: "Trailer",
        },
      ],
    },
    seasons: [
      {
        id: 30021,
        name: "Season 2",
        season_number: 2,
        air_date: "2022-03-05",
        episode_count: 8,
        vote_average: 7.7,
        overview: "Final revelations surface as the town learns the truth about the Dawn Signal.",
        poster_path: "/9ZyTZrGwNcAc68BzbqtPfjsSfqq.jpg",
      },
      {
        id: 30020,
        name: "Season 1",
        season_number: 1,
        air_date: "2021-01-19",
        episode_count: 8,
        vote_average: 7.6,
        overview: "A journal found after a solar flare hints at a hidden conspiracy.",
        poster_path: "/9ZyTZrGwNcAc68BzbqtPfjsSfqq.jpg",
      },
    ],
    networks: [
      {
        id: 5002,
        name: "Dawn Network",
        logo_path: "/8kHw0Q0gby6jKNKxQ09S2GOm1u4.png",
      },
    ],
    recommendations: [2001, 2003],
    trendingScore: 84,
  },
  {
    id: 2003,
    media_type: "tv",
    name: "Signal Horizon",
    original_name: "Signal Horizon",
    origin_country: ["CA"],
    status: "Returning Series",
    first_air_date: "2023-05-02",
    last_air_date: "2024-06-11",
    number_of_seasons: 2,
    number_of_episodes: 16,
    vote_average: 8.4,
    vote_count: 420,
    popularity: 295.1,
    genre_ids: [10765, 18],
    genres: [10765, 18].map((id) => TV_GENRES.find((genre) => genre.id === id)),
    poster_path: "/s5thdcbJzU9B1cwz6EjTpmDjy5b.jpg",
    backdrop_path: "/frDS8A5y4GQ3NnOYY9YZRR1u0N8.jpg",
    overview:
      "Scientists stationed at a polar outpost intercept a broadcast from another dimension that begins to alter their reality.",
    content_ratings: {
      results: [
        {
          iso_3166_1: "US",
          rating: "TV-14",
        },
      ],
    },
    aggregate_credits: {
      cast: [
        {
          id: 9005,
          name: "Noah Le",
          profile_path: "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
          roles: [
            {
              character: "Dr. Ethan Cross",
              episode_count: 16,
            },
          ],
        },
        {
          id: 9006,
          name: "Mai Phan",
          profile_path: "/mYf3LdmkM5rOF3kSdTgxZLy5H4H.jpg",
          roles: [
            {
              character: "Communications Officer Lani Quinn",
              episode_count: 16,
            },
          ],
        },
      ],
      crew: [
        {
          id: 9115,
          name: "Sora Patel",
          jobs: [{ job: "Director" }],
        },
        {
          id: 9116,
          name: "Sora Patel",
          jobs: [{ job: "Writer" }],
        },
      ],
    },
    videos: {
      results: [
        {
          id: "signal-horizon-trailer",
          key: "Yl3SVskadk8",
          name: "Season 2 Trailer",
          site: "YouTube",
          type: "Trailer",
        },
      ],
    },
    seasons: [
      {
        id: 30031,
        name: "Season 2",
        season_number: 2,
        air_date: "2024-05-14",
        episode_count: 8,
        vote_average: 8.5,
        overview: "Reality fractures further as the horizon signal merges timelines.",
        poster_path: "/s5thdcbJzU9B1cwz6EjTpmDjy5b.jpg",
      },
      {
        id: 30030,
        name: "Season 1",
        season_number: 1,
        air_date: "2023-05-02",
        episode_count: 8,
        vote_average: 8.2,
        overview: "A research crew discovers a transmission from beyond the known universe.",
        poster_path: "/s5thdcbJzU9B1cwz6EjTpmDjy5b.jpg",
      },
    ],
    networks: [
      {
        id: 5003,
        name: "Horizon Media",
        logo_path: "/x4YE7T2whVV4Z9L5qVDc9C1jS2L.png",
      },
    ],
    recommendations: [2001, 2002],
    trendingScore: 90,
  },
];

export const PEOPLE = [
  {
    id: 9001,
    name: "Ava Nguyen",
    known_for_department: "Acting",
    gender: 1,
    biography:
      "Ava Nguyen is a Vietnamese-Canadian performer celebrated for bringing grounded emotion to expansive science-fiction worlds. After training as a stage actor, she transitioned to film with a breakout role in \"Aurora Rising\" before leading the acclaimed series \"Nebula Frontier\".",
    place_of_birth: "Da Nang, Vietnam",
    birthday: "1990-04-15",
    profile_path: "/7M6uEWteI9aGVr3vY9ofuUBeoUj.jpg",
    combined_credits: {
      cast: [
        {
          id: 1001,
          media_type: "movie",
          title: "Aurora Rising",
          character: "Commander Linh Tran",
          release_date: "2023-09-18",
          poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          vote_average: 8.3,
        },
        {
          id: 2001,
          media_type: "tv",
          name: "Nebula Frontier",
          character: "Dr. Hana Minh",
          first_air_date: "2022-03-10",
          poster_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
          vote_average: 8.1,
        },
        {
          id: 1003,
          media_type: "movie",
          title: "Echoes of Tomorrow",
          character: "Archive Librarian Ly",
          release_date: "2024-02-14",
          poster_path: "/z4naZ5XZuO5GZ96v9MzG1IGBOWJ.jpg",
          vote_average: 8.7,
        },
      ],
    },
  },
  {
    id: 9002,
    name: "Kai Pham",
    known_for_department: "Acting",
    gender: 2,
    biography:
      "Kai Pham is a Vietnamese-American actor who blends charisma with quiet intensity. He is best known for portraying daring pilots and complicated heroes across blockbuster adventures.",
    place_of_birth: "Houston, USA",
    birthday: "1987-09-27",
    profile_path: "/4q2gyibFu4Yr0IB5ZS41kwNK4p1.jpg",
    combined_credits: {
      cast: [
        {
          id: 1001,
          media_type: "movie",
          title: "Aurora Rising",
          character: "Navigator Theo Vu",
          release_date: "2023-09-18",
          poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          vote_average: 8.3,
        },
        {
          id: 2001,
          media_type: "tv",
          name: "Nebula Frontier",
          character: "Captain Orion Shaw",
          first_air_date: "2022-03-10",
          poster_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
          vote_average: 8.1,
        },
        {
          id: 1004,
          media_type: "movie",
          title: "The Last Satellite",
          character: "Commander Devin Shaw",
          release_date: "2021-07-22",
          poster_path: "/t2NEeYNXd1XTaa35hcLYP0Qxm1r.jpg",
          vote_average: 7.2,
        },
      ],
    },
  },
  {
    id: 9003,
    name: "Linh Vo",
    known_for_department: "Acting",
    gender: 1,
    biography:
      "Linh Vo is an award-winning performer whose thoughtful portrayals anchor elevated mysteries. Her dual work in \"Lunar Tide\" and \"Chronicle of Dawn\" earned international recognition.",
    place_of_birth: "Hue, Vietnam",
    birthday: "1992-01-08",
    profile_path: "/wnVXGCO1pO0HtM2gbcHjnYFQyL9.jpg",
    combined_credits: {
      cast: [
        {
          id: 1002,
          media_type: "movie",
          title: "Lunar Tide",
          character: "Mara Nguyen",
          release_date: "2022-11-04",
          poster_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
          vote_average: 7.6,
        },
        {
          id: 2002,
          media_type: "tv",
          name: "Chronicle of Dawn",
          character: "Detective Mina Pham",
          first_air_date: "2021-01-19",
          poster_path: "/9ZyTZrGwNcAc68BzbqtPfjsSfqq.jpg",
          vote_average: 7.8,
        },
        {
          id: 1001,
          media_type: "movie",
          title: "Aurora Rising",
          character: "Scientist Mai Ly",
          release_date: "2023-09-18",
          poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          vote_average: 8.3,
        },
      ],
    },
  },
  {
    id: 9004,
    name: "Elias Tran",
    known_for_department: "Acting",
    gender: 2,
    biography:
      "Elias Tran is a versatile actor and stunt performer noted for combining political intrigue with high-stakes action across film and television.",
    place_of_birth: "Seattle, USA",
    birthday: "1984-12-03",
    profile_path: "/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg",
    combined_credits: {
      cast: [
        {
          id: 1002,
          media_type: "movie",
          title: "Lunar Tide",
          character: "Noah Tran",
          release_date: "2022-11-04",
          poster_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
          vote_average: 7.6,
        },
        {
          id: 2002,
          media_type: "tv",
          name: "Chronicle of Dawn",
          character: "Mayor Lucas Tran",
          first_air_date: "2021-01-19",
          poster_path: "/9ZyTZrGwNcAc68BzbqtPfjsSfqq.jpg",
          vote_average: 7.8,
        },
        {
          id: 1003,
          media_type: "movie",
          title: "Echoes of Tomorrow",
          character: "Time Courier Rhys",
          release_date: "2024-02-14",
          poster_path: "/z4naZ5XZuO5GZ96v9MzG1IGBOWJ.jpg",
          vote_average: 8.7,
        },
      ],
    },
  },
  {
    id: 9005,
    name: "Noah Le",
    known_for_department: "Acting",
    gender: 2,
    biography:
      "Noah Le is a Canadian actor whose performances in cerebral science-fiction stories have made him a fan favorite among genre audiences.",
    place_of_birth: "Toronto, Canada",
    birthday: "1989-06-20",
    profile_path: "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
    combined_credits: {
      cast: [
        {
          id: 1003,
          media_type: "movie",
          title: "Echoes of Tomorrow",
          character: "Dr. Eliot Marlow",
          release_date: "2024-02-14",
          poster_path: "/z4naZ5XZuO5GZ96v9MzG1IGBOWJ.jpg",
          vote_average: 8.7,
        },
        {
          id: 2003,
          media_type: "tv",
          name: "Signal Horizon",
          character: "Dr. Ethan Cross",
          first_air_date: "2023-05-02",
          poster_path: "/s5thdcbJzU9B1cwz6EjTpmDjy5b.jpg",
          vote_average: 8.4,
        },
        {
          id: 1004,
          media_type: "movie",
          title: "The Last Satellite",
          character: "Engineer Oliver Pike",
          release_date: "2021-07-22",
          poster_path: "/t2NEeYNXd1XTaa35hcLYP0Qxm1r.jpg",
          vote_average: 7.2,
        },
      ],
    },
  },
  {
    id: 9006,
    name: "Mai Phan",
    known_for_department: "Acting",
    gender: 1,
    biography:
      "Mai Phan is a Vietnamese-Australian actor and producer who gravitates toward stories about resilience and exploration.",
    place_of_birth: "Sydney, Australia",
    birthday: "1993-08-02",
    profile_path: "/mYf3LdmkM5rOF3kSdTgxZLy5H4H.jpg",
    combined_credits: {
      cast: [
        {
          id: 2001,
          media_type: "tv",
          name: "Nebula Frontier",
          character: "Navigator Selene Holt",
          first_air_date: "2022-03-10",
          poster_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
          vote_average: 8.1,
        },
        {
          id: 2003,
          media_type: "tv",
          name: "Signal Horizon",
          character: "Communications Officer Lani Quinn",
          first_air_date: "2023-05-02",
          poster_path: "/s5thdcbJzU9B1cwz6EjTpmDjy5b.jpg",
          vote_average: 8.4,
        },
        {
          id: 1004,
          media_type: "movie",
          title: "The Last Satellite",
          character: "Pilot Aria Holt",
          release_date: "2021-07-22",
          poster_path: "/t2NEeYNXd1XTaa35hcLYP0Qxm1r.jpg",
          vote_average: 7.2,
        },
      ],
    },
  },
];
