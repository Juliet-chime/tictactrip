import styled from "styled-components";
import { motion } from "framer-motion"
import { searchProps } from "./typeProps";

export const SearchWrapper = styled(motion.div) <searchProps>`
width: 70%;
margin: auto;
display: flex;
padding-top: 38%;
left: ${props => props.isFocused ? "15%" : null};
position: ${props => props.isFocused ? "absolute" : null};
z-index: ${props => props.isFocused ? 99999 : 1};
@media (max-width: 768px) {
    width: ${props => props.isFocused ? '79%' : '95%'};
    left: ${props => props.isFocused ? '0' : null};
    right: ${props => props.isFocused ? '0' : null};
}

.search_cities_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
            height: 100%;
        } 
    }
    .searchlist{
        width: 70%;
        margin-top:16px;
        height:400px;
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