import styled from "styled-components"

const GifImg = styled.img `
    width: 100%;
`

const GifItem = ({ src }) => {
    return (
        <>
            <GifImg src={src} />
        </>
    )
}

export default GifItem