import GifList from "./GifList";
import styled from "styled-components";

import PopUp from "./PopUp";
import Search from "./Search";
const HomeWrap = styled.div`
  background-color: #93ede0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const RandButton = styled.button`
  width: 100px;
`;
const Home = ({
  setShowPopUp,
  showPopUp,
  getRandom,
  favourites,
  setFavourites,
  data,
  searcher,
  input,
  setInput,
  clearSearch,
  random,
  loaded,
  ids,
  setIds,
}) => {
  if (!loaded) {
    return null;
  }
  return (
    <HomeWrap>
      <Search
        searcher={searcher}
        input={input}
        setInput={setInput}
        clearSearch={clearSearch}
      />
      <RandButton onClick={() => setShowPopUp(true)}>random</RandButton>
      <PopUp
        setShowPopUp={setShowPopUp}
        showPopUp={showPopUp}
        src={random}
        getRandom={getRandom}
      />
      <GifList
        favourites={favourites}
        setFavourites={setFavourites}
        data={data}
        ids={ids}
        setIds={setIds}
      />
    </HomeWrap>
  );
};

export default Home;
