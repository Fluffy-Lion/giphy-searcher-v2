import { useEffect, useState } from "react";
import styled from "styled-components";
import AddToFav from "./AddToFav";
import GifItem from "./GifItem";

const GifWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
`;
const GifCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  padding: 5px;
  background-color: #E7ADF1;
  border: solid 1px #BEBFFD;
  border-radius: 3px;
  box-shadow: 4.8px 9.6px 9.6px hsl(0deg 0% 0% / 0.35);
`;

const GifList = ({ data, favourites, setFavourites, ids, setIds }) => {
  if (!data) {
    return null;
  }
  return (
    <GifWrap>
      {data.map((gif, index) => {
        return (
          <GifCont key={index}>
            <GifItem
              ids={ids}
              setIds={setIds}
              data={data}
              index={index}
              gif={gif}
              setFavourites={setFavourites}
              favourites={favourites}
            />
            {ids.includes(gif.id) ? (
              <p>added</p>
            ) : (
              <AddToFav
                index={index}
                favourites={favourites}
                setFavourites={setFavourites}
                data={data}
                index={index}
              />
            )}
          </GifCont>
        );
      })}
    </GifWrap>
  );
};

export default GifList;
