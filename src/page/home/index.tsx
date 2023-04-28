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
  const [id, setId] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const onHandleFocus = (e: { target: any }) => {
    setIsFocused(true)
  }

  const onHandleChange = (e: any) => {
    const value = e.target.value
    setSearchValue(value)
  }

  function handleFocus() {
    setIsFocused(false)
    setSearchValue('')
    setSearchResults([])
  }


  useEffect(() => {
const getTopCities = async () => {
  setCitiesLoading(true)
        try {
apiRequest(apiRoute.popularCities(), 'get', null).then((response: any) => {
  const data = response.data
  setTopCities(data)
  setCitiesLoading(false)
  setId(data[0].unique_name)
})
  }
   catch(err){
console.log(err)
        }
}
getTopCities()
  }, [])

  useEffect(()=>{
    try{
      if (searchValue?.length >= 2) {
        apiRequest(apiRoute.searchCities(searchValue), 'get', null).then((response: any) => {
          setSearchResults(response.data)
        })
      } else {
        setSearchResults([])
      }
    } catch(err){

    }
  },[searchValue])

  return (
    <HomeStyleWrapper isFocused={isFocused}>
      {isFocused ? <div className='overlay' onClick={handleFocus} /> : null}
      <div className='searchcomponent_wrapper'>
        <SearchComponent onFocus={onHandleFocus} isFocused={isFocused} onHandleChange={onHandleChange} searchResult={searchResults} id={id} value={searchValue} onSearchwrapperClick={handleFocus}/>
      </div>
      <TopCities label='Top Cities' topCities={topCities} loading={citiesLoading} showBtn />
    </HomeStyleWrapper>
  )
}

export default HomePage