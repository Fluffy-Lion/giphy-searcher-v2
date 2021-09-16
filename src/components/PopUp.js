import styled from "styled-components"
import GifItem from "./GifItem"
const PageWrap = styled.div `
        
        display: ${({ showPopUp }) => (!showPopUp ? "block" : "none")};
        box-sizing: border-box;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${({ showPopUp }) => (!showPopUp && "rgba(0, 0, 0, 0.3)" )};
        border: solid green 5px;
    `
const StyledButton = styled.button `
        border: solid orange 3px;
        margin: auto;
    `
const Modal = styled.div `
    border: solid red 3px;
    box-sizing: border-box;
    position: relative;
    background-color: #dbdbdb;
    margin: auto;
    margin-top: 50%;
    padding: 10px;
    width: 90%;
    height: min-content;
    border: yellow solid 3px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
`

const PopUp = (props) => {
    
    if(!props.showPopUp) {
        return null
    } 
    console.log(props.showPopUp)
    return (
        <PageWrap>
            <Modal>
                <GifItem src={props.src} setShowPopUp={props.setShowPopUp} />
                <StyledButton onClick={() => props.setShowPopUp(false)}>close</StyledButton>
            </Modal>
        </PageWrap>
    )
}

export default PopUp