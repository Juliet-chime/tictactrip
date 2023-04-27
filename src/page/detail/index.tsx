import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiRequest } from '../../api/api'
import { apiRoute } from '../../api/apiRoutes'
import TopCities from '../../component/topCities/TopCities'
import { capitalizeWord } from '../../utils'

const DetailPages = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

  const params = useParams()

  const id = params?.id

  useEffect(() => {

    const getTopCities = async () => {
      setLoading(true)
            try {
              if(id){
                apiRequest(apiRoute.searchPopularCities(id), 'get', null).then((response: any) => {
                  setCities(response.data)
                  setLoading(false)
                })
              }
      }
       catch(err){
    console.log(err)
            }
    }
    getTopCities()
  }, [id])

  return (
    <div>
      <TopCities label={`Top Cities in ${capitalizeWord(id)}`} topCities={cities} loading={loading} />
    </div>
  )
}

export default DetailPages