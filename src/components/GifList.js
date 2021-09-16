import styled from "styled-components"

import GifItem from "./GifItem"
import AddToFav from "./AddToFav"

const GifWrap = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5px;
    
`
const GifCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    padding: 5px;
`

const GifList = ({ data, favourites, setFavourites }) => {
    if(!data) {
        return null
    }
    return (
        <GifWrap>
            {data.map((gif, index) => {
                return (
                <GifCont>
                    <GifItem src={gif.images.fixed_height.url} />
                    <AddToFav favourites={favourites} setFavourites={setFavourites} data={data} index={index} />
                </GifCont>
                )
            })}
        </GifWrap>
    )
}

export default GifList