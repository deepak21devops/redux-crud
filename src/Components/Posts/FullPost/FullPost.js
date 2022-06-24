import React from "react";
import { Link } from "react-router-dom";
const FullPost = () => {
  return (
    <div className="w-30 p-3">
      <div className="card mb-3">
        <h5 className="card-header text-end">
          <Link to="/123">
            <button type="button" class="btn btn-dark mx-3">
              Edit
            </button>
          </Link>

          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </h5>
        <div className="card-body">
          <h5 className="card-title">name</h5>
          <h5 className="card-title">email</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <h5 className="card-title">date</h5>
          <h5 className="card-title">like share subscribe</h5>
          <h5 className="card-title text-end">Author</h5>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
