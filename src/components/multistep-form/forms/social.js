import React from "react";

const Social = () => {
  return (
    <div className="row p-5 bg-white rounded">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="facebook">
            facebook
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="facebook"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="github">
            github
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="github"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="Twitter">
            Twitter
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="Twitter"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="Pinterest">
            Pinterest
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="Pinterest"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="Linkedin">
            Linkedin
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="Linkedin"
            placeholder=""
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="Website">
            Website
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="Website"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
