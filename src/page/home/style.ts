import styled from "styled-components";
import banner from '../../assest/img/bgg.jpg'
import { searchProps } from "../../component/searchComponent/typeProps";

export const HomeStyleWrapper = styled.div<searchProps>`
position: relative;
.overlay{
    position: absolute;
    z-index:  9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.7);
}
.searchcomponent_wrapper{
    height: 700px;
    position: relative;
    background: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    object-fit: contain;
} 
`