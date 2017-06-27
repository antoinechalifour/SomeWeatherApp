import React from 'react'
import Today from './Today'
import Forecast from './Forecast'

const Weather = props => (
  <div>
    <Today {...props} />
    <Forecast {...props} />
  </div>
)

export default Weather
