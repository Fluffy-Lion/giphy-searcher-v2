import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const AppContainer = styled.div `
  background-color: #93EDE0;
`
const Header = styled.h1 `
  border: solid red 3px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  font-size: 80px;
  text-align: center;
  color: #E7ADF1;
  text-shadow: 2px 2px black;
`
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
    <AppContainer>
      <Header>giphy searcher v2</Header>
      <Router>
        <div>
          <NavBar />

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
    </AppContainer>
  );
};

export default App;
