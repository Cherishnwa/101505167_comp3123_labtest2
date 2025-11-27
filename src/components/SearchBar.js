import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
    e.preventDefault();

    if (searchInput.trim() !== '') {
        onSearch(searchInput.trim());
}
};
    return (
        <div className="search-bar">
            <form onSubmit={handleInputChange} className="search-form">
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Type in city name..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form> 
        </div>
    );
};
export default SearchBar;
