import { useEffect, useState } from "react";
import GifList from "./components/GifList";

import PopUp from "./components/PopUp";

const App = () => {

  const [data, setData] = useState([])
  const [random, setRandom] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [favourites, setFavourites] = useState([])
  const [showPopUp, setShowPopUp] = useState(false)

  const getTrending = async () => {
    const key = process.env.REACT_APP_API_KEY

    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`)
      let newData = await response.json()
      setData(newData.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getRandom = async () => {
    const key = process.env.REACT_APP_API_KEY

    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}`)
      let newData = await response.json()
      setRandom(newData)
      setLoaded(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRandom()
    getTrending()
  }, []) 

  if(!loaded) {
    return null
  }
  return (
    <div>
      <h1>giphy searcher v2</h1>
      {/* get random gif */}
      <button onClick={() => setShowPopUp(true)}>random</button>
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
      />
    </div>
  );
}

export default App;
