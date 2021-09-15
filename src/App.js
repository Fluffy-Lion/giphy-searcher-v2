import { useEffect, useState } from "react";

import PopUp from "./components/PopUp";

const App = () => {

  const [data, setData] = useState([])
  const [random, setRandom] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [favourites, setFavourites] = useState([])
  const [showPopUp, setShowPopUp] = useState(false)

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
  }, []) 
  
  if(!loaded) {
    return null
  }
  return (
    <div>
      <h1>giphy searcher v2</h1>
      <button onClick={getRandom}>get</button>
      {/* get random gif */}
      <button onClick={() => setShowPopUp(true)}>show pop</button>
      <PopUp setShowPopUp={setShowPopUp} showPopUp={showPopUp}>
        <img src={random.data.images.fixed_height.url}/>
      </PopUp>
    </div>
  );
}

export default App;
