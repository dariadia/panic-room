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
    opacity: .5;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Background = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #111;
  background: url('https://unsplash.com/search/stars?photo=9CV7PpdWqHk');
  background-size: cover;
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

  .twinkle-star-1 {
    width: 5px;
    height: 6px;
    right: 16%;
    top: 45%;
    background: #b6c8ff;
    -webkit-animation: ${twinkle} 0.5s alternate infinite;
    animation: ${twinkle} 0.5s alternate infinite;
    -webkit-animation-delay: 1.61404s;
    animation-delay: 1.61404s;
  }

  .twinkle-star-2 {
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
  .twinkle-star-3 {
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

  .twinkle-star-4 {
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

  .twinkle-star-5 {
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

  .twinkle-star-6 {
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

  .twinkle-star-7 {
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

  .line-1 {
    height: 215px;
    transform: rotate(-10deg);
    top: 21.5%;
    left: 60.2%;
  }

  .line-2 {
    height: 105px;
    transform: rotate(-42deg);
    top: 17%;
    left: 68.5%;
  }

  .line-3 {
    height: 119px;
    transform: rotate(20deg);
    top: 49%;
    left: 75.5%;
  }

  .line-4 {
    height: 75px;
    transform: rotate(-142deg);
    top: 19%;
    left: 43%;
  }

  .line-5 {
    height: 48px;
    transform: rotate(69deg);
    top: 38.2%;
    left: 21.5%;
  }
  .line-6 {
    height: 101px;
    transform: rotate(69deg);
    top: 77.5%;
    left: 48%;
  }

  .line-7 {
    height: 8px;
    transform: rotate(9deg);
    top: 99.5%;
    left: 29.8%;
  }
`

export const HomeScreen: React.FC = () => {
  return (
    <>
      <Background className="night-sky">
        <div className="star-box">
          <div className="star twinkle-star-1"></div>
          <div className="star twinkle-star-2"></div>
          <div className="star twinkle-star-3"></div>
          <div className="star twinkle-star-4"></div>
          <div className="star twinkle-star-5"></div>
          <div className="star twinkle-star-6"></div>
          <div className="star twinkle-star-7"></div>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="line line-5"></div>
          <div className="line line-6"></div>
          <div className="line line-7"></div>
        </div>
      </Background>
    </>
  )
}
