import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/img/arrow.svg";

const Button = () => {
  return (
    <MainButton className="w-48 h-12 rounded-sm flex flex-row items-center justify-center cursor-pointer">
      <p className="capitalize text-white text-xs pr-4">Play the game</p>
      <img alt="Arrow" src={Arrow} className="block" />
    </MainButton>
  );
};

export default Button;

const MainButton = styled.div`
  background: #ecab03;
`;
