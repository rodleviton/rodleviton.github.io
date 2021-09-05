import { dark, light } from '../theme'
import { ThemeProvider } from '@emotion/react'
import { useUISettingsContext } from '../hooks/useUISettingsContext'
import { useEffect } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Content({ Component, pageProps }) {
  const {
    dispatch,
    state: { mode },
  } = useUISettingsContext()

  useEffect(() => {
    if (!mode) {
      const previouslySavedMode = window.localStorage.getItem('mode')
      const prefersColorScheme = window.matchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : null

      !previouslySavedMode && prefersColorScheme
        ? dispatch({ type: 'dark' })
        : previouslySavedMode
        ? dispatch({ type: previouslySavedMode })
        : dispatch({ type: 'light' })
    }
  }, [mode, dispatch])

  return (
    <ThemeProvider theme={mode === 'dark' ? dark : light}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default Content
