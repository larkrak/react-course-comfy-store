import React from "react";
import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Not found</i>
      </p>
      <Link to="/" className="btn">
        Back home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    padding: 3rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
