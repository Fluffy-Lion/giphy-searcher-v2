import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Favourites from "./components/Favourites";
import Home from "./components/Home";
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

  const clearSearch = (e) => {
    e.preventDefault()
    setData([])
    setInput("")
    getTrending()
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
  <h1> giphy searcher v2 </h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourites">favourites</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route path="/">
              <Home 
              setShowPopUp={setShowPopUp}
              showPopUp={showPopUp}
              // src={random.data.images.fixed_height.url}
              getRandom={getRandom}
              favourites={favourites}
              setFavourites={setFavourites}
              data={data} 
              searcher={searcher}
              input={input}
              setInput={setInput}
              clearSearch={clearSearch}
              random={random}
              loaded={loaded}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
  );
}

export default App;
