import { Heading } from '../heading/Heading'
import { TopCitiesStyle } from './style';
import TopCitiesWrapper from '../../page/home/TopCitiesWrapper';
import { useNavigate } from 'react-router-dom'
import { topCitiesTypes } from './topCitiesType';
import Loader from '../loader/Loader';

const TopCities = ({ label, topCities, showBtn, loading }: topCitiesTypes) => {

    const navigate = useNavigate()

    const onBtnClick = (name: string) => {
        navigate(`/city/${name}`)
    }

    return (
        <TopCitiesStyle>
            <Heading label={label} />
            {loading ? <Loader /> : <div className='top_cities'>
                {!topCities?.length ? null : topCities?.map((item: any, idx: any) => <TopCitiesWrapper key={idx} index={idx} showBtn={showBtn} item={item} onBtnClick={onBtnClick} />)}
            </div>}

        </TopCitiesStyle>
    )
}

export default TopCities