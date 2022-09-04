import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import MovieList from "./pages/movie-list/MovieList";
import MyList from "./pages/my-list/MyList";
import MovieDetail from "./pages/movie-detail/MovieDetail";
import { AppTitle } from "./appStyled";
import { MOVIE_LIST_PATH, MY_LIST_PATH, MOVIE_DETAIL_PATH } from "./constant";

export default function App() {
  return (
    <main>
      <header>
        <AppTitle>
          <Link to={MOVIE_LIST_PATH}>HOLA MovieApp</Link>
        </AppTitle>
      </header>
      <Routes>
        <Route path={MOVIE_LIST_PATH} element={<MovieList />} />
        <Route path={MY_LIST_PATH} element={<MyList />} />
        <Route
          path={MOVIE_DETAIL_PATH + "/:movieId"}
          element={<MovieDetail />}
        />
      </Routes>
    </main>
  );
}
