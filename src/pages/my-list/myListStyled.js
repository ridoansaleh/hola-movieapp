import styled from "@emotion/styled";

export const MoviesWrapper = styled.section`
  margin-top: 40px;
  display: grid;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 300px 300px;
    gap: 30px 20px;
  }

  @media only screen and (min-width: 1020px) {
    grid-template-columns: 300px 300px 300px;
  }
`;

export const NoData = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;

  > img {
    height: 200px;
    width: 200px;
  }
`;