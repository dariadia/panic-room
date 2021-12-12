import React from 'react'

export const HomeScreen: React.FC<{ preferences: string }> = ({
  preferences,
}) => {
  console.log(preferences)
  return <div>hello world</div>
}
