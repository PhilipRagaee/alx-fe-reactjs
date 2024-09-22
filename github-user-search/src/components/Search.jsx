import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data); 
    } catch (err) {
      setError(true); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub username"
          className="border rounded p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full mt-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user.</p>}

      {userData && (
        <div className="mt-4">
          <img src={userData.avatar_url} alt={userData.login} className="rounded-full w-16 h-16" />
          <h2 className="text-xl font-bold">{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
