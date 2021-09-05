import Head from 'next/head'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { useCallback, useEffect, useState } from 'react'
import Flex from '../../components/primitives/Flex'
import Box from '../../components/primitives/Box'
import Anchor from '../../components/elements/Anchor'
import Stack from '../../components/elements/Stack'
import Heading from '../../components/elements/Heading'
import Image from 'next/image'
import Type from '../../components/elements/Type'
import ChevronUpIcon from '../../components/icons/ChevronUpIcon'
import ChevronDownIcon from '../../components/icons/ChevronDownIcon'
import ChevronLeftIcon from '../../components/icons/ChevronLeftIcon'
import Grid from '../../components/primitives/Grid'
import Button from '../../components/elements/Button'
import ButtonPrimitive from '../../components/primitives/Button'
import Link from 'next/link'
import IconButton from '../../components/elements/IconButton'
import GitHubIcon from '../../components/icons/GitHubIcon'
import VueIcon from '../../components/icons/VueIcon'
import { useUISettingsContext } from '../../hooks/useUISettingsContext'
import calendar2012 from '../../assets/oberhauser_calendar_2012.png'
import calendar2013 from '../../assets/oberhauser_calendar_2013.png'
import calendar2015 from '../../assets/oberhauser_calendar_2015.png'

const panel = {
  open: 'translate3d(0, 0, 0)',
  closed: 'translate3d(0, calc(100% - 170px), 0)',
}

const Card = styled(Flex)(
  css({
    flexDirection: 'column',
    width: '100%',
  }),
)

const ProfileButton = styled(ButtonPrimitive)(
  css({
    width: 'auto',
    border: '1px solid',
    borderColor: 'palette.primary.css',
    p: 'sm',
    borderRadius: 30,
    pr: 'lg',
    textDecoration: 'none',
  }),
)

