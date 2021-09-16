import styled from "styled-components"
import GifItem from "./GifItem"
const PageWrap = styled.div `
        
        // display: ${props => props.showPopUp === true ? "block" : "none"};
        display: block;
        position: relative;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0);
        backgorund-color: rgba(0, 0, 0, 0.4);
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