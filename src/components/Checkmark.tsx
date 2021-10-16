import React from 'react'
import styled from 'styled-components'

export const Checkmark: React.FC = styled('span')`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  :after {
    content: '';
    position: absolute;
    display: none;
  }
`
