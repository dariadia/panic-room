import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import { BLUE_SHADOW } from 'utils/theme'
import { Checkmark } from '.'

type CheckboxProps = {
  htmlFor?: string
  color?: string
  id?: string
  shadow?: string
}

const Checkbox: React.FC<CheckboxProps> = styled('label')<CheckboxProps>`
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
  &:hover {
    filter: drop-shadow(1px 2px 8px ${({ shadow = BLUE_SHADOW }) => shadow});
    transition: filter 0.2s;
  }
  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  input:checked ~ div:after {
    display: block;
  }
  input:checked ~ div {
    background-color: ${({ color }) => color};
  }
`

type PreferenceCheckboxProps = {
  id: string
  labelId?: string
  name: string
  onChange: (target: EventTarget & HTMLInputElement) => void
  color: string
  shadow?: string
  checked?: boolean
  'aria-label'?: string
}

export const PreferenceCheckbox: React.FC<PreferenceCheckboxProps> = ({
  id,
  labelId,
  name,
  onChange,
  color,
  children,
  shadow,
  checked,
  ...props
}) => (
  <Checkbox htmlFor={id} color={color} id={labelId} shadow={shadow} {...props}>
    <input
      checked={checked}
      type="checkbox"
      id={id}
      name={name}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange(event.target)
      }
    />
    {children}
    <Checkmark />
  </Checkbox>
)
