import React from 'react'

type Props = {
  label: string
}
export const Emoji: React.FC<Props> = ({ children, label }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
)
