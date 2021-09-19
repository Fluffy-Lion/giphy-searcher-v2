import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
  background-color: #93ede0;
  font-family: Arial, sans-serif;
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  
`;
const StyledList = styled.li`
  width: 200px;
  list-style-type: none;
  text-align: center;
  padding: 5px;
  margin: 5px;
  color: #e7adf1;
  &:hover {
    background-color: #EDE093;
  }
`;
const NavBar = () => {
  return (
    <NavWrap>
      <StyledUl>
        <StyledList>
          <Link to="/">Home</Link>
        </StyledList>
        <StyledList>
          <Link to="/favourites">Favourites</Link>
        </StyledList>
      </StyledUl>
    </NavWrap>
  );
};
export default NavBar;
