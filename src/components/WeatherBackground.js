import React from 'react'
import Cloudy from 'react-icons/lib/ti/weather-cloudy'
import PartlySunny from 'react-icons/lib/ti/weather-partly-sunny'
import Snow from 'react-icons/lib/ti/weather-snow'
import Rain from 'react-icons/lib/ti/weather-shower'
import Storm from 'react-icons/lib/ti/weather-stormy'
import Sun from 'react-icons/lib/ti/weather-sunny'
import Wind from 'react-icons/lib/ti/weather-windy-cloudy'

const WeatherBackground = ({ className, name }) => {
  let src = null

  switch (name) {
    case 'Clouds':
      src = 'https://images.unsplash.com/photo-1438045809872-34a58ff469f6?dpr=1&auto=format&fit=crop&w=1080&h=627&q=80&cs=tinysrgb&crop=&bg='
      break

    case 'Rain':
      src = 'https://images.unsplash.com/photo-1428592953211-077101b2021b?dpr=1&auto=compress,format&fit=crop&w=568&h=426&q=80&cs=tinysrgb&crop=&bg='
      break
  }

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    />
  )
}

export default WeatherBackground
