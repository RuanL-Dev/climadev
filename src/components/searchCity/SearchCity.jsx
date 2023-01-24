import { useState, useEffect } from 'react'

import InputWithSuggestions from '../form/inputWithSuggestions/InputWithSuggestions'

export default function SearchCity() {
  const [searchText, setsearchText] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const fetchCitiesList = async () => {
    const CITIES_LIMIT = 5
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
    const json = await response.json()
    handleList(json)
  }

  const handleList = (list) => {
    const formattedList= list.map(({name, state, country, lat, lon}) => ({
      text: `${name}, ${state}, ${country}`,
      onClick: () => console.log(`LAT:${lat} LON:${lon}`)
    }))
    setSuggestions(formattedList)
  }

  useEffect(() => {
    if (searchText.length >= 3)
    fetchCitiesList()
    else setSuggestions([])
  }, [searchText])

  return (
    <InputWithSuggestions 
      placeholder = 'Digite o nome da cidade'
      value={searchText}
      onChange={(e) => setsearchText(e.target.value)}
      suggestions={suggestions}
    />
  )
}
