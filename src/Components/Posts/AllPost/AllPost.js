import React, { useEffect } from "react";
import "./allpost.css";
import { Link } from "react-router-dom";
import { allPosts, status, error, fetchPosts } from "../../Posts/PostSlice";
import { useDispatch, useSelector } from "react-redux";
const AllPost = () => {
  const postStatus = useSelector(status);
  const posts = useSelector(allPosts);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postStatus]);

  return (
    <>
      <div className="w-25 p-3">
        {posts.map((ele) => (
          <div className="card mb-3" key={ele.id}>
            <h5 className="card-header text-end">
              <button type="button" class="btn btn-dark mx-3">
                Edit
              </button>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </h5>
            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
              <h5 className="card-title">email</h5>
              <p className="card-text">{ele.body}</p>
              <h5 className="card-title">{new Date().toLocaleString()}</h5>
              <h5 className="card-title">like share subscribe</h5>
              <h5 className="card-title text-end">Author</h5>
              <Link to="/123">
                <a href="p" className="btn btn-primary">
                  View Post
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPost;
