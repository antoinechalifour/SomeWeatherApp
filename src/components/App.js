import React, { Component } from 'react'
import styled from 'styled-components'
import Weather from './Weather'
import Geolocation from './Geolocation'

const Background = styled.div`
  background: #3F51B5;
  color: #fff;
  min-height: 100vh;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 0.08rem;
  font-size: 18px;
`

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { geolocation: null }

    this.onGeolocation = this.onGeolocation.bind(this)
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.onGeolocation)
  }

  onGeolocation ({ coords }) {
    this.setState({
      geolocation: {
        latitude: coords.latitude,
        longitude: coords.longitude
      }
    })
  }

  render () {
    return (
      <Background>
        {this.state.geolocation ? (
          <Weather
            {...this.state.geolocation}
          />
        ) : (
          <Geolocation />
        )}
      </Background>
    )
  }
}

export default App
