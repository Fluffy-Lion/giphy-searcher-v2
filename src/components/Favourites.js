import styled from "styled-components";
import GifItem from "./GifItem";

const FavWrap = styled.div`
  background-color: aqua;
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
      <h1>Favourite</h1>
      {favourites.map((gif, index) => {
        return (
          <div key={index}>
            <GifItem gif={gif} />
            <button onClick={() => removeHandler(index)}>remove</button>
          </div>
        );
      })}
    </FavWrap>
  );
};

export default Favourites;
