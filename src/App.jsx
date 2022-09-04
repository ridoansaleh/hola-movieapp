/** @jsxImportSource @emotion/react */
import { Routes, Route, Link } from "react-router-dom";
import { css } from "@emotion/react";
import MovieList from "./pages/movie-list/MovieList";
import MyList from "./pages/my-list/MyList";
import MovieDetail from "./pages/movie-detail/MovieDetail";
import { APP_PATH } from './constant'

const { MOVIE_LIST_PATH, MY_LIST_PATH, MOVIE_DETAIL_PATH } = APP_PATH

export default function App() {
  return (
    <main>
      <h1>
        <Link
          css={css`
            text-decoration: none;
          `}
          to="/"
        >
          HOLA MovieApp
        </Link>
      </h1>
      <Routes>
        <Route path={MOVIE_LIST_PATH} element={<MovieList />} />
        <Route path={MY_LIST_PATH} element={<MyList />} />
        <Route path={MOVIE_DETAIL_PATH + '/:movieId'} element={<MovieDetail />} />
      </Routes>
    </main>
  );
}
