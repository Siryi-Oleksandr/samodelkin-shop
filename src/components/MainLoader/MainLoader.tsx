"use client";

import { FC } from "react";
import { ColorRing } from "react-loader-spinner";
import styles from "./MainLoader.module.css";

const MainLoader: FC = () => {
  return (
    <div className={styles.containerLoader}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default MainLoader;
