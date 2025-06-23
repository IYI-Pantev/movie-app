interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={handleChage}
        />
      </div>
    </div>
  );
};

export default Search;
