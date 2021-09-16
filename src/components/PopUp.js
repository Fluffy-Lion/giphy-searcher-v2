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
        display: block;
        margin-left: auto;
        margin-right: auto;
    `
const Modal = styled.div `
        @media (min-width: 550px) {
            width: 50%;
            margin-top: 30px;
            padding: 10px;
        }
        border: solid red 3px;
        box-sizing: border-box;
        position: relative;
        background-color: #fefefe;
        margin: auto;
        margin-top: 20%;
        padding: 10px;
        width: 90%;
        height: auto;
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