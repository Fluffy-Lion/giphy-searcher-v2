import styled from "styled-components";
import GifItem from "./GifItem";
const PageWrap = styled.div`
  display: ${({ showPopUp }) => (!showPopUp ? "block" : "none")};
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ showPopUp }) => !showPopUp && "rgba(0, 0, 0, 0.3)"};
`;
const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3px;
`;
const Modal = styled.div`
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
  border: black solid 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const PopUp = (props) => {
  if (!props.showPopUp || !props.src) {
    return null;
  }

  const closeHandler = () => {
    props.setShowPopUp(false);
    props.getRandom();
  };
  return (
    <PageWrap>
      <Modal>
        <GifItem gif={props.src.data} setShowPopUp={props.setShowPopUp} />
        <StyledButton onClick={closeHandler}>close</StyledButton>
      </Modal>
    </PageWrap>
  );
};

export default PopUp;
