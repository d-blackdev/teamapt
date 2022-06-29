import "./App.css";
import Navbar from "./components/navbar/Navbar";
import styled from "styled-components";
import Bg from "./assets/img/background.png";
import Button from "./components/button/Button";
import CoinRight from "./assets/img/coinright.svg";
import PotCoin from "./assets/img/coinpot.svg";
import Combined from "./assets/img/topstars.svg";
import Rotate from "./assets/img/Rotate.svg";

function App() {
  return (
    <HomeBanner className="w-screen h-screen flex flex-col items-center  relative overflow-y-hidden overflow-x-hidden">
      <Navbar />
      <HomeContent className="w-full md:px-16 lg:px-24 xl:px-28 px-4 xl:pt-28 pt-28 mx-auto">
        <h1 className="text-center header__text font-normal md:text-2xl lg:text-5xl text-3xl text-white">
          Unlock to
          <span className="text-white header__text__subtitle md:text-2xl lg:text-5xl text-4xl font-bold text-center pl-2 inline md:hidden">
            Power your dreams!
          </span>
        </h1>
        <h1 className="text-white header__text__subtitle md:text-2xl lg:text-5xl text-4xl font-bold text-center md:block hidden">
          Power your dreams!
        </h1>
        <h6 className="md:w-full  header__subtitle text-xs md:text-sm pt-2 xl:pt-3 text-white text-center   mx-auto ">
          Stand a chance to win&nbsp;
          <span className="inline md:hidden header__subtitle__text text-xs md:text-sm text-center  ">
            N3,000,000&nbsp;
          </span>
          <span className="inline md:hidden ">
            everyday for the next 5 days
          </span>
        </h6>
        <h6 className="header__subtitle text-xs md:text-base pt-1 text-white text-center   mx-auto md:block hidden">
          <span className=" header__subtitle__text text-lg text-center  ">
            N3,000,000&nbsp;
          </span>
          everyday for the next 5 days
        </h6>
      </HomeContent>
      <HomeContentTwo className="w-full md:px-16 lg:px-24 xl:px-28 px-4 mt-5  mx-auto">
        <div className="glass_container py-4 md:w-1/2 mx-auto lg:w-2/5 ">
          <h6 className="text-center text-white font-Medium text-base">
            🚀 How To Play
          </h6>
          <div className="pt-2 px-3">
            <p
              className="text-white opacity-95 md:text-xs text-xs
            "
            >
              1. <span>Guess the right combination of numbers.</span>
            </p>
            <p
              className="text-white opacity-95 md:text-xs text-xs
            "
            >
              2.
              <span>
                &nbsp;Win <span className="font-Bold text-sm">N3,000,000</span>{" "}
                instantly
              </span>
            </p>
            <p
              className="text-white opacity-95 md:text-xs text-xs pt-2
            "
            >
              Sounds unbelievable? Well, guess right & see for yourself!
            </p>
          </div>
          <div className="dark__glass__container px-3 py-3 mx-auto mt-4 flex flex-row ">
            <p className="mr-2">💡</p>
            <p className="text-white opacity-80 text-xs">
              Think well before you guess. You have only 2 attempts per day and
              even after you wi, you can come back the next day to try for
              another jackpot!
            </p>
          </div>
        </div>
      </HomeContentTwo>
      <div className="w-full mx-auto flex flex-row items-center justify-center mt-7">
        <Button />
      </div>
      <div className="absolute top-2 combined animate-pulse">
        <img src={Combined} />
      </div>
      <div className="absolute left__coin animate-bounce">
        <img src={CoinRight} />
      </div>
      <div className="absolute right__coin animate-bounce z-50">
        <img src={CoinRight} />
      </div>
      <div className="absolute pot xl:-bottom-20 lg:-bottom-32 md:-bottom-24 -bottom-12 z-40">
        <img src={PotCoin} />
      </div>
      <div className="absolute bottom-2 rotate ">
        <img src={Rotate} className="block " />
      </div>
      <div className="absolute bottom-2 combined animate-pulse">
        <img src={Combined} />
      </div>
    </HomeBanner>
  );
}

export default App;

const HomeBanner = styled.div`
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .left__coin {
    bottom: 20%;
    left: 20%;
  }
  .right__coin {
    bottom: 3%;
    right: 20%;
  }
  @media (max-width: 1024px) {
    .left__coin {
      bottom: 20%;
      left: 10%;
    }
    .right__coin {
      bottom: 10%;
      right: 8%;
    }
  }
  @media (max-width: 768px) {
    .left__coin {
      bottom: 5%;
      left: 15%;
    }
    .right__coin {
      bottom: -2%;
      right: 20%;
    }
  }
  @media (max-width: 500px) {
    .left__coin {
      bottom: 3%;
      left: 2%;
    }
    .right__coin {
      bottom: -4%;
      right: 2%;
    }
  }
`;

const HomeContent = styled.div`
  .header__text {
    font-weight: 400 !important;
  }
  .header__text__subtitle {
    font-family: Poppins-ExtraBold;
  }
  .header__subtitle {
    font-family: Inter-Regular;
  }
  .header__subtitle__text {
    font-family: Inter-Bold;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const HomeContentTwo = styled.div`
  .glass_container {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.39) -213.5%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: inset 0px -1px 11px rgba(255, 255, 255, 0.17),
      inset 0px 2px 0px rgba(255, 255, 255, 0.24);
    border-radius: 8px;
  }
  .dark__glass__container {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    width: 95%;
  }
  @media (min-width: 2600px) {
    .glass_container {
      width: 20%;
    }
  }
  @media (min-width: 1200px) {
    .glass_container {
      width: 25%;
    }
  }
  @media (max-width: 500px) {
    .glass_container {
      width: 90%;
    }
  }
  @media (max-width: 350px) {
    .glass_container {
      width: 100%;
    }
  }
`;
