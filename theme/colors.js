const palette = {
  primary: {
    css: 'hsl(247, 66%, 58%)',
    hex: '#5C4CDA',
  },
  neutrals: {
    white: {
      css: 'hsl(0, 0%, 100%)',
      hex: '#ffffff',
    },
    alabaster: {
      css: 'hsl(0, 0%, 98%)',
      hex: '#f9f9f9',
    },
    alto: {
      css: 'hsl(0, 0%, 88%)',
      hex: '#e0e0e0',
    },
    gray: {
      css: 'hsl(0, 0%, 50%)',
      hex: '#818181',
    },
    ink: {
      css: 'hsl(0, 0%, 13%)',
      hex: '#222222',
    },
  },
}

const colors = {
  dark: {
    palette,
    typography: {
      default: palette.neutrals.white.css,
      light: palette.neutrals.ink.css,
      dark: palette.neutrals.white.css,
      link: palette.primary.css,
    },
    background: {
      alpha: {
        css: 'hsl(255, 19%, 21%)',
        hex: '#312C40',
      },
      beta: {
        css: 'hsl(258, 18%, 19%)',
        hex: '#2D2839',
      },
    },
  },
  light: {
    palette,
    typography: {
      default: palette.neutrals.ink.css,
      light: palette.neutrals.ink.css,
      dark: palette.neutrals.white.css,
      link: palette.primary.css,
    },
    background: {
      alpha: {
        css: 'hsl(0, 0%, 100%)',
        hex: '#ffffff',
      },
      beta: {
        css: 'hsl(0, 0%, 98%)',
        hex: '#fafafa',
      },
    },
  },
}

export default colors
