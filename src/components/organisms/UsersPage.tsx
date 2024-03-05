import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/pageSlice";
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
  const pageURL = Number(searchParams.get("page"));
  const pageStore = useSelector((state: RootState) => state.page.page);

  const dispatch = useDispatch();
  const { data: users, isLoading } = useListUsersQuery(pageStore);

  // I struggled here - I couldn't get the URL to match the store information when reloading the page.
  // I would to discuss this further in more detail. I tried to use 2 useEffects but still couldnt figure it out.

  useEffect(() => {
    if (!pageURL || pageURL !== pageStore) {
      setSearchParams({ page: pageStore.toString() });
    }
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
          onClick={() => dispatch(decrement())}
          disabled={pageStore === 1}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => dispatch(increment())}
          disabled={pageStore === users.total_pages}
        >
          <ArrowRight />
        </button>
      </StyledFooter>
    </>
  );
}

export default UsersPage;
