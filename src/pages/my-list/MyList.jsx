/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import MovieCard from "../../components/movie-card";
import Breadcrumb from "../../components/breadcrumb";
import { MoviesWrapper, NoData } from "./myListStyled";
import homeIcon from "../../assets/home.png";
import boxIcon from "../../assets/box.png";
import { STORAGE, APP_PATH } from "../../constant";

const { MOVIE_LIST_PATH, MOVIE_DETAIL_PATH } = APP_PATH

export default function MyList() {
  const navigate = useNavigate();

  let movieList = localStorage.getItem(STORAGE.MY_MOVIE_LIST);
  movieList = JSON.parse(movieList) || [];

  const navs = [
    {
      name: "Home",
      icon: homeIcon,
      onClick: () => navigate(MOVIE_LIST_PATH),
    },
    {
      name: "My Movie List",
    },
  ];

  return (
    <>
      <Breadcrumb links={navs} />
      {movieList.length === 0 ? (
        <NoData>
          <img src={boxIcon} alt="Empty Box" />
          <h1>No Movie has been add</h1>
        </NoData>
      ) : (
        <MoviesWrapper>
          {movieList.map((movie, idx) => (
            <Link
              key={idx}
              css={css`
                text-decoration: none;
              `}
              to={`${MOVIE_DETAIL_PATH}/${movie.imdbID}`}
            >
              <MovieCard
                title={movie.Title}
                image={movie.Poster}
                type={movie.Type}
                year={movie.Year}
              />
            </Link>
          ))}
        </MoviesWrapper>
      )}
    </>
  );
}
