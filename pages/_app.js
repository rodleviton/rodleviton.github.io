import '../styles/globals.css'
import Content from '../partials/_content'
import { UISettingsProvider } from '../hooks/useUISettingsContext'

function App(props) {
  return (
    <UISettingsProvider>
      <Content {...props} />
    </UISettingsProvider>
  )
}

export default App
