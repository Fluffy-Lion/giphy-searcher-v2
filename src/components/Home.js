import GifList from "./GifList";

import PopUp from "./PopUp";
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
    <div>
      <button onClick={() => setShowPopUp(true)}>random</button>
      <div>
        <form onSubmit={(e) => searcher(e)}>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">search</button>
          <button onClick={(e) => clearSearch(e)}>clear</button>
        </form>
      </div>
      <PopUp
        setShowPopUp={setShowPopUp}
        showPopUp={showPopUp}
        src={random.data.images.fixed_height.url}
        getRandom={getRandom}
      />
      <GifList
        favourites={favourites}
        setFavourites={setFavourites}
        data={data}
        ids={ids}
        setIds={setIds}
      />
    </div>
  );
};

export default Home;
