import React from 'react'

import { Footer } from '.'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
