import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Fetch from './Fetch'
import WeatherIcon from './WeatherIcon'
import { formatTemperature } from '../utils'

const Container = styled.div`
  padding: 16px 8px;
`

const ForecastItem = styled.div`
  display: flex;
  padding: 12px 16px;
  margin-bottom: 8px;
  background: rgba(0, 0, 0, .29);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .13);
  border-radius: 4px;
`

const ForecastDay = styled.div`
  flex: 1;
  padding: 0 12px;
`

const TempMin = styled.span`
  opacity: .75;
  margin-left: 12px;
`

const groupByDay = list => {
  const days = {}

  list.forEach((item, index) => {
    const [dayText] = item.dt_txt.split(' ')

    if (!days[dayText]) {
      days[dayText] = []
    }

    days[dayText].push(item)
  })

  return Object.keys(days).map(key => days[key])
}

const extractDayInformation = day => {
  let min = Number.POSITIVE_INFINITY
  let max = Number.NEGATIVE_INFINITY
  const [someDay] = day

  day.forEach(({ main }) => {
    min = Math.min(min, main.temp)
    max = Math.max(max, main.temp)
  })

  const weatherToOccurence = {}

  day.forEach(({ weather }) => {
    const name = weather[0].main

    weatherToOccurence[name] = weatherToOccurence[name]
      ? weatherToOccurence[name] + 1
      : 1
  })

  const [mostOccuringWeather] = Object.keys(weatherToOccurence)
    .map(name => ({
      name,
      occurence: weatherToOccurence[name]
    }))
    .sort((w1, w2) => w2.occurence - w1.occurence)

  return {
    dt_txt: someDay.dt_txt,
    min,
    max,
    weather: mostOccuringWeather.name
  }
}

const Forecast = ({ longitude, latitude }) => (
  <Fetch
    url='http://api.openweathermap.org/data/2.5/forecast'
    qs={{
      lat: latitude,
      lon: longitude,
      units: 'metric'
    }}
  >
    {(err, data) => {
      const days = groupByDay(data.list)
        .map(extractDayInformation)

      return (
        <Container>
          {days.map(day => (
            <ForecastItem>
              <WeatherIcon name={day.weather} />
              <ForecastDay>
                {moment(day.dt_txt).format('dddd')}
              </ForecastDay>
              <span>{formatTemperature(day.max)}°</span>
              <TempMin>{formatTemperature(day.min)}°</TempMin>
            </ForecastItem>
          ))}
        </Container>
      )
    }}
  </Fetch>
)

export default Forecast
