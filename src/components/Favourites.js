import styled from "styled-components";
import GifItem from "./GifItem";

const FavWrap = styled.div`
  //   background-color: aqua;
`;
const Header = styled.h2`
  font-family: Arial, sans-serif;
  font-size: 40px;
  text-align: center;
  color: #e7adf1;
  text-shadow: 2px 2px black;
  margin-top: 20px;
`;

const GifCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 5px;
  background-color: #e7adf1;
  border: solid 1px #bebffd;
  border-radius: 3px;
  box-shadow: 4.8px 9.6px 9.6px hsl(0deg 0% 0% / 0.35);
`;

const Favourites = ({ favourites, setFavourites }) => {
  const removeHandler = (index) => {
    let newFavourites = [...favourites];
    newFavourites.splice(index, 1);
    setFavourites(newFavourites);
  };

  if (favourites.length < 1) {
    return null;
  }
  return (
    <FavWrap>
      <Header>Favourites</Header>
      {favourites.map((gif, index) => {
        return (
          <GifCont key={index}>
            <GifItem gif={gif} />
            <button onClick={() => removeHandler(index)}>remove</button>
          </GifCont>
        );
      })}
    </FavWrap>
  );
};

export default Favourites;
