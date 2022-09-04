import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DetailWrapper,
  MovieImg,
  MovieDetail as MovieDescription,
  Genre,
  Bold,
  Item,
  Rating,
  Actions,
  Button,
  MovieImgSkeleton,
  MovieTitleSkeleton,
  GenreSkeleton,
  GenreWrapper,
  PlotSkeleton,
  ItemSkeleton,
  ItemKeySkeleton,
  ItemValueSkeleton,
  ButtonSkeleton,
} from "./movieDetailStyled";
import Breadcrumb from "../../components/breadcrumb";
import request from "../../request";
import ratingIcon from "../../assets/star.png";
import saveIcon from "../../assets/save.png";
import deleteIcon from "../../assets/delete.png";
import homeIcon from "../../assets/home.png";
import { MY_MOVIE_LIST, MOVIE_LIST_PATH } from "../../constant";

const getMovieList = () => {
  let list = localStorage.getItem(MY_MOVIE_LIST);
  return JSON.parse(list) || [];
};

export default function MovieDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const skeletonGenres = Array.from({ length: 3 })
  const params = useParams();
  const navigate = useNavigate();

  let myMovieList = getMovieList();

  useEffect(() => {
    if (!params.movieId) return;
    const getMovieDetail = () => {
      request
        .getDetail(params.movieId)
        .then((res) => {
          setMovie(res.data);
          let myMovieList = getMovieList();
          const isExist = myMovieList.find(
            (movie) => movie.imdbID === res.data.imdbID
          );
          setIsSaved(Boolean(isExist));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Error => ", err);
          setIsLoading(false);
        });
    };
    setTimeout(getMovieDetail, 1000);
  }, [params]);

  const handleDeleteMovie = (movieId) => {
    const updatedList = myMovieList.filter((movie) => movie.imdbID !== movieId);
    localStorage.setItem(MY_MOVIE_LIST, JSON.stringify(updatedList));
    setIsSaved(false);
    alert(`DELETED: "${movie.Title}" has been deleted from your list`);
  };

  const handleAddMovie = (movie) => {
    const updatedList = [...myMovieList, movie];
    localStorage.setItem(MY_MOVIE_LIST, JSON.stringify(updatedList));
    setIsSaved(true);
    alert(`SAVED: "${movie.Title}" has been added to your list`);
  };

  const navs = [
    {
      name: "Home",
      icon: homeIcon,
      onClick: () => navigate(MOVIE_LIST_PATH),
    },
    {
      name: "Movie Detail",
    },
  ];

  return (
    <>
      <Breadcrumb links={navs} />
      {isLoading ? (
        <DetailWrapper>
          <MovieImgSkeleton />
          <MovieDescription>
            <MovieTitleSkeleton />
            <GenreWrapper>
              {skeletonGenres.map((_, idx) => (
                <GenreSkeleton key={idx} />
              ))}
            </GenreWrapper>
            <PlotSkeleton />
            <ItemSkeleton>
              <ItemKeySkeleton />
              <ItemValueSkeleton />
            </ItemSkeleton>
            <ItemSkeleton>
              <ItemKeySkeleton />
              <ItemValueSkeleton width={100} />
            </ItemSkeleton>
            <ItemSkeleton>
              <ItemKeySkeleton />
              <ItemValueSkeleton width={140} />
            </ItemSkeleton>
            <ItemSkeleton>
              <ItemKeySkeleton />
              <ItemValueSkeleton width={100} />
            </ItemSkeleton>
            <Actions>
              <ButtonSkeleton />
            </Actions>
          </MovieDescription>
        </DetailWrapper>
      ) : (
        <DetailWrapper>
          <MovieImg src={movie.Poster} alt={movie.Title} />
          <MovieDescription>
            <h1>{movie.Title}</h1>
            <div>
              {movie.Genre.split(", ").map((genre, idx) => (
                <Genre key={idx}>{genre}</Genre>
              ))}
            </div>
            <p>{movie.Plot}</p>
            <Item line>
              <Bold>Director</Bold> : {movie.Director}
            </Item>
            <Item line>
              <Bold>Writer</Bold> : {movie.Writer}
            </Item>
            <Item line>
              <Bold>Actors</Bold> : {movie.Actors}
            </Item>
            <Item line>
              <Bold>Year</Bold> : {movie.Year}
            </Item>
            <Item line>
              <Bold>IMDb Rating</Bold> :{" "}
              <Rating src={ratingIcon} alt="Rating Icon" /> {movie.imdbRating} /
              10
            </Item>
            <Item line>
              <Bold>Total Votes</Bold> : {movie.imdbVotes}
            </Item>
            <Actions>
              {isSaved ? (
                <Button onClick={() => handleDeleteMovie(movie.imdbID)}>
                  <img src={deleteIcon} alt="Save Icon" />
                  <span>Delete from My List</span>
                </Button>
              ) : (
                <Button onClick={() => handleAddMovie(movie)}>
                  <img src={saveIcon} alt="Save Icon" />
                  <span>Add to My List</span>
                </Button>
              )}
            </Actions>
          </MovieDescription>
        </DetailWrapper>
      )}
    </>
  );
}
