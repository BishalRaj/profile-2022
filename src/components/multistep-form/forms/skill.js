import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Skill = ({ fetchData }) => {
  const [moreOption, setmoreOption] = useState([]);
  const [skillData, setskillData] = useState([]);
  const optionClickHandler = () => {
    setmoreOption([...moreOption, { id: uuidv4() }]);
  };
  const handleRemoveOption = (id) => {
    setmoreOption(moreOption.filter((option) => option.id !== id));
  };

  const handleChange = (event) => {
    setskillData({
      ...skillData,
      [event.target.id]: {
        ...skillData[event.target.id],
        [event.target.name]: event.target.value,
      },
    });
    let data = [
      {
        ...skillData,
        [event.target.id]: {
          ...skillData[event.target.id],
          [event.target.name]: event.target.value,
        },
      },
    ];

    fetchData(data);
  };

  return (
    <>
      <div className="row p-5 bg-white rounded">
        <div className="col-12">
          <button className="btn btn-success" onClick={optionClickHandler}>
            Add new expertise
          </button>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  col-12">
          <div className="form-group">
            <label className="my-1 py-3 w-100" for="expertise">
              Expertise
            </label>
            <input
              type="text"
              className="form-control my-1"
              id="0"
              name="expertise"
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12  col-12">
          <div className="form-group">
            <label className="my-1 py-3 w-100" for="Percent">
              Percent
            </label>
            <input
              type="text"
              className="form-control"
              id="0"
              name="Percent"
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
      </div>

      {moreOption.map((option, index) => {
        return (
          <div className="row p-5 bg-white rounded">
            <div className="col-12">
              <button className="btn btn-success" onClick={optionClickHandler}>
                Add new expertise
              </button>
              <button
                className="btn btn-danger float-end"
                onClick={() => handleRemoveOption(option.id)}
              >
                Remove Field
              </button>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12  col-12">
              <div className="form-group">
                <label className="my-1 py-3 w-100" for="expertise">
                  Expertise
                </label>
                <input
                  type="text"
                  className="form-control my-1"
                  id={index + 1}
                  name="expertise"
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12  col-12">
              <div className="form-group">
                <label className="my-1 py-3 w-100" for="Percent">
                  Percent
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={index + 1}
                  name="Percent"
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skill;
