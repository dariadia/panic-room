import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import { Checkmark } from '.'

const Checkbox: React.FC<{
  htmlFor?: string
  color?: string
}> = styled('label')`
  display: flex;
  width: fit-content;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &: hover {
    filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50%));
    transition: filter 0.2s;
  }
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

type PreferenceCheckboxProps = {
  id: string
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  color: string
}

export const PreferenceCheckbox: React.FC<PreferenceCheckboxProps> = ({
  id,
  name,
  onChange,
  color,
}) => (
  <Checkbox htmlFor={id} color={color}>
    <input
      type="checkbox"
      id={id}
      name={name}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange(event.target)
      }
    />
    {id}
    <Checkmark />
  </Checkbox>
)
