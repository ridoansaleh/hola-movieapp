import React from "react";
import { Wrapper, Img, Title, Detail } from "./movieCardStyled";

export default function MovieCard({ title, image, type, year }) {
  return (
    <Wrapper>
      <Img src={image} alt={title} loading="lazy" />
      <Title>{title}</Title>
      <Detail>
        <span>{type}</span>
        <span>{year}</span>
      </Detail>
    </Wrapper>
  );
}
