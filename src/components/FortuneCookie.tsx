import React, { Dispatch, SetStateAction, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

import { TEXTS } from 'constants/texts'
import { GOLDEN_SHADOW, MAIN_PADDING } from 'utils/theme'
import { PaperScroll } from './PaperScroll'

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const stay = keyframes`
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`

const lowerIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -50px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
`

const vibrate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(20deg);
  }
  45% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  55% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const Title = styled('h1')<{ allowMotion: boolean }>`
  font: 6rem/8rem 'Caveat', cursiv;
  filter: drop-shadow(0.5px 1px 4px ${GOLDEN_SHADOW});
  margin: 0 auto;
  padding: 0.3em 0;
  width: fit-content;
  animation: ${({ allowMotion }) => (allowMotion ? appear : stay)} 1.5s 1;
  text-align: center;
`

export const FortuneCookie: React.FC<{ allowMotion: boolean }> = ({
  allowMotion,
}) => {
  const [isCookieCracked, crackCookie] = useState(false)

  return (
    <section>
      {!isCookieCracked ? (
        <>
          <Title allowMotion={allowMotion}>{TEXTS.how_s_it}</Title>
          <StyledCookie
            onClick={() => crackCookie(true)}
            allowMotion={allowMotion}
          />
        </>
      ) : (
        <StyledMessage />
      )}
    </section>
  )
}

const CookieSVG: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 465 353">
    <g transform="translate(-2365.4 1838.7)">
      <g transform="translate(1.223)">
        <path
          fill="none"
          d="M2365.4 -1838.7H2827.4V-1485.7H2365.4z"
          color="#000"
        ></path>
        <g transform="translate(821.59 -389.04)">
          <path
            fill="#f9f9f9"
            d="M1950.2-1352.6c-18.732 3.735-39.795 12.001-68.034 29.824-42.783 27.002-86.264 71.4-116.25 64.921-66.15-14.289-120.94-14.177-150.99-7.368-18.954 4.294-47.431 19.216-71.119 38.582 6.391 20.928 18.314 42.31 33.029 59.294 19.979-33.712 48.815-61.05 143.66-37.296 100.01 25.05 165.07-54.516 176.52-63.436 31.255-24.348 49.341-17.142 65.398-11.337l43.394-75.897s-34.155-1.562-55.598 2.713z"
          ></path>
          <path
            fill="#fff"
            d="M1982.6 36.969c-10.98.14-24.621.868-34.375 2.813-17.654 3.52-37.704 11.286-65.375 28.75-20.758 13.1-42.232 30.891-62.656 44.874-20.425 13.983-40.052 25.32-59.469 21.125-65.26-14.097-119.54-13.76-147.59-7.406-15.711 3.56-41.498 16.613-63.469 33.594 5.206 14.914 13.279 29.871 23.094 42.97 9.643-13.947 22.171-26.76 41.5-34 23.71-8.881 56.326-9.473 104.62 2.624 47.697 11.947 86.503-.93 115.5-18.094 14.499-8.581 26.446-18.246 35.469-26.344 9.022-8.097 14.254-14.06 18.75-17.562 16.51-12.862 30.586-18.015 42.875-18.625 9.23-.458 17.108 1.579 23.812 3.844l33.5-58.47c-2.768-.032-2.636-.138-6.125-.094z"
            transform="translate(0 -1384.5)"
          ></path>
        </g>
        <path
          fill="#fcb659"
          d="M2444.9-1783.2c-13.246 23.521-20.824 50.661-20.824 79.579 0 89.717 72.752 162.44 162.47 162.44 89.719 0 162.44-72.722 162.44-162.44 0-28.918-7.578-56.058-20.824-79.579-37.37 10.224-102.81 32.237-141.62 94.546-29.046-55.275-99.19-87.395-141.65-94.546z"
          color="#000"
        ></path>
        <path
          fill="#f79937"
          d="M2445.2-1783.1l-.642.866c.866-.402 112.48 108.13 118.93 121.08 7.182-10.984 14.59-21.178 23.12-27.44-29.134-54.89-99.041-87.29-141.41-94.503z"
        ></path>
        <path
          fill="#f79937"
          d="M2728.2-1783.2l-2.569.335c7.68 76.555 12.07 152.55-53.307 216.02 45.774-28.729 76.176-79.66 76.176-137.69 0-28.544-7.371-55.352-20.301-78.66z"
        ></path>
        <path
          fill="#f68914"
          fillRule="evenodd"
          d="M2445.2-1783.1c47.941 25.523 90.124 63.411 125.21 111.86 3.068-4.208 6.216-8.13 9.522-11.505l.055-.055c-30.351-49.351-94.686-84.27-134.79-100.3z"
        ></path>
        <path
          fill="#f68914"
          d="M2733.5-1754.6l-1.75.228c-2.657.347 3.216 43.346 1.34 63.574-3.232 34.862-11.968 60.552-11.968 60.552-.976 2.87 1.06 6.944 3.615 2.712 6.728-11.148 21.14-46.314 21.14-74.953 0-19.434-3.658-53.25-12.377-52.112z"
        ></path>
        <path
          fill="#f9f9f9"
          d="M2810.7-1744.6c-11.662.058-27.171.65-38.898 2.988-10.717 2.137-22.201 5.765-35.352 11.812v61.349c20.826-10.048 34.828-4.573 47.554.028l43.394-75.897s-4.817-.23-11.951-.28c-1.486-.01-3.081-.01-4.747 0z"
          color="#000"
        ></path>
        <path
          fill="#fdc67d"
          d="M2451.3-1737.9c-7.304 16.822-9.377 60.996-3.325 80.772 10.122 33.075 69.382 99.896 111.14 102.06 64.079 3.329 119.79-48.746 119.79-112.91 0-20.681-6.143-52.382-15.616-69.204-26.727 7.312-73.53 55.94-101.28 100.5-20.774-39.532-80.338-96.112-110.7-101.23z"
          color="#000"
        ></path>
        <path
          fill="#fff"
          d="M2803.6-1735.4c-10.98.14-24.621.868-34.375 2.813-9.878 1.969-20.52 5.291-32.812 10.874v44.281c5.68-1.992 11.028-3 16.062-3.25 9.23-.458 17.108 1.579 23.812 3.844l33.438-58.469c-2.768-.032-2.636-.138-6.125-.094z"
          color="#000"
        ></path>
      </g>
    </g>
  </svg>
)

const animateCookie = () =>
  css`
    ${lowerIn}, ${vibrate};
  `

const StyledCookie = styled('article').attrs({ children: <CookieSVG /> })<{
  onClick: Dispatch<SetStateAction<boolean>>
  allowMotion: boolean
}>`
  width: 50vw;
  height: 50vh;
  margin: auto;
  filter: drop-shadow(1px 2px 8px ${GOLDEN_SHADOW});
  animation-name: ${({ allowMotion }) => allowMotion && animateCookie};
  animation-duration: 1s, 2s;
  animation-delay: 0s, 0.5s;
  animation-iteration-count: 1, 1;
  &:hover {
    cursor: pointer;
    transform: rotate(10deg);
    transition: ease-out transform 0.2s;
  }
  &:focus {
    transform: rotate(-10deg);
    transition: ease-in transform 0.2s;
  }
`

const rollOut = keyframes`
  0% {
    height: 0.5vw;
    opacity: 0;
  }
  30% {
    height: 5vw;
    opacity: 1;
  }
  100% {
    height: 70vw;
  }
`

const StyledMessage = styled('article').attrs({
  children: (
    <>
      <PaperScroll />
      <div>hello</div>
    </>
  ),
})`
  position: relative;
  margin: 0 auto;
  width: calc(100vw - ${MAIN_PADDING * 2}px);
  height: calc(100vh - ${MAIN_PADDING * 2}px);
  > svg {
    animation: ${rollOut} 2s 1;
    transform: rotate(90deg);
    height: 70vw;
    width: 30vw;
    position: absolute;
    left: calc((100vw - 30vw) / 2);
    z-index: 1;
    filter: drop-shadow(1px 2px 8px ${GOLDEN_SHADOW});
  }
  > div {
    position: absolute;
    top: 0;
    z-index: 2;
  }
`
