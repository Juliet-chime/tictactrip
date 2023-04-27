import React from 'react'
import paris from '../../assest/img/paris.jpeg'
import paris1 from '../../assest/img/paris1.jpeg'
import france from '../../assest/img/france.jpg'
import france1 from '../../assest/img/france1.jpg'
import france2 from '../../assest/img/france2.jpg'
import {MdLocationOn} from 'react-icons/md'
import Custombutton from '../../component/button'

type props = {
index?:Number;
name?:string;
item?:any;
showBtn?:boolean;
onBtnClick?:any;
}

const TopCitiesWrapper = ({index,item,onBtnClick,showBtn}:props) => {
  return (
    <div className='topcity'>
<div className='topcities_img'>
<img src={index === 1?paris:index===2?paris1:index===3?france:index===4?france1:france2} alt="" />
</div>
<div className='topCities_text'>
<h4>{item?.local_name}</h4>
<p>
  <MdLocationOn className='location_icon' /> {item?.unique_name}
</p>
<p className='description'>Avec la carte Avantage, voyager en train c'est bon...</p>
{showBtn? <Custombutton text={'View more'} bg='#8de8fe' borderRadius='5px' height='35px' margin='20px 0px 0px 0px' onClick={()=>onBtnClick(item?.unique_name)}/>
  : null}
</div>
    </div>
  )
}

export default TopCitiesWrapper