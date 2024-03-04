import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../redux/userAPI";
import {
  StyledUserContainer,
  StyledUserEmail,
  StyledUserName,
  StyledImage,
  StyledInfoContainer,
  ExtraDetailsContainer,
} from "./UserPage.style";
import ErrorPage from "../molecules/errorPage";

function UserPage() {
  const { userId } = useParams();
  const { data: user, isLoading } = useGetUserQuery(Number(userId));

  if (isLoading) {
    return (
      <div>
        <p className="loader"></p>
      </div>
    );
  } else if (user) {
    return (
      <>
        <StyledUserContainer>
          <StyledImage
            src={user.data.avatar}
            alt={user.data.first_name}
          ></StyledImage>
          <StyledInfoContainer>
            <StyledUserName>
              {user.data.first_name} {user.data.last_name}
            </StyledUserName>
            <StyledUserEmail>
              <dd>{user.data.email}</dd>
            </StyledUserEmail>
          </StyledInfoContainer>
        </StyledUserContainer>
        <ExtraDetailsContainer>
          <div>
            <h3 className="pb-4 text-center text-3xl font-semibold md:pl-4 md:text-left">
              Details:
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              suscipit aliquet augue, sed pretium sapien lacinia sit amet.
              Praesent id ligula nisi. Duis iaculis, metus et laoreet feugiat,
              neque tortor hendrerit turpis, non dictum velit turpis cursus
              libero. In sit amet feugiat dolor, vitae mollis orci. In sodales
              sapien at fringilla scelerisque. Etiam luctus dolor erat, quis
              maximus ligula tempor eget. Ut auctor felis ut felis consectetur
              dapibus.
            </p>
          </div>
          <div>
            <h3 className="pb-4 text-center text-3xl font-semibold md:pl-4 md:text-left">
              Extra Details:
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
              est augue. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Duis eu neque ex. Vestibulum suscipit sem sed felis
              facilisis, vel tincidunt nibh rutrum. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Donec id enim rutrum orci egestas placerat ut eget ante.
            </p>
          </div>
        </ExtraDetailsContainer>
      </>
    );
  } else return <ErrorPage />;
}
export default UserPage;
