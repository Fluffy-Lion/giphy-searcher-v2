import styled from "styled-components"
import GifItem from "./GifItem"
const PageWrap = styled.div `
        background: yellow;
        width: 50%;
        border: solid green 5px;
    `

const PopUp = (props) => {
    if(!props.showPopUp) {
        return null
    }
    return (
        <PageWrap>
           <GifItem src={props.src} />
            <button onClick={() => props.setShowPopUp(false)}>close</button>
        </PageWrap>
    )
}

export default PopUp