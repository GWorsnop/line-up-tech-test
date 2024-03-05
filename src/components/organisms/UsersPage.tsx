import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  StyledButton,
  StyledButtonContainer,
  StyledFooter,
  StyledGrid,
  StyledHomeContainer,
  StyledImage,
  StyledImageContainer,
  StyledInfoContainer,
  StyledList,
} from "./UsersPage.style";
import { useListUsersQuery } from "../../redux/userAPI";
import ErrorPage from "../molecules/errorPage";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Loader, LoadingContainer } from "../styles/Loader.style";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function UsersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageURL = Number(searchParams.get("page") ?? 1);
  const { data: users, isLoading } = useListUsersQuery(pageURL);
  const navigate = useNavigate();

  // I think this resolves the issue - now the URL is the single source of truth

  useEffect(() => {
    setSearchParams({ page: pageURL.toString() });
  });

  if (isLoading) {
    return (
      <LoadingContainer>
        <Loader></Loader>
      </LoadingContainer>
    );
  }

  if (!users?.data.length) {
    return <ErrorPage />;
  }

  return (
    <>
      <StyledHomeContainer>
        <StyledGrid>
          {users.data.map((user: User) => {
            return (
              <div key={user.id}>
                <StyledImageContainer>
                  <StyledImage
                    src={user.avatar}
                    alt={user.first_name}
                  ></StyledImage>
                </StyledImageContainer>
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
      {/* // These arrows use a reducer to change the store for the page number  */}
      <StyledFooter>
        <button
          onClick={() => navigate(`/users?page=${pageURL - 1}`)}
          disabled={users.total_pages === 1}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => navigate(`/users?page=${pageURL + 1}`)}
          disabled={pageURL === users.total_pages}
        >
          <ArrowRight />
        </button>
      </StyledFooter>
    </>
  );
}

export default UsersPage;
