import "./singlepost.css";
import React from "react";

const SinglePost = () => {
  return (
    <div className=" container w-75">
      <div class="container  my-3">
        <div className="d-flex flex-row   mb-3">
          <h5 className="">Name: </h5>
          <p className="align-middle mx-5">Deepak Kumar Bakki</p>
        </div>
        <div className="d-flex flex-row   mb-3">
          <h5>Email: </h5>
          <p className="align-middle mx-5">deepak123@gmail.com</p>
        </div>
        <div className="d-flex flex-row mb-3  ">
          <h5>Content: </h5>
          <p className="text-break mx-3">
            lorem10lorem10lorem10lorem10lorem10lorem10lorem10l
            orem10lorem10lorem10lorem10lorem10lorem10lorem10lo
            rem10lorem10lorem10
          </p>
        </div>
        <div className="d-flex flex-row  mb-3">
          <h5>Date: </h5>
          <p className="align-middle mx-5">{new Date().toLocaleString()}</p>
        </div>
        <div className="d-flex flex-row  mb-3">
          <h5>Author Name: </h5>
          <p className="align-middle mx-5">Edward Cullen</p>
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
                  <p className="align-middle mx-5">Edward Cullen</p>
                </div>
                <div className="d-flex flex-row  mb-3">
                  <h5>Suite: </h5>
                  <p className="align-middle mx-5">Edward Cullen</p>
                </div>
                <div className="d-flex flex-row  mb-3">
                  <h5>City: </h5>
                  <p className="align-middle mx-5">Edward Cullen</p>
                </div>
                <div className="d-flex flex-row  mb-3">
                  <h5>ZipCode: </h5>
                  <p className="align-middle mx-5">Edward Cullen</p>
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
                  <p className="align-middle mx-5">Edward Cullen</p>
                </div>

                <div className="d-flex flex-row  mb-3">
                  <h5>Company catchPhrase: </h5>
                  <p className="align-middle mx-5">Edward Cullen</p>
                </div>

                <div className="d-flex flex-row  mb-3">
                  <h5>Company Product Name (BS): </h5>
                  <p className="align-middle mx-5">Edward Cullen</p>
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
    </div>
  );
};

export default SinglePost;
