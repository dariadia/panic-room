import React from 'react'

import { ALLOW_MOTION } from 'constants/theme'
import { getValueFromCookieString } from 'utils/theme'

// import { Preferences, Theme } from 'types'

export const HomeScreen: React.FC<{ preferences: string }> = ({
  preferences,
}) => {
  const allowMotion = getValueFromCookieString({
    cookie: preferences,
    value: ALLOW_MOTION,
  })
  console.log(allowMotion)
  return <div>hello world</div>
}
