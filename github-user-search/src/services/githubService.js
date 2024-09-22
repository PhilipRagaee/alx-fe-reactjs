import axios from 'axios';

export const fetchAdvancedUserData = async (username, location, repos) => {
  const query = `q=${username} ${location ? `location:${location}` : ''} ${
    repos ? `repos:>${repos}` : ''
  }`;
  const url = `https://api.github.com/search/users?${query}`;
  
  const response = await axios.get(url);
  return response.data;
};
