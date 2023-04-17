import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.homeDiv}>
      <p className={css.welcome}>
        Hello! It's Homepage. To see tweets page please click
      </p>
      <NavLink to="/tweets" className={css.link}>
        here.
      </NavLink>
    </div>
  );
}
