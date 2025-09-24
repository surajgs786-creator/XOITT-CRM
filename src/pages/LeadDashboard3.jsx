import React from "react";
import styles from "./LeadDashboard3.module.css";

const LeadDashboard3 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Lead Dashboard 3</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div>
            <p className={styles.listItemTitle}>Client X</p>
            <p className={styles.listItemSubtitle}>Follow-up required</p>
          </div>
        </li>
        <li className={styles.listItem}>
          <div>
            <p className={styles.listItemTitle}>Client Y</p>
            <p className={styles.listItemSubtitle}>Meeting scheduled</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeadDashboard3;