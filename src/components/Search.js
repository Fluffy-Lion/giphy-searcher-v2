import styled from "styled-components";

const SearchWrap = styled.div`
  padding: 5px;
`;
const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    padding: 3px;
    gap 5px;
`;
const Search = ({ searcher, setInput, clearSearch, input }) => {
  return (
    <SearchWrap>
      <SearchForm onSubmit={(e) => searcher(e)}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">search</button>
        <button onClick={(e) => clearSearch(e)}>clear</button>
      </SearchForm>
    </SearchWrap>
  );
};
export default Search;
