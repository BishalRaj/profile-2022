import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Experience = ({ fetchData }) => {
  const [moreOption, setmoreOption] = useState([]);
  const [experienceData, setexperienceData] = useState([]);

  const optionClickHandler = () => {
    setmoreOption([...moreOption, { id: uuidv4() }]);
  };
  const handleRemoveOption = (id) => {
    setmoreOption(moreOption.filter((option) => option.id !== id));
  };

  const handleChange = (event) => {
    setexperienceData({
      ...experienceData,
      [event.target.id]: {
        ...experienceData[event.target.id],
        [event.target.name]: event.target.value,
      },
    });
    let data = [
      {
        ...experienceData,
        [event.target.id]: {
          ...experienceData[event.target.id],
          [event.target.name]: event.target.value,
        },
      },
    ];
    fetchData(data);
  };

  return (
    <div className="row p-5 bg-white rounded">
      <div className="col-12 mb-5">
        <button className="btn btn-success" onClick={optionClickHandler}>
          Add new Experience
        </button>
      </div>

      <div className="col-12">
        <div className="form-group">
          <label className="mb-1 pb-3" for="institution">
            Name of Institution
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="0"
            name="institution"
            placeholder=""
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="duties">
            Duties/Roles
          </label>
          <input
            type="text"
            className="form-control my-1"
            id="0"
            name="duties"
            placeholder=""
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="start">
            Start year
          </label>
          <input
            type="date"
            className="form-control my-1"
            id="0"
            name="start"
            placeholder=""
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group">
          <label className="my-1 py-3 w-100" for="end">
            End year
          </label>
          <input
            type="date"
            className="form-control"
            id="0"
            name="end"
            placeholder=""
            onChange={handleChange}
          />
        </div>
      </div>

      {moreOption.map((option, index) => {
        return (
          <>
            <div className="col-12 mb-5 mt-5">
              <button className="btn btn-success" onClick={optionClickHandler}>
                Add new Experience
              </button>
              <button
                className="btn btn-danger float-end"
                onClick={() => handleRemoveOption(option.id)}
              >
                Remove Field
              </button>
            </div>

            <div className="col-12">
              <div className="form-group">
                <label className="mb-1 pb-3" for="institution">
                  Name of Institution
                </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id={index + 1}
                  name="institution"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label className="my-1 py-3 w-100" for="duties">
                  Duties/Roles
                </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id={index + 1}
                  name="duties"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <label className="my-1 py-3 w-100" for="start">
                  Start year
                </label>
                <input
                  type="date"
                  className="form-control my-1"
                  id={index + 1}
                  name="start"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <label className="my-1 py-3 w-100" for="end">
                  End year
                </label>
                <input
                  type="date"
                  className="form-control"
                  id={index + 1}
                  name="end"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Experience;
