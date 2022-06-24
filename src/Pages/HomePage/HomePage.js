import React from "react";
import FormData from "../../Components/FormData/FormData";
import AllPost from "../../Components/Posts/AllPost/AllPost";

const HomePage = () => {
  return (
    <div className="d-flex flex-row justify-content-around mb-3">
      <FormData />
      <AllPost />
    </div>
  );
};

export default HomePage;
