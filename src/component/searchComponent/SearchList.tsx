import { GiModernCity } from 'react-icons/gi'
import { searchResutlProps } from './typeProps'
import { useNavigate } from 'react-router-dom'

export const SearchList = ({ item}: searchResutlProps) => {

  const navigate = useNavigate()

  const onHandleClick = (id:string) => {
    navigate(`/city/${id}`)
  }

  return (
    <li className='searchitem' onClick={()=>onHandleClick(item?.unique_name)}>
      <div>
        <GiModernCity className='city_icon' />
      </div>
      <div>
        <h4 className='local_name'>{item?.local_name}</h4>
        <p className='unique_name'>
          {item?.unique_name}
        </p>
      </div>
    </li>
  )
}
