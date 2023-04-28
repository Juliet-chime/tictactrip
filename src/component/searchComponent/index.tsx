import { CustomInput } from '../input'
import { BiSearch } from 'react-icons/bi'
import { SearchWrapper } from './styles'
import Custombutton from '../button';
import { SearchList } from './SearchList';
import { searchProps } from './typeProps';
import { useNavigate } from 'react-router-dom';

const SearchComponent = ({ onFocus, searchResult, value, isFocused, onHandleChange,id,onSearchwrapperClick }: searchProps) => {
  const navigate = useNavigate()


  const onHandleClick = () => {
   if(id){
    navigate(`/city/${id}`)
   }
  }

  return (
    <SearchWrapper
      animate={isFocused ? {
        scale: 1.2,
      } : { scale: 1 }}
      transition={{ type: "keyframes", ease: "easeInOut", delay: 0 }}
      isFocused={isFocused}
    >
      <div className='search_cities_wrapper'>
        {isFocused && <div className='left_transparentoverlay' onClick={onSearchwrapperClick}/>}
        {isFocused && <div className='right_transparentoverlay' onClick={onSearchwrapperClick}/>}
        {isFocused ? null : <h4>Search your cities and much more...</h4>}
        <div className='input_search_wrapper'>
          <CustomInput placeholder='A destination,request...' color='#0c131f' onFocus={onFocus} onChange={onHandleChange} value={value}/>
          <div>
          <Custombutton width='56px' height='56px' bg='#8de8fe' borderRadius={'50%'} color='white' onClick={onHandleClick} >
            <BiSearch fontSize={30} />
          </Custombutton>
          </div>
        </div>
            {!(isFocused && searchResult?.length) ? null : <div className='searchlist'>
              <ul>
                {searchResult?.map((item: any, idx: any) => <SearchList key={idx} item={item} />)}
              </ul>
            </div>}
      </div>
    </SearchWrapper>
  )
}

export default SearchComponent