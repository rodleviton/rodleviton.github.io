import Logo from '../components/elements/Logo'
import ToggleField from '../components/form/ToggleField'
import Flex from '../components/primitives/Flex'
import Link from 'next/link'
import { useUISettingsContext } from '../hooks/useUISettingsContext'
import Anchor from '../components/elements/Anchor'

function DefaultLayout({ children }) {
  const {
    dispatch,
    state: { mode },
  } = useUISettingsContext()

  return (
    <>
      <Flex as="header">
        <Flex
          width={{ _: 'auto', lg: 540, xxl: 660 }}
          bg={{ _: 'background.beta.css', lg: 'background.alpha.css' }}
          px={{ _: 'md', lg: 'xl' }}
          py={{ _: 'md', lg: 'lg' }}
        >
          <Link href="/" passHref>
            <Anchor>
              <Logo mode={mode} />
            </Anchor>
          </Link>
        </Flex>
        <Flex
          bg="background.beta.css"
          justifyContent="flex-end"
          px={{ _: 'md', lg: 'xl' }}
          py={{ _: 'md', lg: 'lg' }}
          alignItems="center"
          flex="1"
        >
          <ToggleField
            id="dark-mode"
            checked={mode === 'dark'}
            onChange={({ target: { checked } }) =>
              dispatch({
                type: checked ? 'dark' : 'light',
              })
            }
          />
        </Flex>
      </Flex>

      {children}
    </>
  )
}

export default DefaultLayout
