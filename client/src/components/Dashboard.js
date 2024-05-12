import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1336/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="home">
      <div>
        <h1>Dashboard</h1>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              Name : {user.name}
              <br />
              Email : {user.email}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <button>
          <Link to="/">Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
