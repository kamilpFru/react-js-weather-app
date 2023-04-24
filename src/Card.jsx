import React from 'react'
import { TiWeatherCloudy } from 'react-icons/ti'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { FaWind } from 'react-icons/fa'
import { GiRaining } from 'react-icons/gi'
import { BsFillSunFill } from 'react-icons/bs'
import { AiFillCloud } from 'react-icons/ai'
import { RiMistFill } from 'react-icons/ri'

function renderIcon(state) {
  if (state === 'Clear') {
    return <BsFillSunFill />
  }

  if (state === 'Clouds') {
    return <AiFillCloud />
  }

  if (state === 'Rain') {
    return <GiRaining />
  }

  if (state === 'Mist') {
    return <RiMistFill />
  }
}

export default function Card( {data} ) {
  return (
    <div className='card'>
        <div className='top'>
          <div className='temperature'>
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div className='city'>
            <h2>{data.name}</h2>
          </div>
        </div>

        <div className='desc'>
           
          {data.weather ? renderIcon(data.weather[0].main) : null}
          {data.weather ? <p>{data.weather[0].main}</p> : null}

        </div>

        <div className='bottom'>
          <div className='feels'>
            
            <p><TiWeatherCloudy /></p> {data.main ? <p>{data.main.feels_like}°</p> : null}
          </div>
          <div className='humidity'>
            <p><MdOutlineWaterDrop /></p> {data.main ? <p>{data.main.humidity}%</p> : null}
          </div>
          <div className='wind'>
            <p><FaWind /></p> {data.wind ? <p>{data.wind.speed} mph</p> : null}
          </div>
        </div>
    </div>
  )
}
