import "./singlepost.css";
import React, { useState } from "react";

const SinglePost = () => {
  const [editbool, setEditbool] = useState(false);
  return (
    <div className="container w-75 d-flex flex-row">
      <div class="container  my-3">
        <div className="d-flex flex-row   mb-3">
          <h5 className="">Name: </h5>

          {editbool ? (
            <input
              className="align-middle mx-5"
              type="text"
              placeholder="Name"
            ></input>
          ) : (
            <p className="align-middle mx-5">Deepak Kumar Bakki</p>
          )}
        </div>
        <div className="d-flex flex-row   mb-3">
          <h5>Email: </h5>

          {editbool ? (
            <input
              className="align-middle mx-5"
              type="text"
              placeholder="Email"
            ></input>
          ) : (
            <p className="align-middle mx-5">deepak123@gmail.com</p>
          )}
        </div>
        <div className="d-flex flex-row mb-3  ">
          <h5>Content: </h5>

          {editbool ? (
            <textarea className="text-break mx-3"></textarea>
          ) : (
            <p className="text-break mx-3">
              lorem10lorem10lorem10lorem10lorem10lorem10lorem10l
              orem10lorem10lorem10lorem10lorem10lorem10lorem10lo
              rem10lorem10lorem10
            </p>
          )}
        </div>
        <div className="d-flex flex-row  mb-3">
          <h5>Date: </h5>
          <p className="align-middle mx-5">{new Date().toLocaleString()}</p>
        </div>
        <div className="d-flex flex-row  mb-3">
          <h5>Author Name: </h5>

          {editbool ? (
            <input
              className="align-middle mx-5"
              type="text"
              placeholder="Author Name"
            ></input>
          ) : (
            <p className="align-middle mx-5">Edward Cullen</p>
          )}
        </div>

        <div className="d-flex flex-row mb-3">
          <p className="">like</p>
          <p className="mx-4">share</p>
          <p className="">subscribe</p>
        </div>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Address
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="d-flex flex-row  mb-3">
                  <h5>Street Name: </h5>

                  {editbool ? (
                    <input
                      className="align-middle mx-5"
                      type="text"
                      placeholder="Street Name"
                    ></input>
                  ) : (
                    <p className="align-middle mx-5">Edward Cullen</p>
                  )}
                </div>
                <div className="d-flex flex-row  mb-3">
                  <h5>Suite: </h5>

                  {editbool ? (
                    <input
                      className="align-middle mx-5"
                      type="text"
                      placeholder="Suite Name"
                    ></input>
                  ) : (
                    <p className="align-middle mx-5">Edward Cullen</p>
                  )}
                </div>
                <div className="d-flex flex-row  mb-3">
                  <h5>City: </h5>

                  {editbool ? (
                    <input
                      className="align-middle mx-5"
                      type="text"
                      placeholder="City Name"
                    ></input>
                  ) : (
                    <p className="align-middle mx-5">Edward Cullen</p>
                  )}
                </div>
                <div className="d-flex flex-row  mb-3">
                  <h5>ZipCode: </h5>

                  {editbool ? (
                    <input
                      className="align-middle mx-5"
                      type="text"
                      placeholder="ZipCode"
                    ></input>
                  ) : (
                    <p className="align-middle mx-5">Edward Cullen</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Company
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="d-flex flex-row  mb-3">
                  <h5>Company Name: </h5>

                  {editbool ? (
                    <input
                      className="align-middle mx-5"
                      type="text"
                      placeholder="Company Name"
                    ></input>
                  ) : (
                    <p className="align-middle mx-5">Edward Cullen</p>
                  )}
                </div>

                <div className="d-flex flex-row  mb-3">
                  <h5>Company catchPhrase: </h5>

                  {editbool ? (
                    <input
                      className="align-middle mx-5"
                      type="text"
                      placeholder="Company catchPhrase"
                    ></input>
                  ) : (
                    <p className="align-middle mx-5">Edward Cullen</p>
                  )}
                </div>

                <div className="d-flex flex-row  mb-3">
                  <h5>Company Product Name (BS): </h5>

                  {editbool ? (
                    <input
                      className="align-middle mx-5"
                      type="text"
                      placeholder="Company Product Name (BS)"
                    ></input>
                  ) : (
                    <p className="align-middle mx-5">Edward Cullen</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-floating my-5 w-75">
          <div className="d-flex flex-row justify-content-between">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
            <button type="button" class="btn btn-info mx-3">
              Post
            </button>
          </div>
        </div>
      </div>

      {editbool && (
        <button
          type="button"
          class="btn btn-danger h-25 my-3 mx-3"
          onClick={() => setEditbool(!editbool)}
        >
          Cancel
        </button>
      )}
      {!editbool && (
        <button
          type="button"
          class="btn btn-secondary h-25 my-3 mx-3"
          onClick={() => setEditbool(!editbool)}
        >
          Edit
        </button>
      )}
      {editbool && (
        <button type="button" class="btn btn-primary h-25 my-3">
          save
        </button>
      )}
    </div>
  );
};

export default SinglePost;
