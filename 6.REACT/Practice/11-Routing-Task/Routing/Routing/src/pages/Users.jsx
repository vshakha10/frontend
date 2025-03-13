import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Users() {
  const [user, setUser] = useState([]);

  console.log(user);
  

  useEffect(() => {
    return async () => {
      try {
        let response = await fetch(
          "https://dummyjson.com/recipes/"
        );
        let data = await response.json();
        setUser(data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div>
      <h1>Recipes List</h1>
      {user.map((recipes) => (
        <Link key={recipes.id} to={`/users/${recipes.id}`}>
          <p>{recipes.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Users;
