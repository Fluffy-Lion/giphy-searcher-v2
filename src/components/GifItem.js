import styled from "styled-components"

const GifImg = styled.img `
    border: solid blue 3px;
`

const GifItem = ({ src }) => {
    return (
        <>
            <GifImg src={src} />
        </>
    )
}

export default GifItem