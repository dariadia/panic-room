import * as React from 'react'
import { NextPage } from 'next'

import { theme } from 'utils/theme'

import { Locale } from '.'

export type Page<T> = NextPage<T> & { Layout?: React.FC }

export interface SinglePage {
  locale?: Locale
  preferences?: string | null
  host?: string
}

export type Theme = typeof theme

export type WithHost = { host?: string }
