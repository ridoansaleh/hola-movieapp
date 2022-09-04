import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DetailWrapper,
  MovieImg,
  MovieDetail as MovideDescription,
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
  ButtonSkeleton
} from "./movieDetailStyled";
import Breadcrumb from "../../components/breadcrumb";
import { request } from "../../axios";
import ratingIcon from "../../assets/star.png";
import saveIcon from "../../assets/save.png";
import deleteIcon from "../../assets/delete.png";
import homeIcon from "../../assets/home.png";
import { STORAGE } from "../../constant";

const getMovieList = () => {
  let list = localStorage.getItem(STORAGE.MY_MOVIE_LIST);
  return JSON.parse(list) || [];
};

export default function MovieDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  let myMovieList = getMovieList();

  console.log("Params : ", params);

  useEffect(() => {
    if (!params.movieId) return;
    const getMovieDetail = () => {
      request
        .getDetail(params.movieId)
        .then((res) => {
          console.log(res);
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
    localStorage.setItem(STORAGE.MY_MOVIE_LIST, JSON.stringify(updatedList));
    setIsSaved(false);
    alert(`DELETED: ${movie.Title} has been deleted from your list`);
  };

  const handleAddMovie = (movie) => {
    const updatedList = [...myMovieList, movie];
    localStorage.setItem(STORAGE.MY_MOVIE_LIST, JSON.stringify(updatedList));
    setIsSaved(true);
    alert(`SAVED: ${movie.Title} has been added to your list`);
  };

  const navs = [
    {
      name: "Home",
      icon: homeIcon,
      onClick: () => navigate("/"),
    },
    {
      name: "Movie Detail",
    },
  ];

  return (
    <div>
      <>
        <Breadcrumb links={navs} />
        {isLoading ? (
            <DetailWrapper>
              <MovieImgSkeleton />
              <MovideDescription>
                <MovieTitleSkeleton />
                <GenreWrapper>{Array.from({ length: 3 }).map((_, idx) => <GenreSkeleton key={idx} />)}</GenreWrapper>
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
              </MovideDescription>
            </DetailWrapper>
        ) : (
          <DetailWrapper>
            <MovieImg src={movie.Poster} alt={movie.Title} />
            <MovideDescription>
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
                <Bold>Writers</Bold> : {movie.Writer}
              </Item>
              <Item line>
                <Bold>Actors</Bold> : {movie.Actors}
              </Item>
              <Item line>
                <Bold>Year</Bold> : {movie.Year}
              </Item>
              <Item line>
                <Bold>IMDb Rating</Bold> :{" "}
                <Rating src={ratingIcon} alt="Rating Icon" /> {movie.imdbRating}{" "}
                / 10
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
            </MovideDescription>
          </DetailWrapper>
        )}
      </>
    </div>
  );
}
