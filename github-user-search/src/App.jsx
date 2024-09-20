import React from 'react';
import SearchForm from './components/SearchForm';
import Search from './components/Search';


const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">GitHub User Search</h1>
      <SearchForm />
      <Search />
    </div>
  );
};

export default App;
