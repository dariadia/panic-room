import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export const Loader: React.FC = () => {
  const { darkModeActive, theme } = useContext(ThemeContext)
  const loaderFill = darkModeActive
    ? theme.darkTheme.brand
    : theme.lightTheme.brand

  const loaderStroke = darkModeActive
    ? theme.darkTheme.brandShadow
    : theme.lightTheme.brandShadow

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 150 150"
      xmlSpace="preserve"
    >
      <radialGradient
        id="SVGID_1_"
        cx="75"
        cy="52.205"
        r="41.344"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={loaderFill}></stop>
        <stop offset="1" stopColor={loaderStroke}></stop>
      </radialGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M75.253 31.456c26.367 0 48.067 19.957 50.834 45.589.027-.679.052-1.359.052-2.045 0-28.243-22.896-51.139-51.139-51.139S23.861 46.757 23.861 75c0 1.876.108 3.726.305 5.55 1.075-27.294 23.53-49.094 51.087-49.094z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="2s"
          from="0 75 75"
          repeatCount="indefinite"
          to="360 75 75"
          type="rotate"
        ></animateTransform>
      </path>
      <radialGradient
        id="SVGID_2_"
        cx="80.423"
        cy="15.04"
        r="33.075"
        gradientTransform="rotate(180 77.711 55.04)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={loaderFill}></stop>
        <stop offset="1" stopColor={loaderStroke}></stop>
      </radialGradient>
      <path
        fill="url(#SVGID_2_)"
        d="M74.797 111.64c-21.094 0-38.454-15.966-40.667-36.471a42.225 42.225 0 00-.041 1.636c0 22.595 18.317 40.911 40.911 40.911s40.911-18.317 40.911-40.911c0-1.501-.086-2.981-.244-4.44-.859 21.835-18.823 39.275-40.87 39.275z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="2s"
          from="0 75 75"
          repeatCount="indefinite"
          to="-360 75 75"
          type="rotate"
        ></animateTransform>
      </path>
      <radialGradient
        id="SVGID_3_"
        cx="75"
        cy="75"
        r="20.253"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={loaderFill}></stop>
        <stop offset="1" stopColor={loaderStroke}></stop>
      </radialGradient>
      <path
        fill="url(#SVGID_3_)"
        d="M75 54.747c-11.185 0-20.253 9.068-20.253 20.253S63.815 95.253 75 95.253 95.253 86.185 95.253 75c0-11.186-9.068-20.253-20.253-20.253zM60.962 65.62s13.671-16.449 27.342-.609c0 0-12.152-11.88-27.342.609z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="3s"
          from="0 75 75"
          repeatCount="indefinite"
          to="360 75 75"
          type="rotate"
        ></animateTransform>
      </path>
    </svg>
  )
}
