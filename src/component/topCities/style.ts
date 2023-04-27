import styled from "styled-components";

export const TopCitiesStyle = styled.div`
    padding: 2.5rem;
    .loader_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .top_cities{
    display: grid;
    grid-template-columns: repeat(5, 270px);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-content: space-between;
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 49%);
        grid-gap:10px;
    }
    @media (max-width: 658px) {
    justify-content: flex-start;
    grid-template-columns: repeat(1, 100%);
    grid-gap:10px;
        } 
        .topcity{
           cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: 0px 5px 10px -3px rgba(0,0,0,0.1);
            .topcities_img{
                height: 200px;
                border-radius: 1rem 1rem 0rem 0rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 1rem 1rem 0rem 0rem;
                }
            }
            .topCities_text{
                padding: 20px;
                h4{
                    font-size: 14px;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                }
                p{
                    display: flex;
                    align-items: center;
                    text-transform: capitalize;
                    margin-top: 0.5rem;
                    font-weight: 400;
                    .location_icon{
                        color: #8de8fe;
                        margin-right: 0.2rem;
                    }
                }

            }
        }
    }
    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`