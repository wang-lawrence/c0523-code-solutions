export default function SearchBar({onSearch}) {
  return (
    <div className="searchBar">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" name="searchInput" placeholder="search" onChange={e => onSearch(e.target.value)}/>
    </div>
  );
}
