import React, { useState, useCallback, useEffect } from 'react'

import styled from '../utils/styled'
import Switch from './switch'

interface WrapperProps {
  title: string
  subtitle?: string
  debug: object
  children: React.ReactNode
}

const DEBUG_LOCALSTORAGE_KEY = '@rubenamorim/formal:debug'

export default function ExampleWrapper({
  title,
  subtitle = '',
  debug,
  children,
  ...props
}: WrapperProps): JSX.Element {
  const [on, setOn] = useState(
    () =>
      !!(
        window.localStorage.getItem(DEBUG_LOCALSTORAGE_KEY) &&
        window.localStorage.getItem(DEBUG_LOCALSTORAGE_KEY) === 'true'
      )
  )

  const toggle = useCallback(() => setOn(!on), [on])

  useEffect(() => {
    window.localStorage.setItem(DEBUG_LOCALSTORAGE_KEY, JSON.stringify(on))
  }, [on])

  return (
    <Container {...props}>
      <Header>
        <Title>{title}</Title>
        <Switch on={on} toggle={toggle} label="Debug" />
      </Header>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {on && <Debug>{JSON.stringify(debug, null, 2)}</Debug>}
      {children}
    </Container>
  )
}

const Container = styled.div`
  border-radius: ${props => props.theme.spacing.s};
  box-sizing: border-box;
  color: ${props => props.theme.colors.text};
  display: flex;
  font-family: 'Lato', sans-serif;
  flex-direction: column;
  padding: ${props => props.theme.spacing.l};
  width: ${props => props.theme.exampleWidth};

  @media (max-width: ${props => props.theme.exampleWidth}) {
    border: none;
    width: 100vw;
  }
`

const Header = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`

const Title = styled.h1`
  margin: 0;
`

const Subtitle = styled.h2`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1em;
  margin-bottom: 0;
  margin-top: ${props => props.theme.spacing.s};
`

const Debug = styled.pre`
  align-self: stretch;
  background-color: #f5f5f5;
  border-radius: ${props => props.theme.spacing.s};
  margin-bottom: 0;
  margin-top: ${props => props.theme.spacing.l};
  padding: 1.5em;
`
