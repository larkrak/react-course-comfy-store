import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span>
        {stars >= index + 1 ? (
          <BsStarFill key={index}></BsStarFill>
        ) : stars >= number ? (
          <BsStarHalf key={index}></BsStarHalf>
        ) : (
          <BsStar key={index}></BsStar>
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      {/* <span>
          {stars >= 1 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 0.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {stars >= 2 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 1.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {stars >= 3 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 2.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 4 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 3.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars === 5 ? (
            <BsStarFill></BsStarFill>
          ) : stars >= 4.5 ? (
            <BsStarHalf></BsStarHalf>
          ) : (
            <BsStar />
          )}
        </span> */}
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
