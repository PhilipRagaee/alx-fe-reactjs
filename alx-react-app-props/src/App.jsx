import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

// ...rest of the code

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
