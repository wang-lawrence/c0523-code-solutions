import SearchBar from "./SearchBar"
import RenderList from "./RenderList";
import { useState } from "react";
import './styles.css';

export default function SearchableList({list}) {
  const [searchInput, setSearchInput]= useState('');

  const filteredList = list.filter(quote => quote.replaceAll("'","").toLowerCase().includes(searchInput.replaceAll("'","").toLowerCase()))

  function handleOnSearch(currentInput) {
    setSearchInput(currentInput);
  }

return (
  <div className="container">
    <SearchBar onSearch={handleOnSearch} />
    <RenderList list={filteredList} />
  </div>
);
}
