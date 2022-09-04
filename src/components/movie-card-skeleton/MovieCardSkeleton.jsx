import React from "react";
import { Wrapper, Img, Title, Detail, DetailItem } from "./movieCardSkeletonStyled";

export default function MovieCardSkeleton() {
  return (
    <Wrapper>
      <Img />
      <Title />
      <Detail>
        <DetailItem />
        <DetailItem />
      </Detail>
    </Wrapper>
  );
}
