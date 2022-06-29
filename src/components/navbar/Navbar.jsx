import React from "react";
import Logo from "../../assets/img/Logo.svg";
import Calendar from "../../assets/img/icon-calendar.svg";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav className="w-screen absolute flex flex-row items-center justify-between top-0 left-0 right-0 md:px-16 lg:px-24 xl:px-28 md:py-10 py-8 px-4 ">
      <img alt="Logo" src={Logo} className="block" />
      <div className="flex flex-row ">
        <div className="rounded-lg calendar__container w-12 h-12 flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center calendar w-10 h-10 rounded-lg">
            <img alt="Calendar" src={Calendar} className="block w-8 h-8" />
          </div>
        </div>
        <div className="ml-3">
          <p className="text-white font-bold text-lg">Day 1</p>
          <p className="text-gray-700 font-normal text-sm">of 5</p>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  .calendar__container {
    background: rgba(255, 255, 255, 0.1);
  }
  .calendar {
    background: #9b51e0;
  }
`;
