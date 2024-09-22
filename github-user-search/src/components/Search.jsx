import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setSearchTerm(value);
    if (name === 'location') setLocation(value);
    if (name === 'repos') setRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const users = await fetchAdvancedUserData(searchTerm, location, repos);
      setUserData(users.items);
    } catch (err) {
      setError('Looks like we cant find the user');
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="username"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter location"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="number"
          name="repos"
          value={repos}
          onChange={handleInputChange}
          placeholder="Minimum number of repositories"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition duration-200"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && userData.length > 0 && (
        <ul>
          {userData.map((user) => (
            <li key={user.id} className="border p-4 rounded-md mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{user.login}</h3>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
