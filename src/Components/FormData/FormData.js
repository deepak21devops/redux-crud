import React, { useEffect } from "react";
import "./form.css";
import { allUsers, allStatus } from "../Posts/UserSlice";
import { allPosts, status, error, fetchPosts } from "../Posts/PostSlice";
import { useDispatch, useSelector } from "react-redux";
const FormData = () => {
  const dispatch = useDispatch();
  const users = useSelector(allUsers);
  // const status = useSelector(allStatus);

  const optionsMenu = users.map((ele) => {
    return (
      <option key={ele.id} value={ele.id}>
        {ele.name}
      </option>
    );
  });

  return (
    <>
      <div className="w-25 p-3">
        <h1>Post Form</h1>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Content
          </span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <select class="form-select mb-3" aria-label="Default select example">
          <option selected>Select Author</option>
          {optionsMenu}
        </select>
        <button type="button" class="btn btn-success mx-auto">
          Add Post
        </button>
      </div>
    </>
  );
};

export default FormData;
