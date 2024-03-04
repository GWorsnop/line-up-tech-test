import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function Home() {
  //   let [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState<User[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const page = useSelector((state: any) => state.page);

  useEffect(() => {
    // setSearchParams({ page: page });
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      console.log(res.data.data);
      setUsers(res.data.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p className="loader"></p>
      </div>
    );
  } else
    return (
      <div>
        <h3>Users:</h3>
        {users.map((user: User) => {
          return (
            <div key={user.id}>
              <img width="160px" src={user.avatar} alt={user.first_name}></img>
              <div>
                <ul>
                  <li>
                    <p>Name:</p>
                    <p>
                      {user.first_name} {user.last_name}
                    </p>
                  </li>
                  <li>
                    <p>Email:</p>
                    <p>{user.email}</p>
                  </li>
                </ul>
                <a href={`/user/${user.id}`}>
                  <button>See more</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Home;
