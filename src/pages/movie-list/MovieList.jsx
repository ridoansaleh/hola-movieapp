/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import MovieCard from "../../components/movie-card";
import MovieCardSkeleton from "../../components/movie-card-skeleton";
import Breadcrumb from "../../components/breadcrumb";
import { MoviesWrapper } from "./movieListStyled";
import bookmarkIcon from "../../assets/bookmark.png";
import request from "../../request";
import { MY_LIST_PATH, MOVIE_DETAIL_PATH } from '../../constant'

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasRender = useRef(null);
  const pageNumber = useRef(1);
  const hasMoreData = useRef(true);
  const skeletonCards = Array.from({ length: 5 });
  const navigate = useNavigate();

  const getMovies = (currentPage) => {
    request
      .getList(currentPage)
      .then((res) => {
        setMovieList((prevData) => [...prevData, ...res.data.Search]);
        setIsLoading(false);
        hasMoreData.current = res.data.Search.length > 0;
        pageNumber.current = pageNumber.current + 1;
      })
      .catch((err) => {
        console.log("Error => ", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!hasRender.current) {
      getMovies(1);
    }
    hasRender.current = true;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        Math.floor(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight
      ) {
        if (hasMoreData) {
          if (pageNumber.current > 1) setIsLoading(true);
          setTimeout(getMovies(pageNumber.current), 2000);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navs = [
    {
      name: "My Movie List",
      icon: bookmarkIcon,
      onClick: () => navigate(MY_LIST_PATH),
    },
  ];

  return (
    <>
      <Breadcrumb links={navs} />
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
        {isLoading &&
          skeletonCards.map((_, idx) => (
            <MovieCardSkeleton key={movieList.length + idx} />
          ))}
      </MoviesWrapper>
    </>
  );
}
