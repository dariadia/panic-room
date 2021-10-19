import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Trans, useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {
  BLUE_SHADOW,
  defaultPreferences,
  GOLDEN_SHADOW,
  hasUserPreferences,
  setUserPreferences,
} from 'utils/theme'
import { MainLayout } from '@/layouts'

import { PreferenceCheckbox } from '@/components'

import type {
  Event,
  Locale,
  Page,
  SinglePage as SinglePageProps,
  Theme,
} from 'types'

const MenuWrapper = ({
  isMenuFocused,
  triggerMenuFocus,
}: {
  isMenuFocused: boolean
  triggerMenuFocus: Dispatch<SetStateAction<boolean>>
}) => {
  const { darkModeActive, theme } = useContext(ThemeContext)
  const { t } = useTranslation('common')

  const [isMenuOpen, triggerMenuOpen] = useState(false)

  const menuRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (isMenuFocused && menuRef.current) {
      menuRef.current.focus()
      triggerMenuFocus(false)
      setTimeout(() => menuRef.current?.blur(), 800)
    }
  }, [isMenuFocused, triggerMenuFocus])

  const MENU_ID = 'menu-dropdown'
  const MENU_OPTION_MOTION = 'menu-option-motion'
  const MENU_OPTION_SOUNDS = 'menu-option-sounds'

  const MENU_IDs = [MENU_ID, MENU_OPTION_MOTION, MENU_OPTION_SOUNDS]
  const onMenuClick = (target?: EventTarget & HTMLInputElement) => {
    if (!target) return
    setTimeout(() => menuRef.current?.blur(), 800)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const parentNodeId = target.parentNode?.id
    const targetId = target?.id

    if (!parentNodeId && !targetId) {
      triggerMenuOpen(!isMenuOpen)
    } else if (parentNodeId && !MENU_IDs.includes(parentNodeId as string)) {
      triggerMenuOpen(!isMenuOpen)
    }
  }

  const [preferences, setPreferences] = useState(defaultPreferences)
  const onCheckboxChange = (target: EventTarget & HTMLInputElement) =>
    setPreferences({ ...preferences, [target.name]: target.checked })

  return (
    <Menu
      ref={menuRef}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={(event: Event) => onMenuClick(event.target)}
    >
      <span>⚙️</span>
      {isMenuOpen && (
        <MenuDropdown
          id={MENU_ID}
          theme={darkModeActive ? theme.darkTheme : theme.lightTheme}
        >
          <PreferenceCheckbox
            labelId={MENU_OPTION_MOTION}
            id={t('motion')}
            name="allowMotion"
            onChange={onCheckboxChange}
            color="gold"
            shadow={darkModeActive ? GOLDEN_SHADOW : BLUE_SHADOW}
          >
            <span>{t('motion')}</span>
          </PreferenceCheckbox>
          <PreferenceCheckbox
            labelId={MENU_OPTION_SOUNDS}
            id={t('sounds')}
            name="allowSounds"
            onChange={onCheckboxChange}
            color="gold"
            shadow={darkModeActive ? GOLDEN_SHADOW : BLUE_SHADOW}
          >
            <span style={{ lineHeight: 2 }}>{t('sounds')}</span>
          </PreferenceCheckbox>
          <Button onClick={() => setUserPreferences(preferences)} marginTop={8}>
            {t('save')}
          </Button>
        </MenuDropdown>
      )}
    </Menu>
  )
}

const MenuDropdown = styled('div')`
  position: absolute;
  padding: 16px;
  background: ${({ theme }) => theme.brand};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
`

export const Menu = styled('button')`
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 100%;
  position: absolute;
  z-index: 2;
  top: 14px;
  :focus {
    outline: none;
    filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50%));
    background: gold;
  }
`

const HomePage: Page<SinglePageProps> = () => {
  const hasSavedPreferences = hasUserPreferences()

  const [isMenuFocused, triggerMenuFocus] = useState(false)

  const { darkModeActive, theme } = useContext(ThemeContext)

  return (
    <>
      <MenuWrapper
        isMenuFocused={isMenuFocused}
        triggerMenuFocus={triggerMenuFocus}
      />
      {hasSavedPreferences ? (
        <MainScreen />
      ) : (
        <WelcomeScreen
          theme={darkModeActive ? theme.darkTheme : theme.lightTheme}
        >
          <WelcomeMessage triggerMenuFocus={triggerMenuFocus} />
        </WelcomeScreen>
      )}
    </>
  )
}

const MainScreen = () => <span>welcome</span>

const WelcomeScreen: React.FC<{ theme: Theme }> = styled('div')<{
  theme: Theme
}>`
  min-width: 260px;
  width: fit-content;
  max-width: calc(100% - 32px);
  min-height: 50vh;
  margin: 8px auto 0;
  filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50%));
  background: ${({ theme }) => theme.accent};
  border-radius: 4px;
  padding: 16px;
  color: #fafbfc;
`

const WelcomeSection = styled('section')`
  font: 18px/24px monospace;
`

const Branding = styled('span')`
  font-weight: bold;
  font-family: fantasy;
  color: ${({ color }) => color};
`

const WelcomeMessage: React.FC<{
  triggerMenuFocus: Dispatch<SetStateAction<boolean>>
}> = ({ triggerMenuFocus }) => {
  const { t } = useTranslation('common')
  const { darkModeActive, theme } = useContext(ThemeContext)

  const [preferences, setPreferences] = useState(defaultPreferences)
  const onCheckboxChange = (target: EventTarget & HTMLInputElement) =>
    setPreferences({ ...preferences, [target.name]: target.checked })

  return (
    <WelcomeSection>
      <p>
        <Trans
          i18nKey={`common:greeting`}
          components={{
            branding: (
              <Branding
                color={
                  darkModeActive
                    ? theme.darkTheme.brand
                    : theme.lightTheme.brand
                }
              />
            ),
          }}
        />
      </p>
      <p style={{ marginBottom: '32px' }}>
        <Trans
          i18nKey={`common:greeting_intro`}
          components={{
            focused: (
              <button
                onClick={() => triggerMenuFocus(true)}
                style={{ cursor: 'pointer' }}
              />
            ),
          }}
        />
      </p>
      <article>
        <PreferenceCheckbox
          id={t('motion')}
          name="allowMotion"
          onChange={onCheckboxChange}
          color={
            darkModeActive ? theme.darkTheme.brand : theme.lightTheme.brand
          }
          shadow={darkModeActive ? BLUE_SHADOW : GOLDEN_SHADOW}
        >
          <span>{t('motion')}</span>
        </PreferenceCheckbox>
        <PreferenceCheckbox
          id={t('sounds')}
          name="allowSounds"
          onChange={onCheckboxChange}
          color={
            darkModeActive ? theme.darkTheme.brand : theme.lightTheme.brand
          }
          shadow={darkModeActive ? BLUE_SHADOW : GOLDEN_SHADOW}
        >
          <span>{t('sounds')}</span>
        </PreferenceCheckbox>
        <Button onClick={() => setUserPreferences(preferences)}>
          {t('save')}
        </Button>
      </article>
    </WelcomeSection>
  )
}

type ButtonProps = {
  marginTop?: number
  onClick: () => void
  as: 'button' | 'span'
}

const Button: React.FC<ButtonProps> = styled('button')<ButtonProps>`
  cursor: pointer;
  margin-top: ${({ marginTop = '36' }) => `${marginTop}px`};
  display: block;
`

HomePage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