export default function OberhauserCalendar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const {
    state: { mode },
  } = useUISettingsContext()

  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  useEffect(() => {
    setIsMounted(true)
  }, [setIsMounted])

  return (
    <>
      <Head>
        <title>Rod Levtion - Oberhauser Calendar</title>
        <meta name="description" content="Oberhauser Calendar by Rod Leviton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="main" flex={1}>
        <Box
          bg="background.alpha.css"
          width={{ _: '100%', lg: 460, xl: 540, xxl: 660 }}
          height={{ _: '100%', lg: 'auto' }}
          px={{ _: 'md', lg: 'xl' }}
          py={{ _: 'md', lg: 'lg' }}
          position={{ _: 'fixed', lg: 'static' }}
          borderTopLeftRadius={{ _: 'lg', lg: 0 }}
          borderTopRightRadius={{ _: 'lg', lg: 0 }}
          boxShadow={{ _: 'inverse.md', lg: 'none' }}
          transition={{
            _: 'transform 0.3s cubic-bezier(0.280, 0.840, 0.420, 1.1)',
            lg: 'none',
          }}
          transform={{ _: isOpen ? panel.open : panel.closed, lg: 'none' }}
          zIndex={10}
        >
          <Stack spacing="lg">
            <Flex
              role="button"
              display={{ _: 'flex', lg: 'none' }}
              alignItems="center"
              justifyContent="center"
              onClick={togglePanel}
              p="md"
            >
              {!isOpen && (
                <ChevronUpIcon size="md" color="typography.default" />
              )}
              {isOpen && (
                <ChevronDownIcon size="md" color="typography.default" />
              )}
            </Flex>
            <Box display={{ _: 'none', lg: 'block' }}>
              <Link href="/" passHref>
                <IconButton label="Back" variant="secondary">
                  <ChevronLeftIcon />
                </IconButton>
              </Link>
            </Box>
            <Stack spacing="xs">
              <Box>
                <Heading
                  level="5"
                  size="xxs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  opacity={0.5}
                >
                  Open Source
                </Heading>
                <Heading level="1">Oberhaeuser Calendar</Heading>
              </Box>
              <Stack
                spacing="sm"
                direction="column"
                gridAutoColumns="min-content"
              >
                <IconButton
                  variant="secondary"
                  href="https://vuejs.org/"
                  target="_blank"
                >
                  <VueIcon size="lg" />
                </IconButton>
                <IconButton
                  variant="secondary"
                  href="https://github.com/rodleviton/oberhaeuser-calendar"
                  target="_blank"
                >
                  <GitHubIcon color="typography.default" size="lg" />
                </IconButton>
              </Stack>
            </Stack>
            <Stack spacing="lg">
              <Box bg="background.beta.css" height={4} width="100%"></Box>
              <Stack>
                <Type>
                  Beautiful calendar concept inspired by the work of{' '}
                  <Anchor
                    href="https://www.behance.net/gallery/oberhaeuserinfo-calendar-2013/5761467"
                    target="_blank"
                  >
                    Bureau Oberhaeuser
                  </Anchor>
                  .
                </Type>
              </Stack>
              <Box bg="background.beta.css" height={4} width="100%"></Box>
            </Stack>

            <Box>
              <Link href="/" passHref>
                <ProfileButton>
                  <Grid
                    gridGap="sm"
                    gridTemplateColumns="40px 1fr"
                    alignItems="center"
                  >
                    <Box
                      width={40}
                      height={40}
                      borderRadius={20}
                      overflow="hidden"
                    >
                      <Image
                        alt="Rod Leviton - Profile Image"
                        src="/images/rod_leviton_profile.png"
                        loading="lazy"
                        quality={100}
                        width={200}
                        height={200}
                      />
                    </Box>
                    <Box>
                      <Heading
                        level="5"
                        size="xxs"
                        fontWeight="semibold"
                        textTransform="uppercase"
                        opacity={0.5}
                      >
                        Author
                      </Heading>
                      <Heading level="3" size="sm" fontWeight="semibold">
                        Rod Leviton
                      </Heading>
                    </Box>
                  </Grid>
                </ProfileButton>
              </Link>
            </Box>
          </Stack>
        </Box>
        <Flex
          flex="1"
          bg="background.beta.css"
          px={{ _: 'md', lg: 'xl' }}
          py={{ _: 'md', lg: 'lg' }}
          pb={{ _: 100, lg: 'lg' }}
        >
          <Stack width="100%" gridAutoRows="min-content" spacing="lg">
            <Box display={{ _: 'block', lg: 'none' }}>
              <Link href="/" passHref>
                <IconButton label="Back" variant="secondary">
                  <ChevronLeftIcon />
                </IconButton>
              </Link>
            </Box>
            <Grid
              gridGap="xl"
              gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            >
              <Card>
                <Stack spacing="xxl">
                  <Stack spacing="lg">
                    <Box
                      maxWidth={1280}
                      width="100%"
                      overflow="hidden"
                      position="relative"
                      boxShadow="lg"
                      borderRadius="md"
                    >
                      <Image
                        alt="Oberhauser Calendar 2015"
                        src={calendar2015}
                        loading="lazy"
                        layout="responsive"
                        quality={100}
                        width={1835}
                        height={1280}
                        placeholder="blur"
                      />
                    </Box>
                    <Stack spacing="lg">
                      <Stack maxWidth={540}>
                        <Stack spacing="xs">
                          <Heading
                            level="5"
                            size="xxs"
                            fontWeight="semibold"
                            textTransform="uppercase"
                            opacity={0.5}
                          >
                            Open Source
                          </Heading>
                          <Heading level="2">Calendar 2015</Heading>
                        </Stack>
                        <Type>
                          Quisque augue enim, luctus sit amet euismod sit amet,
                          mattis sit amet turpis. Morbi nec elit molestie,
                          mollis leo at, posuere velit.
                        </Type>
                      </Stack>
                      <Flex
                        flexGrow={1}
                        flexDirection="column"
                        justifyContent="flex-end"
                      >
                        <Button
                          width={260}
                          href="https://rodleviton.github.io/oberhaeuser-calendar/#/2015"
                          target="_blank"
                        >
                          View Demo
                        </Button>
                      </Flex>
                    </Stack>
                  </Stack>

                  <Stack spacing="lg">
                    <Box
                      maxWidth={1280}
                      width="100%"
                      overflow="hidden"
                      position="relative"
                      boxShadow="lg"
                      borderRadius="md"
                    >
                      <Image
                        alt="Oberhauser Calendar 2013"
                        src={calendar2013}
                        loading="lazy"
                        layout="responsive"
                        quality={100}
                        width={1835}
                        height={1280}
                        placeholder="blur"
                      />
                    </Box>
                    <Stack spacing="lg">
                      <Stack maxWidth={540}>
                        <Stack spacing="xs">
                          <Heading
                            level="5"
                            size="xxs"
                            fontWeight="semibold"
                            textTransform="uppercase"
                            opacity={0.5}
                          >
                            Open Source
                          </Heading>
                          <Heading level="2">Calendar 2013</Heading>
                        </Stack>
                        <Type>
                          Quisque augue enim, luctus sit amet euismod sit amet,
                          mattis sit amet turpis. Morbi nec elit molestie,
                          mollis leo at, posuere velit.
                        </Type>
                      </Stack>
                      <Flex
                        flexGrow={1}
                        flexDirection="column"
                        justifyContent="flex-end"
                      >
                        <Button
                          width={260}
                          href="https://rodleviton.github.io/oberhaeuser-calendar/#/2013"
                          target="_blank"
                        >
                          View Demo
                        </Button>
                      </Flex>
                    </Stack>
                  </Stack>

                  <Stack spacing="lg">
                    <Box
                      maxWidth={1280}
                      width="100%"
                      overflow="hidden"
                      position="relative"
                      boxShadow="lg"
                      borderRadius="md"
                    >
                      <Image
                        alt="Oberhauser Calendar 2012"
                        src={calendar2012}
                        loading="lazy"
                        layout="responsive"
                        quality={100}
                        width={1835}
                        height={1280}
                        placeholder="blur"
                      />
                    </Box>
                    <Stack spacing="lg">
                      <Stack maxWidth={540}>
                        <Stack spacing="xs">
                          <Heading
                            level="5"
                            size="xxs"
                            fontWeight="semibold"
                            textTransform="uppercase"
                            opacity={0.5}
                          >
                            Open Source
                          </Heading>
                          <Heading level="2">Calendar 2012</Heading>
                        </Stack>
                        <Type>
                          Quisque augue enim, luctus sit amet euismod sit amet,
                          mattis sit amet turpis. Morbi nec elit molestie,
                          mollis leo at, posuere velit.
                        </Type>
                      </Stack>
                      <Flex
                        flexGrow={1}
                        flexDirection="column"
                        justifyContent="flex-end"
                      >
                        <Button
                          width={260}
                          href="https://rodleviton.github.io/oberhaeuser-calendar/#/2012"
                          target="_blank"
                        >
                          View Demo
                        </Button>
                      </Flex>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}
