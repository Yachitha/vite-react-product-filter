interface SearchBarProps {
  filterText: string;
  setFilterText: (filterText: string) => void;
  inStockOnly: boolean;
  setInStockOnly: (inStockOnly: boolean) => void;
}

export default function SearchBar(searchBarProps: SearchBarProps) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchBarProps.filterText}
          onChange={(e) => searchBarProps.setFilterText(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={searchBarProps.inStockOnly}
            onChange={(e) => searchBarProps.setInStockOnly(e.target.checked)}
          />
          {" Only show products in stock"}
        </label>
      </div>
    </>
  );
}
