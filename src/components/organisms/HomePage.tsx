import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  StyledButton,
  StyledButtonContainer,
  StyledGrid,
  StyledHomeContainer,
  StyledImage,
  StyledInfoContainer,
  StyledList,
} from "./HomePage.style";
import { useListUsersQuery } from "../../redux/userAPI";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  console.log(page, "page");

  const { data: users, isLoading } = useListUsersQuery(page);
  console.log(users, "data");
  console.log(isLoading, "isLoading");

  useEffect(() => {
    const pageURL = searchParams.get("page");
    if (!pageURL) {
      setSearchParams({ page: "1" });
    }
  });

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
          {users &&
            users.data.map((user: User) => {
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
                  </StyledInfoContainer>
                  <StyledButtonContainer>
                    <a href={`/user/${user.id}`}>
                      <StyledButton>See more</StyledButton>
                    </a>
                  </StyledButtonContainer>
                </div>
              );
            })}
        </StyledGrid>
      </StyledHomeContainer>
    );
}

export default Home;
