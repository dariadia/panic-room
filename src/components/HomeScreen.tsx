import React from 'react'
import styled, { keyframes } from 'styled-components'

const twinkle = keyframes`
  0% {
    opacity: .45;
  }
  100% {
    opacity: 1;
  }
`

const line = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`

const Background = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  margin: 15% 0 0 20%;
  padding: 0;
  overflow: hidden;
  position: absolute;
  z-index: 0;

  .star-box {
    width: 320px;
    height: 360px;
    position: relative;
    margin: 0 auto;
  }
  .star {
    position: absolute;
    box-shadow: 0 0 3px #fff;
    border-radius: 50%;
  }

  #twinkle-star-1 {
    width: 5px;
    height: 6px;
    right: 32%;
    top: 30%;
    background: #b6c8ff;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 1.61404s;
    animation-delay: 1.61404s;
  }

  #twinkle-star-2 {
    right: 12%;
    top: 74.5%;
    width: 4px;
    height: 4px;
    background: #f4ccbf;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 4.09091s;
    animation-delay: 4.09091s;
  }

  #twinkle-star-3 {
    background: #f4ccbf;
    width: 3px;
    height: 3px;
    left: 35%;
    top: 77%;
    -webkit-animation: ${twinkle} 0.75s alternate infinite;
    animation: ${twinkle} 0.75s alternate infinite;
    -webkit-animation-delay: 1.77143s;
    animation-delay: 1.77143s;
  }

  #twinkle-star-4 {
    width: 5px;
    height: 5px;
    left: 14%;
    top: 13%;
    background: #b6c8ff;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 1.55357s;
    animation-delay: 1.55357s;
  }

  #twinkle-star-5 {
    background: #f4aaaa;
    width: 4px;
    height: 4px;
    left: 92%;
    top: 50%;
    -webkit-animation: ${twinkle} 0.75s alternate infinite;
    animation: ${twinkle} 0.75s alternate infinite;
    -webkit-animation-delay: 0.88462s;
    animation-delay: 0.88462s;
  }

  #twinkle-star-6 {
    background: #f4aaaa;
    width: 3px;
    height: 3px;
    left: 10%;
    top: 48%;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 0.66s;
    animation-delay: 0.66s;
  }

  #twinkle-star-7 {
    background: #b6c8f9;
    width: 3px;
    height: 3px;
    left: 19%;
    bottom: 4%;
    -webkit-animation: ${twinkle} 0.75s alternate infinite;
    animation: ${twinkle} 0.75s alternate infinite;
    -webkit-animation-delay: 0.03279s;
    animation-delay: 0.03279s;
  }

  #twinkle-star-8 {
    right: 32%;
    top: 84.5%;
    width: 4px;
    height: 4px;
    background: #f4ccbf;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 4.09091s;
    animation-delay: 4.09091s;
  }

  #twinkle-star-9 {
    background: #f4ccbf;
    width: 3px;
    height: 3px;
    left: 30%;
    top: 97%;
    -webkit-animation: ${twinkle} 0.75s alternate infinite;
    animation: ${twinkle} 0.75s alternate infinite;
    -webkit-animation-delay: 1.77143s;
    animation-delay: 1.77143s;
  }

  #twinkle-star-10 {
    width: 5px;
    height: 5px;
    left: 53%;
    top: 16.8%;
    background: #b6c8ff;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 1.55357s;
    animation-delay: 1.55357s;
  }

  #twinkle-star-11 {
    background: #f4aaaa;
    width: 4px;
    height: 4px;
    left: 32%;
    top: 40%;
    -webkit-animation: ${twinkle} 0.75s alternate infinite;
    animation: ${twinkle} 0.75s alternate infinite;
    -webkit-animation-delay: 0.88462s;
    animation-delay: 0.88462s;
  }

  #twinkle-star-12 {
    background: #f4aaaa;
    width: 3px;
    height: 3px;
    left: 10%;
    top: 48.5%;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 0.66s;
    animation-delay: 0.66s;
  }

  #twinkle-star-13 {
    background: #b6c8f9;
    width: 3px;
    height: 3px;
    left: 29%;
    bottom: -4%;
    -webkit-animation: ${twinkle} 0.75s alternate infinite;
    animation: ${twinkle} 0.75s alternate infinite;
    -webkit-animation-delay: 0.03279s;
    animation-delay: 0.03279s;
  }

  .line {
    width: 1px;
    height: 1px;
    position: absolute;
    background: rgba(246, 218, 230, 0.65);
    -webkit-animation: ${line} 7s alternate infinite;
    animation: ${line} 7s alternate infinite;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  #line-1 {
    height: 160px;
    transform: rotate(-70deg);
    top: 0%;
    left: 41%;
  }

  #line-2 {
    height: 90px;
    transform: rotate(-48deg);
    top: 28.5%;
    left: 80%;
  }

  #line-3 {
    height: 70px;
    transform: rotate(12deg);
    top: 53%;
    left: 90%;
  }

  #line-4 {
    height: 120px;
    transform: rotate(-219deg);
    top: 46%;
    left: 24%;
  }

  #line-5 {
    height: 48px;
    transform: rotate(69deg);
    top: 38.2%;
    left: 19.5%;
  }

  #line-6 {
    height: 203px;
    transform: rotate(70deg);
    top: 57.5%;
    left: 53%;
  }

  #line-7 {
    height: 69px;
    transform: rotate(38deg);
    top: 76.5%;
    left: 28%;
  }

  #line-8 {
    height: 215px;
    transform: rotate(-10deg);
    top: 21.5%;
    left: 60.2%;
  }

  #line-9 {
    height: 105px;
    transform: rotate(-42deg);
    top: 17%;
    left: 68.5%;
  }

  #line-10 {
    height: 119px;
    transform: rotate(20deg);
    top: 49%;
    left: 75.5%;
  }

  #line-11 {
    height: 75px;
    transform: rotate(-142deg);
    top: 19%;
    left: 43%;
  }

  #line-12 {
    height: 48px;
    transform: rotate(69deg);
    top: 38.2%;
    left: 21.5%;
  }

  #line-13 {
    height: 101px;
    transform: rotate(69deg);
    top: 77.5%;
    left: 48%;
  }
`

