import React from 'react'
import { getUserPreferences } from 'utils/theme'

export const HomeScreen: React.FC = () => {
  const userPreferences = getUserPreferences()
  if (!userPreferences) return null

  return <span>1{userPreferences.allowMotion.toString()}</span>
}
