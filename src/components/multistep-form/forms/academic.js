import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Academic = ({ fetchData }) => {
  const [moreOption, setmoreOption] = useState([]);
  const [academicData, setacademicData] = useState([]);
  const optionClickHandler = () => {
    setmoreOption([...moreOption, { id: uuidv4() }]);
  };
  const handleRemoveOption = (id) => {
    setmoreOption(moreOption.filter((option) => option.id !== id));
  };

  const handleChange = (event) => {
    setacademicData({
      ...academicData,
      [event.target.id]: {
        ...academicData[event.target.id],
        [event.target.name]: event.target.value,
      },
    });
    let data = [
      {
        ...academicData,
        [event.target.id]: {
          ...academicData[event.target.id],
          [event.target.name]: event.target.value,
        },
      },
    ];
    fetchData(data);
  };

  return (
    <>
      <div className="row p-5 bg-white">
        <div className="col-12 mb-5">
          <button className="btn btn-success" onClick={optionClickHandler}>
            Add new Qualification
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
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="my-1 py-3 w-100" for="qualification">
              Name of Qualification
            </label>
            <input
              type="text"
              className="form-control my-1"
              id="0"
              name="qualification"
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="form-group">
            <label className="my-1 py-3 w-100" for="start">
              Start year
            </label>
            <input
              type="date"
              className="form-control my-1"
              id="0"
              name="start"
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="form-group">
            <label className="my-1 py-3 w-100" for="end">
              End year
            </label>
            <input
              type="date"
              className="form-control"
              id="0"
              name="end"
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="form-group">
            <label className="my-1 py-3 w-100" for="start">
              GPA/Percentage
            </label>
            <input
              type="number"
              className="form-control my-1"
              id="0"
              name="gpa"
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="row p-5 bg-white">
        {moreOption.map((option, index) => {
          return (
            <>
              <div className="col-12 mb-5 mt-5">
                <button
                  className="btn btn-success"
                  id={option.id}
                  onClick={optionClickHandler}
                >
                  Add new Qualification
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
                    name="institution"
                    className="form-control my-1"
                    id={index + 1}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="my-1 py-3 w-100" for="qualification">
                    Name of Qualification
                  </label>
                  <input
                    type="text"
                    className="form-control my-1"
                    id={index + 1}
                    name="qualification"
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group">
                  <label className="my-1 py-3 w-100" for="start">
                    Start year
                  </label>
                  <input
                    type="date"
                    className="form-control my-1"
                    id={index + 1}
                    name="start"
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group">
                  <label className="my-1 py-3 w-100" for="end">
                    End year
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id={index + 1}
                    onChange={handleChange}
                    name="end"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group">
                  <label className="my-1 py-3 w-100" for="start">
                    GPA/Percentage
                  </label>
                  <input
                    type="number"
                    className="form-control my-1"
                    id={index + 1}
                    name="gpa"
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Academic;
