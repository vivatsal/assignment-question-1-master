import "./search.css";
const Search = ({ searchText, onChange, variant = 'one', children, ...rest }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={onChange}
      className={`search ${variant}`}
      {...rest}
    />
  );
}

export default Search;
