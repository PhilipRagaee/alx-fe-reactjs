function UserDetails({ useContext }) {
  return (
    <div>
      <p>Name: {useContext.name}</p>
      <p>Email: {useContext.email}</p>
    </div>
  );
}

export default UserDetails;
