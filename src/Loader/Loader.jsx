import React from "react";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader}>
      <Circles
        height="80"
        width="80"
        color="#4c4096"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
