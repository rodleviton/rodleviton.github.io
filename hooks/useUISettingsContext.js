import React, { useEffect, useState } from 'react'

const UISettingsContext = React.createContext()

function uiSettingsReducer(state, action) {
  switch (action.type) {
    case 'dark': {
      if (window?.localStorage) window.localStorage.setItem('mode', 'dark')
      return { ...state, mode: 'dark' }
    }

    case 'light': {
      if (window?.localStorage) window.localStorage.setItem('mode', 'light')
      return { ...state, mode: 'light' }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// Provides access to UI preferences/settings
function UISettingsProvider({ children }) {
  const [state, dispatch] = React.useReducer(uiSettingsReducer, {
    mode: null,
  })

  const value = { state, dispatch }

  return (
    <UISettingsContext.Provider value={value}>
      {children}
    </UISettingsContext.Provider>
  )
}

function useUISettingsContext() {
  const context = React.useContext(UISettingsContext)

  if (context === undefined)
    throw new Error(
      'useUISettingsContext must be used within a UISettingsProvider',
    )

  return context
}

export { UISettingsProvider, useUISettingsContext }
