import React, { useState } from "react";
import "./progressbar.css";

const Progressbar = ({ step }) => {
  // eslint-disable-next-line
  const [title, settitle] = useState([
    { title: "Personal", logo: <i class="far fa-user fa-2x "></i> },
    { title: "Academic", logo: <i class="fas fa-user-graduate fa-2x"></i> },
    { title: "Experience", logo: <i class="fas fa-briefcase fa-2x"></i> },
    { title: "Skills", logo: <i class="fas fa-tools fa-2x"></i> },
    { title: "Social", logo: <i class="far fa-handshake fa-2x"></i> },
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
                class={`progressbar-line ${step >= index + 1 && "progressbar-line-active"
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
