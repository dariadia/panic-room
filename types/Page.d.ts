import * as React from 'react'
import { NextPage } from 'next'

import { theme } from 'utils/theme'

import { Locale, Preferences } from '.'

export type Page<T> = NextPage<T> & { Layout?: React.FC }

export interface SinglePage {
  locale?: Locale
  preferences?: Preferences
}

export type Theme = typeof theme
