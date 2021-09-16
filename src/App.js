import { useEffect, useState } from "react";
import GifList from "./components/GifList";

import PopUp from "./components/PopUp";

const App = () => {

  const [data, setData] = useState([])
  const [random, setRandom] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [favourites, setFavourites] = useState([])
  const [showPopUp, setShowPopUp] = useState(false)
  const [input, setInput] = useState("")

  const key = process.env.REACT_APP_API_KEY

  const searcher = async (e) => {
    e.preventDefault()
      try {
        setData([])
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}`)
        let newData = await response.json()
        setData(newData.data)
      } catch (error) {
        console.log(error)
      }
  }

  const getTrending = async () => {
    
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`)
      let newData = await response.json()
      setData(newData.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getRandom = async () => {

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
      <div>
        <form onSubmit={(e) => searcher(e)}>
          <input type="text" onChange={(e) => setInput(e.target.value)} />
          <button type="submit">search</button>
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
      />
    </div>
  );
}

export default App;
