import styled from "styled-components";

const StyledButton = styled.button`
  height: 20px;
  align-self: center;
`;

const AddToFav = ({ favourites, setFavourites, data, index }) => {
  const addHanlder = () => {
    const newFav = [...favourites];
    newFav.push(data[index]);
    setFavourites(newFav);
  };
  return <StyledButton onClick={addHanlder}>add to fav</StyledButton>;
};

export default AddToFav;
