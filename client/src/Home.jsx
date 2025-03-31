import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import AttractionList from './components/AttractionList';

export default function Home() {
  const [attractions, setAttractions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAttractions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4001/trips?keywords=${searchTerm}`
        );
        const data = await response.json();
        setAttractions(data.data || []);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchAttractions();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTagClick = (tag) => {
    setSearchTerm((prev) => (prev ? `${prev} ${tag}` : tag));
  };

  return (
    <div className="container">
      <h1>เที่ยวไหนดี</h1>
      <SearchBar onSearch={handleSearch} value={searchTerm} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AttractionList
          attractions={attractions}
          addCategoryToSearch={handleTagClick}
        />
      )}
    </div>
  );
}