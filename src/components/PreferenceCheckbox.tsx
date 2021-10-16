import React from 'react'
import styled from 'styled-components'

export const PreferenceCheckbox: React.FC<{
  htmlFor?: string
  color?: string
}> = styled('label')`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  input:checked ~ span:after {
    display: block;
  }
  input:checked ~ span {
    background-color: ${({ color }) => color};
  }
`
