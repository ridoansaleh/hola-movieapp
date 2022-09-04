import styled from "@emotion/styled";

export const MoviesWrapper = styled.section`
  margin-top: 40px;
  display: grid;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    gap: 30px 20px;
  }

  @media only screen and (min-width: 940px) {
    grid-template-columns: auto auto auto;
  }
`;
