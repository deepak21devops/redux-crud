import React from "react";
import { useSelector } from "react-redux";
import { allUsers } from "../Posts/UserSlice";
const AuthorDetails = (props) => {
  const data = props;
  const users = useSelector(allUsers);
  const author = users.find(
    (auth) => auth.id === data.postId || auth.id === data.email
  );
  console.log(author);
  return (
    <>
      <span>
        {(props.postId && author.name) || (props.email && author.email)}
      </span>
    </>
  );
};

export default AuthorDetails;
