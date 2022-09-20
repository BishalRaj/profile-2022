import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./progressbar.css";

const Progressbar = ({ step }) => {
  // eslint-disable-next-line
  const [title, settitle] = useState([
    { title: "Personal", logo: <FontAwesomeIcon icon={["far", "fa-user"]} /> },
    { title: "Academic", logo: <FontAwesomeIcon icon={["fas", "fa-user-graduate"]} />},
    { title: "Experience", logo:<FontAwesomeIcon icon={["fas", "fa-briefcase"]} />},
    { title: "Skills", logo:<FontAwesomeIcon icon={["fas", "fa-tools"]} /> },
    { title: "Social", logo:<FontAwesomeIcon icon={["far", "fa-handshake"]} /> },
  ]);
  return (
    <div className="row py-5 d-flex align-items-center justify-content-center">
      {title.map((data, index) => {
        return (
          <div className="col-2 progressbar">
            <div
              className={`progressbar-box  mx-auto d-flex align-items-center justify-content-center ${step >= index + 1 && "progressbar-active"
                } `}
            >
              {data.logo}
            </div>
            <p
              className={`text-center small ${step >= index + 1 && "progressbar-text-active"
                } mt-2`}
            >
              {data.title}
            </p>
            {index < 4 && (
              <div
                className={`progressbar-line ${step >= index + 1 && "progressbar-line-active"
                  }`}
              ></div>
            )}
          </div>
        );
      })}

    </div>
  );
};

export default Progressbar;
