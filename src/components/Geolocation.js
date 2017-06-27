import React from 'react'
import styled, { keyframes } from 'styled-components'
import WorldIcon from 'react-icons/lib/ti/world'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const animation = keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: .7;
  }

  to {
    opacity: 1;
  }
`

const World = styled(WorldIcon)`
  display: block;
  margin-bottom: 24px;
  font-size: 128px;

  animation: ${animation} 3s infinite;
`

const Geolocation = () => (
  <Container>
    <World />
    <p>Acquiring coordinates...</p>
  </Container>
)

export default Geolocation
