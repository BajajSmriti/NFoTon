import { DefaultTheme } from 'styled-components'
import { colors } from './colors'

const {
  neutrals: { white, black, gray },
} = colors

export const light: DefaultTheme = {
  name: 'light',
  background: {
    primary: colors.neutrals.white['400'],
    secondary: gray['500'],
    hover: black['400'],
  },
  typography: {
    color: black['400'],
    secondaryColor: white['500'],
  },
}

export const dark: DefaultTheme = {
  name: 'dark',
  background: { primary: black['500'], secondary: gray['500'], hover: black['400'] },
  typography: {
    color: white['400'],
    secondaryColor: white['500'],
  },
}

export const blue: DefaultTheme = {
  name: 'blue',
  background: {
    primary: gray['500'],
    secondary: colors.neutrals.white['400'],
    hover: colors.primary.blue,
  },
  typography: {
    color: black['400'],
    secondaryColor: white['500'],
  },
}
const variations = { light, dark, blue }

export type VariantionType = keyof typeof variations

export default variations
