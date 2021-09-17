import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Favourites from "./components/Favourites";
import Home from "./components/Home";
const App = () => {
  const [data, setData] = useState([]);
  const [random, setRandom] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [input, setInput] = useState("");
  const [ids, setIds] = useState([]);

  const key = process.env.REACT_APP_API_KEY;

  const searcher = async (e) => {
    e.preventDefault();
    try {
      setData([]);
      let response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}`
      );
      let newData = await response.json();
      setData(newData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setData([]);
    setInput("");
    getTrending();
  };

  const getTrending = async () => {
    try {
      let response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${key}`
      );
      let newData = await response.json();
      setData(newData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandom = async () => {
    try {
      let response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${key}`
      );
      let newData = await response.json();
      setRandom(newData);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const collector = () => {
    let newArr = [];
    favourites.map((item, index) => {
      newArr.push(item.id);
    });
    setIds(newArr);
  };

  useEffect(() => {
    collector();
  }, [favourites]);

  useEffect(() => {
    getRandom();
    getTrending();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("fav")) {
      setFavourites(JSON.parse(localStorage.getItem("fav")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favourites));
  }, [favourites]);

  if (!loaded) {
    return null;
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
                <Link to="/favourites">Favourites</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/favourites">
              <Favourites
                favourites={favourites}
                setFavourites={setFavourites}
              />
            </Route>
            <Route path="/">
              <Home
                setShowPopUp={setShowPopUp}
                showPopUp={showPopUp}
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
                ids={ids}
                setIds={setIds}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
