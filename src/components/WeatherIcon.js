import React from 'react'
import Cloudy from 'react-icons/lib/ti/weather-cloudy'
import Snow from 'react-icons/lib/ti/weather-snow'
import Rain from 'react-icons/lib/ti/weather-shower'
import Storm from 'react-icons/lib/ti/weather-stormy'
import Sun from 'react-icons/lib/ti/weather-sunny'
import Wind from 'react-icons/lib/ti/weather-windy-cloudy'
import Warning from 'react-icons/lib/ti/warning-outline'

const WeatherIcon = ({ name }) => {
  switch (name) {
    case 'Thunderstorm':
      return <Storm />

    case 'Drizzle':
      return <Cloudy />

    case 'Rain':
      return <Rain />

    case 'Snow':
      return <Snow />

    case 'Atmosphere':
      return <Warning />

    case 'Clear':
      return <Sun />

    case 'Clouds':
      return <Wind />

    case 'Extreme':
      return <Warning />

    default:
      throw new Error(`No provided icon for weather ${name}`)
  }
}

export default WeatherIcon
