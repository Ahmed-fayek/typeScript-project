import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const Users = () => {
  const [users, setusers] = useState<any>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setusers(json));
  }, []);
  return (
    <>
      <table>
        <thead>
          <th> name</th>
          <th> usernname</th>
          <th> email</th>
          <th> address</th>
          <th> phone</th>
          <th> website</th>
          <th> company</th>
        </thead>

        {users.map((user: user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          );
        })}
      </table>
      <Link to={"/"}> Go home</Link>
    </>
  );
};
export default Users;
