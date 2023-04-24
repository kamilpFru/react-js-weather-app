import { useEffect, useState, useRef } from 'react'
import './App.css'
import Card from './Card.jsx'
import axios from 'axios'


function App() {
  const [city, setCity] = useState('Warsaw')
  const [data, setData] = useState({})
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ab3e23a6967a4e15a05e253bd007b73`

  useEffect(() => {
    searchCity();
    setCity(city => '')
  }, []) 

  function searchCity() {
    axios.get(url).then((response) => {
      console.log(response);
      setData(response.data)
    }).catch(() => {
      alert("Wrong location!")
    })
    setCity(city => '')
  }

  return (
    <div className='container'>
      <div className='search'>
        <input value={city} onChange={e => setCity(e.target.value)} type='text' placeholder='Warszawa..'/>
        <button onClick={searchCity}>Search</button>
      </div>
      <Card data = {data} />
    </div>
  )
}

export default App
