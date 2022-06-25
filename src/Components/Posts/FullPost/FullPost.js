import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthorDetails from "../../AuthorDetails/AuthorDetails";
import ReactionButtons from "../../ReactionButtons/ReactionButtons";
import { allPosts } from "../PostSlice";
const FullPost = () => {
  const posts = useSelector(allPosts);
  return (
    <>
      <div className="w-30 p-3">
        {posts.map((post) => (
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
              <h5 className="card-title">{post.title}</h5>
              <h5 className="card-title">
                <AuthorDetails email={post.userId} />
              </h5>
              <p className="card-text">{post.body}</p>
              <h5 className="card-title my-3">
                {new Date().toLocaleDateString()}
              </h5>
              <h5 className="card-title">
                <ReactionButtons />
              </h5>
              <h5 className="card-title text-end">
                <AuthorDetails postId={post.userId} />
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FullPost;
