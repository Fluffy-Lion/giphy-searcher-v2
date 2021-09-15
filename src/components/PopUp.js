import styled from "styled-components"
const PageWrap = styled.div `
        background: black;
        width: 50%;
        width: ${props => props.gif ? "inherit" : null}
    `
const PopUp = (props) => {
    if(!props.showPopUp) {
        return null
    }
    return (
        <PageWrap>
            <div gif>
                {props.children}
            </div>
            <button onClick={() => props.setShowPopUp(false)}>close</button>
        </PageWrap>
    )
}

export default PopUp