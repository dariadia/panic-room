import * as React from 'react'
import { NextPage } from 'next'

export type Page<T> = NextPage<T> & { Layout?: React.FC }
