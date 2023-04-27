import React, { useEffect, useState } from 'react'
import { HomeStyleWrapper } from './style'
import SearchComponent from '../../component/searchComponent'
import { apiRequest } from '../../api/api'
import { apiRoute } from '../../api/apiRoutes'
import TopCities from '../../component/topCities/TopCities'
import { searchResultType } from '../../component/searchComponent/typeProps'

const HomePage = () => {
  const [topCities, setTopCities] = useState<Array<searchResultType>>([])
  const [searchResults, setSearchResults] = useState([])
  const [isFocused, setIsFocused] = useState(false)
  const [citiesLoading, setCitiesLoading] = useState(false)

  const onHandleFocus = (e: { target: any }) => {
    if (e.target) {
      setIsFocused(true)
    } else {
      setIsFocused(false)
    }
  }

  const onHandleChange = (e: any) => {
    const value = e.target.value
    try{
      if (value.length >= 2) {
        apiRequest(apiRoute.searchCities(value), 'get', null).then((response: any) => {
          setSearchResults(response.data)
        })
      } else {
        setSearchResults([])
      }
    } catch(err){

    }
 

  }

  function handleFocus() {
    setIsFocused(false)
  }


  useEffect(() => {
const getTopCities = async () => {
  setCitiesLoading(true)
        try {
apiRequest(apiRoute.popularCities(), 'get', null).then((response: any) => {
  setTopCities(response.data)
  setCitiesLoading(false)
})
  }
   catch(err){
console.log(err)
        }
}
getTopCities()
  }, [])
  
  return (
    <HomeStyleWrapper isFocused={isFocused}>
      {isFocused ? <div className='overlay' onClick={handleFocus} /> : null}
      <div className='searchcomponent_wrapper'>
        <SearchComponent onFocus={onHandleFocus} isFocused={isFocused} onHandleChange={onHandleChange} searchResult={searchResults} />
      </div>
      <TopCities label='Top Cities' topCities={topCities} loading={citiesLoading} showBtn />
    </HomeStyleWrapper>
  )
}

export default HomePage