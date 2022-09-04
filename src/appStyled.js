import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const appStyles = css`
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    min-width: 280px;
    max-width: 1024px;
    padding: 20px 20px 40px;
    margin: auto;
  }

  @media only screen and (min-width: 576px) {
    main {
      padding: 20px 40px 40px;
    }
  }
`;

export const AppTitle = styled.h1`
  margin-top: 0;
  > a {
    text-decoration: none;
  }
`
