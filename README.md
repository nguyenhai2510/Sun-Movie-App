# Sun Movie App

This project is a Vite + React implementation of a movie discovery experience inspired by The Movie Database (TMDB). The app ships with a fully offline-ready demo dataset so you can explore the interface without external API credentials.

## Getting Started

```bash
yarn install
yarn dev
```

The application expects the following environment variables:

- `VITE_API_HOST` – TMDB base URL (e.g. `https://api.themoviedb.org/3`).
- `VITE_API_TOKEN` – TMDB read access token when using the live API.
- `VITE_USE_LOCAL_DB` – set to `true` to serve data from the bundled offline database instead of TMDB.

Create a `.env.local` file at the project root to configure these values. When `VITE_USE_LOCAL_DB=true`, you can omit the TMDB-specific settings and the app will rely entirely on the curated dataset located in `src/data/localDatabase.js`.

## Local database

The local database mirrors common TMDB endpoints, covering:

- Trending lists for movies, TV shows, and combined media.
- Top rated listings for both movies and TV.
- Detailed movie, TV, and person pages including credits, videos, recommendations, and certification metadata.
- Genre discovery and search filters with vote-average ranges.

The mock API is implemented in `src/libs/localApi.js`. It understands the same URL patterns used throughout the app, so you can switch between live and offline data sources without touching UI code.

Feel free to extend `src/data/localDatabase.js` with additional media, genres, or people to tailor the catalogue to your needs.
