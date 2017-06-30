import React, { Component } from 'react'

class WeatherBackground extends Component {
  constructor (props) {
    super(props)

    this.state = { x: 0, y: 0 }

    this.handleDeviceOrientation = this.handleDeviceOrientation.bind(this)
  }

  componentDidMount () {
    window.addEventListener('deviceorientation', this.handleDeviceOrientation)
  }

  componentWillUnmount () {
    window.removeEventListener('deviceorientation', this.handleDeviceOrientation)
  }

  handleDeviceOrientation (e) {
    const { beta: y, gamma: x } = e

    this.setState({ x, y })
  }

  render () {
    const { className, name } = this.props
    let src = null

    switch (name) {
      case 'Thunderstorm':
        src = 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?dpr=1&auto=format&fit=crop&w=1199&h=1799&q=80&cs=tinysrgb&crop=&bg='
        break

      case 'Drizzle':
        src = 'https://images.unsplash.com/photo-1446478129398-42db46ee0475?dpr=1&auto=format&fit=crop&w=1199&h=1599&q=80&cs=tinysrgb&crop=&bg='
        break

      case 'Rain':
        src = 'https://images.unsplash.com/photo-1428592953211-077101b2021b?dpr=1&auto=compress,format&fit=crop&w=568&h=426&q=80&cs=tinysrgb&crop=&bg='
        break

      case 'Snow':
        src = 'https://images.unsplash.com/photo-1477682440513-fb3367847916?dpr=1&auto=format&fit=crop&w=1199&h=796&q=80&cs=tinysrgb&crop=&bg='
        break

      case 'Atmosphere':
        src = 'https://images.unsplash.com/photo-1475181624534-3e2ff2beb57c?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg='
        break

      case 'Clear':
        src = 'https://images.unsplash.com/photo-1470058509904-9ed83ee074aa?dpr=1&auto=format&fit=crop&w=1199&h=675&q=80&cs=tinysrgb&crop=&bg='
        break

      case 'Clouds':
        src = 'https://images.unsplash.com/photo-1438045809872-34a58ff469f6?dpr=1&auto=format&fit=crop&w=1080&h=627&q=80&cs=tinysrgb&crop=&bg='
        break

      case 'Extreme':
        src = 'https://images.unsplash.com/photo-1475181624534-3e2ff2beb57c?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg='
        break
    }

    return (
      <div
        className={className}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'auto 125%',
          backgroundPosition: `calc(50% - ${this.state.x}px) calc(50% - ${this.state.y}px)`
        }}
      />
    )
  }
}

export default WeatherBackground
