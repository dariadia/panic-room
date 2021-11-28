import { keyframes } from 'styled-components'
import { GOLDEN_SHADOW } from './theme'

export const appear = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

export const appearSlow = keyframes`
0%, 85% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

export const stay = keyframes`
0% {
  opacity: 0.6;
}
100% {
  opacity: 1;
}
`

export const lowerIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -50px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
`

export const vibrate = keyframes`
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

export const rollOutGlow = keyframes`
  0% {
    height: 0.5vw;
    opacity: 0;
    top: -20vw;
    filter: drop-shadow(8px 16px 48px ${GOLDEN_SHADOW});
  }
  25% {
    height: 5vw;
    opacity: 1;
    top: -10vw;
  }
  100% {
    height: 30vw;
    top: -10vw;
  }
`

export const rollOut = keyframes`
  0% {
    height: 1vw;
    opacity: 0;
    filter: drop-shadow(8px 16px 48px ${GOLDEN_SHADOW});
    background: center / 15vw 1vw no-repeat url('/assets/parchement.svg');
  }
  25% {
    height: 5vw;
    opacity: 1;
    background: center / 15vw 5vw no-repeat url('/assets/parchement.svg');
  }
  100% {
    height: 30vw;
    margin: 50px 0 0 -50px;
    background: center / 15vw 30vw no-repeat url('/assets/parchement.svg');
  }
`