export const HomeScreen: React.FC = () => {
  return (
    <>
      <Background className="night-sky">
        <div className="star-box">
          <div className="star" id="twinkle-star-1"></div>
          <div className="star" id="twinkle-star-2"></div>
          <div className="star" id="twinkle-star-3"></div>
          <div className="star" id="twinkle-star-4"></div>
          <div className="star" id="twinkle-star-5"></div>
          <div className="star" id="twinkle-star-6"></div>
          <div className="star" id="twinkle-star-7"></div>
          <div className="line" id="line-1"></div>
          <div className="line" id="line-2"></div>
          <div className="line" id="line-3"></div>
          <div className="line" id="line-4"></div>
          <div className="line" id="line-5"></div>
          <div className="line" id="line-6"></div>
          <div className="line" id="line-7"></div>
        </div>
      </Background>
      {/* <Background className="night-sky">
        <div className="star-box">
          <div className="star" id="twinkle-star-8"></div>
          <div className="star" id="twinkle-star-9"></div>
          <div className="star" id="twinkle-star-10"></div>
          <div className="star" id="twinkle-star-11"></div>
          <div className="star" id="twinkle-star-12"></div>
          <div className="star" id="twinkle-star-13"></div>
          <div className="line" id="line-8"></div>
          <div className="line" id="line-9"></div>
          <div className="line" id="line-10"></div>
          <div className="line" id="line-11"></div>
          <div className="line" id="line-12"></div>
          <div className="line" id="line-13"></div>
        </div>
      </Background> */}
    </>
  )
}
