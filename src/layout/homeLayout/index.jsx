import React from "react";
import { useState } from "react";
import homePage from "../../pages";
import "../../styles/homeStyle.scss";
const Index = () => {
  const [theme, setTheme] = useState("theme-dark");

  function checkStorage() {
    return localStorage.getItem("theme");
  }

  function toggleTheme(theme) {
    setTheme({
      theme,
    });

    localStorage.setItem("theme", theme);
  }

  return (
    <div className={`app ${checkStorage() ? checkStorage() : theme}`}>
      <homePage.NavBar />
      <homePage.Intro />
      <homePage.About />
      {/* <Resume admin={props.admin} /> */}
      <homePage.Services />
      <homePage.Skills />
      <homePage.Projects />
      {/* <Contact /> */}
      <homePage.Footer />
      {/* <BottomNavBar clickMe={toggleTheme} /> */}
    </div>
  );
};

export default Index;
