import React, { useContext } from 'react'
import { useCookies } from 'react-cookie'
import styled, { keyframes, ThemeContext } from 'styled-components'

import { ALLOW_MOTION, PANIC_ROOM_PREFERENCES } from 'constants/theme'
import { getValueFromCookieString } from 'utils/theme'

import { Preferences, Theme } from 'types'

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

const Background = styled('div')<{
  theme: Theme
  className?: string
  margin?: string
  allowMotion: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  margin: ${({ margin = '15% 0 0 20%' }) => margin};
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
    box-shadow: 0 0 3px ${({ theme }) => theme.stars.twinkle};
    border-radius: 50%;
  }

  #twinkle-star-1 {
    width: 5px;
    height: 6px;
    right: 32%;
    top: 30%;
    background: ${({ theme }) => theme.stars.shine[0]};
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s alternate
      infinite;
    -webkit-animation-delay: 1.61404s;
    animation-delay: 1.61404s;
  }

  #twinkle-star-2 {
    right: 12%;
    top: 74.5%;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.stars.shine[1]};
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s alternate
      infinite;
    -webkit-animation-delay: 4.09091s;
    animation-delay: 4.09091s;
  }

  #twinkle-star-3 {
    background: ${({ theme }) => theme.stars.shine[1]};
    width: 3px;
    height: 3px;
    left: 35%;
    top: 77%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s alternate
      infinite;
    -webkit-animation-delay: 1.77143s;
    animation-delay: 1.77143s;
  }

  #twinkle-star-4 {
    width: 5px;
    height: 5px;
    left: 14%;
    top: 13%;
    background: ${({ theme }) => theme.stars.shine[0]};
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s alternate
      infinite;
    -webkit-animation-delay: 1.55357s;
    animation-delay: 1.55357s;
  }

  #twinkle-star-5 {
    background: ${({ theme }) => theme.stars.shine[2]};
    width: 4px;
    height: 4px;
    left: 92%;
    top: 50%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s alternate
      infinite;
    -webkit-animation-delay: 0.88462s;
    animation-delay: 0.88462s;
  }

  #twinkle-star-6 {
    background: ${({ theme }) => theme.stars.shine[2]};
    width: 3px;
    height: 3px;
    left: 10%;
    top: 48%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s alternate
      infinite;
    -webkit-animation-delay: 0.66s;
    animation-delay: 0.66s;
  }

  #twinkle-star-7 {
    background: ${({ theme }) => theme.stars.shine[3]};
    width: 5px;
    height: 5px;
    left: 20%;
    bottom: 4%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s alternate
      infinite;
    -webkit-animation-delay: 0.03279s;
    animation-delay: 0.03279s;
  }

  #twinkle-star-8 {
    right: 2%;
    top: 84.5%;
    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.stars.shine[3]};
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s alternate
      infinite;
    -webkit-animation-delay: 4.09091s;
    animation-delay: 4.09091s;
  }

  #twinkle-star-9 {
    background: ${({ theme }) => theme.stars.shine[1]};
    width: 3px;
    height: 3px;
    left: 30%;
    top: 97%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s alternate
      infinite;
    -webkit-animation-delay: 1.77143s;
    animation-delay: 1.77143s;
  }

  #twinkle-star-10 {
    width: 6px;
    height: 6px;
    left: 53%;
    top: 16.8%;
    background: ${({ theme }) => theme.stars.shine[0]};
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s alternate
      infinite;
    -webkit-animation-delay: 1.55357s;
    animation-delay: 1.55357s;
  }

  #twinkle-star-11 {
    background: ${({ theme }) => theme.stars.shine[2]};
    width: 5px;
    height: 5px;
    left: 32%;
    top: 40%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s alternate
      infinite;
    -webkit-animation-delay: 0.88462s;
    animation-delay: 0.88462s;
  }

  #twinkle-star-12 {
    background: ${({ theme }) => theme.stars.shine[3]};
    width: 3px;
    height: 3px;
    left: 2%;
    top: 48%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.5s alternate
      infinite;
    -webkit-animation-delay: 0.66s;
    animation-delay: 0.66s;
  }

  #twinkle-star-13 {
    background: ${({ theme }) => theme.stars.shine[1]};
    width: 6px;
    height: 6px;
    left: 29%;
    top: 40%;
    -webkit-animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s
      alternate infinite;
    animation: ${({ allowMotion }) => allowMotion && twinkle} 0.75s alternate
      infinite;
    -webkit-animation-delay: 0.03279s;
    animation-delay: 0.03279s;
  }

  .line {
    width: 1px;
    height: 1px;
    position: absolute;
    background: ${({ theme }) => theme.stars.line};
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
`

export const HomeScreen: React.FC<{ preferences: string }> = ({
  preferences,
}) => {
  const { darkModeActive, theme } = useContext(ThemeContext)
  const [cookies] = useCookies([PANIC_ROOM_PREFERENCES])
  const userPreferences =
    preferences || (cookies[PANIC_ROOM_PREFERENCES] as Preferences)
  const allowMotion =
    typeof userPreferences === 'string'
      ? getValueFromCookieString({ cookie: preferences, value: ALLOW_MOTION })
      : userPreferences.allowMotion

  return (
    <>
      <Background
        className="night-sky"
        theme={darkModeActive ? theme.darkTheme : theme.lightTheme}
        allowMotion={Boolean(allowMotion)}
      >
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
      <Background
        className="night-sky"
        theme={darkModeActive ? theme.darkTheme : theme.lightTheme}
        margin="-5% 0 0 -30%"
        allowMotion={Boolean(allowMotion)}
      >
        <div className="star-box">
          <div className="star" id="twinkle-star-8"></div>
          <div className="star" id="twinkle-star-9"></div>
          <div className="star" id="twinkle-star-10"></div>
          <div className="star" id="twinkle-star-11"></div>
          <div className="star" id="twinkle-star-12"></div>
          <div className="star" id="twinkle-star-13"></div>
        </div>
      </Background>
    </>
  )
}
