import styled from "styled-components"

const GifImg = styled.img `
    width: auto;
    margin-left: auto;
    margin-right: auto;
    display: block;

`

const GifItem = ({ src }) => {
    return (
        <>
            <GifImg src={src} />
        </>
    )
}

export default GifItem