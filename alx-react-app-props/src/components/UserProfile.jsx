import React, { useContext } from 'react';
import UserContext from '../components/UserContext'; 

const UserProfile = (props) => {
  const userData = useContext(UserContext);

    return (
      <div>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };
  export default UserProfile;