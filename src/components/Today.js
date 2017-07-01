import React from 'react'
import styled from 'styled-components'
import Humidity from 'react-icons/lib/ti/weather-shower'
import Thermometer from 'react-icons/lib/ti/thermometer'
import Wind from 'react-icons/lib/ti/weather-windy'
import Fetch from './Fetch'
import WeatherIcon from './WeatherIcon'
import WeatherBackground from './WeatherBackground'
import { formatTemperature } from '../utils'

const Container = styled.div`
  text-align: center;
  padding: 32px 16px;
`

const City = styled.div`
  text-transform: uppercase;
`

const Main = styled.div`
  padding: 32px;
`

const Temp = styled.div`
  font-size: 72px;

  svg {
    font-size: 42px;
    margin-left: 8px;
  }
`

const TempMin = styled.span`
  opacity: .75;
  margin-left: 12px;
`

const Icon = styled.div`
  font-size: 28px;
  margin-bottom: 8px;
`

const Detail = styled.div`
  display: flex;
`

const DetailItem = styled.div`
  flex: 1;

  & + & {
    border-left: 2px solid #fff;
  }
`

const Background = styled(WeatherBackground)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #3F51B5;
  opacity: .75;
  z-index: -1;
`

const Content = styled.div`
  position: relative;
`

const Today = ({ latitude, longitude }) => (
  <Fetch
    url='/data/2.5/weather'
    qs={{
      lat: latitude,
      lon: longitude,
      units: 'metric'
    }}
  >
    {(err, data) => {
      if (err) {
        return <div>Error :'(</div>
      }

      const { main, name: city, weather: weathers, wind } = data
      const [weather] = weathers

      return (
        <Container>
          <Background name={weather.main} />
          <Overlay />
          <Content>
            <City>{city}</City>
            <Main>
              <Temp>
                {formatTemperature(main.temp)}°
                <WeatherIcon name={weather.main} />
              </Temp>
              <div>{weather.main}</div>
            </Main>
            <Detail>
              <DetailItem>
                <Icon><Humidity /></Icon>
                <div>{main.humidity}%</div>
              </DetailItem>
              <DetailItem>
                <Icon><Thermometer /></Icon>
                <div>
                  <span>{formatTemperature(main.temp_max)}°</span>
                  <TempMin>{formatTemperature(main.temp_min)}°</TempMin>
                </div>
              </DetailItem>
              <DetailItem>
                <Icon><Wind /></Icon>
                <div>{wind.speed}m/s</div>
              </DetailItem>
            </Detail>
          </Content>
        </Container>
      )
    }}
  </Fetch>
)

export default Today
