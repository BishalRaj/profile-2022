import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./admin-navbar.css";
import { connect } from "react-redux";
import { Logout } from "../../../Actions/authAction";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => {
    setSidebar(!sidebar);
    props.slide(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "green" }}>
        <div className="a-navbar" style={{ fontSize: "2rem" }}>
          <Link className="a-menu-bars">
            <FaBars onClick={showSideBar} />
          </Link>
        </div>
        <nav className={sidebar ? "a-nav-menu active" : "a-nav-menu"}>
          <ul className="a-nav-menu-items">
            <li className="a-navbar-toggle" onClick={showSideBar}>
              <Link className="a-menu-bars">
                <AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((data, index) => {
              return (
                <li className={data.cName} key={index}>
                  <Link
                    onClick={() => props.changePath(data.title)}
                    to={data.path}
                  >
                    {data.icon}
                    <span>{data.title}</span>
                  </Link>
                </li>
              );
            })}

            <li className="a-nav-text" onClick={() => props.Logout()}>
              <Link>
                <AiOutlineLogout />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default connect(null, { Logout })(Navbar);
