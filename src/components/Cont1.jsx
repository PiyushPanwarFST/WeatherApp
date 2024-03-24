import React from "react";
import styles from "./Cont1.module.css";

const Cont1 = ({ currentData }) => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const time = currentDate.toLocaleTimeString();

  return (
    <div>
      <div className={styles.pic}>
        <img
          src="https://cdn.pixabay.com/photo/2018/05/20/22/55/thunderstorm-3417042_1280.jpg"
          alt=""
        />
        <div className={styles.temp}>{currentData.temp + " °C"}</div>
        <div className={styles.city}>{currentData.city}</div>
        <div className={styles.date}>
          <div>Time: {time}</div>
          <div className={styles.day}>
            <div>{`${day} & ${date}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont1;
