import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
  return (
    <div className="pa2">
      <input 
        type="search" 
        placeholder="Search Robot..." 
        className="pa2 bg-washed-blue ba b--light-silver"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;