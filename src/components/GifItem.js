import { useEffect, useState } from "react"
import styled from "styled-components"

const GifImg = styled.img `
    width: auto;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding: 5px;
`

const GifItem = ({ gif, favourites, setFavourites, index, data, ids, setIds }) => {

    if(!gif ){
        return null
    }
    return (
        <div>
            <GifImg src={gif.images.fixed_height.url} />
            {/* {ids.includes(gif.id) ? <p>added</p> : */}
            
            {/* } */}

        </div>  
    )
    }

export default GifItem