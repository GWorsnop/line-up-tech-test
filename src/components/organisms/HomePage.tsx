import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  StyledGrid,
  StyledHomeContainer,
  StyledImage,
  StyledInfoContainer,
  StyledList,
} from "./HomePage.style";
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
      <StyledHomeContainer>
        <StyledGrid>
          {users.map((user: User) => {
            return (
              <div key={user.id}>
                <StyledImage
                  src={user.avatar}
                  alt={user.first_name}
                ></StyledImage>
                <StyledInfoContainer>
                  <StyledList>
                    <dt>Name:</dt>
                    <dd>
                      {user.first_name} {user.last_name}
                    </dd>
                    <dt>Email:</dt>
                    <dd>{user.email}</dd>
                  </StyledList>
                  <a href={`/user/${user.id}`}>
                    <button>See more</button>
                  </a>
                </StyledInfoContainer>
              </div>
            );
          })}
        </StyledGrid>
      </StyledHomeContainer>
    );
}

export default Home;
