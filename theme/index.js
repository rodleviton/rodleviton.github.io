import breakpoints from './breakpoints'
import colors from './colors'
import fontSizes from './fontSizes'
import fontWeights from './fontWeights'
import fonts from './fonts'
import radii from './radii'
import shadows from './shadows'
import space from './space'
import sizes from './sizes'

const theme = {
  light: {
    breakpoints,
    colors: colors.light,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    shadows,
    space,
    sizes,
  },
  dark: {
    breakpoints,
    colors: colors.dark,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    shadows,
    space,
    sizes,
  },
}

export const light = theme.light
export const dark = theme.dark
