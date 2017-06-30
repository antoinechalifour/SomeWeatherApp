import React from 'react'
import Cloudy from 'react-icons/lib/ti/weather-cloudy'
import PartlySunny from 'react-icons/lib/ti/weather-partly-sunny'
import Snow from 'react-icons/lib/ti/weather-snow'
import Rain from 'react-icons/lib/ti/weather-shower'
import Storm from 'react-icons/lib/ti/weather-stormy'
import Sun from 'react-icons/lib/ti/weather-sunny'
import Wind from 'react-icons/lib/ti/weather-windy-cloudy'

const WeatherIcon = ({ name }) => {
  switch (name) {
    case 'Clouds':
      return <Wind />

    case 'Rain':
      return <Rain />

    case 'Clear':
      return <PartlySunny />

    default:
      throw new Error(`No provided icon for weather ${name}`)
  }
}

export default WeatherIcon
