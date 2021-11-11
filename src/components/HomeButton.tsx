import React from 'react'
import Link from 'next/link'
import { TEXTS } from 'constants/texts'

export const HomeButton: React.FC = () => <Link href="/">{TEXTS.home}</Link>
