import React from "react";
import "./form.css";
const FormData = () => {
  return (
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
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <button type="button" class="btn btn-success mx-auto">
        Add Post
      </button>
    </div>
  );
};

export default FormData;
