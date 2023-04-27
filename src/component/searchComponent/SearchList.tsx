import { GiModernCity } from 'react-icons/gi'
import { searchResutlProps } from './typeProps'

export const SearchList = ({ item }: searchResutlProps) => {
  return (
    <li className='searchitem'>
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
