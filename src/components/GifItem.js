import styled from "styled-components";

const GifImg = styled.img`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 5px;
`;

const GifItem = ({ gif }) => {
  if (!gif) {
    return null;
  }
  return (
    <div>
      <GifImg src={gif.images.fixed_height.url} />
    </div>
  );
};

export default GifItem;
