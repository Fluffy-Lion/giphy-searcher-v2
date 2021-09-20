import styled from "styled-components";

const GifImg = styled.img`
  @media (min-width: 550px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  display: block;
`;

const GifItem = ({ gif }) => {
  if (!gif) {
    return null;
  }
  return <GifImg src={gif.images.fixed_height.url} />;
};

export default GifItem;
