export default function SearchBar({ onSearch, value }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="ค้นหาที่เที่ยว"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}