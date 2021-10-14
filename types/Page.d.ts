import * as React from 'react'
import { NextPage } from 'next'

import { Locale } from '.'

export type Page<T> = NextPage<T> & { Layout?: React.FC }

export interface SinglePage {
  locale?: Locale
}
