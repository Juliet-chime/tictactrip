import styled from "styled-components";
import { motion } from "framer-motion"
import { searchProps } from "./typeProps";

export const SearchWrapper = styled(motion.div) <searchProps>`
width: 70%;
margin: auto;
display: flex;
padding-top:${props => props.isFocused ? '5%' : '30%'} ;
left: ${props => props.isFocused ? "15%" : null};
position: ${props => props.isFocused ? "absolute" : null};
z-index: ${props => props.isFocused ? 99999 : 1};
@media (max-width: 768px) {
    width: ${props => props.isFocused ? '79%' : '95%'};
    left: ${props => props.isFocused ? '0' : null};
    right: ${props => props.isFocused ? '0' : null};
    padding-top: 13%;
}

.search_cities_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    .left_transparentoverlay{
        width: 15%;
        height: 100%;
        background-color: transparent;
        position: ${props => props.isFocused ? "absolute" : null};
        z-index: ${props => props.isFocused ? 9999999 : 1};
        top: 0;
        left: 0;
        @media (max-width: 768px) {
            width: 0%;
        }
    }
    .right_transparentoverlay{
        width: 15%;
        height: 100%;
        background-color: transparent;
        position: ${props => props.isFocused ? "absolute" : null};
        z-index: ${props => props.isFocused ? 9999999 : 1};
        top: 0;
        right: 0;
        @media (max-width: 768px) {
            width: 0%;
        }
    }
    h4 {
        color: white;
        font-size: 32px;
        font-weight: bolder;
        margin-bottom: 0.5rem;
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
    .input_search_wrapper {
        display: flex;
        background-color: white;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 50px;
        border-radius: 50px; 
        @media (max-width: 768px) {
            width: 100%;
        } 
    }
    .searchlist{
        width: 70%;
        margin-top:16px;
        min-height:50px;
        max-height: 400px;
        background-color: white;
        overflow-y:scroll;
        border-radius: 10px;
        @media (max-width: 768px) {
            width: 100%;
        } 
        .searchitem{
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem;
            cursor: pointer;
            .city_icon{
            font-size: 20px;
            }
            .local_name{
               color: black;
               font-size: 14px;
               margin: 0;
            }
            .unique_name{
               font-size: 12px;
               color: #5e5650;
               text-transform: capitalize;
            }
        }
    }
}
`