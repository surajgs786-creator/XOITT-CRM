import React from "react";
import styles from "./LeadDashboard2.module.css";

const LeadDashboard2 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Lead Dashboard 2</h1>
      <div className={styles.card}>
        <div>
          <p className={styles.cardTitle}>Client A</p>
          <p className={styles.cardSubtitle}>Needs consultation</p>
        </div>
        <span className={styles.cardBadge}>Pending</span>
      </div>
      <div className={styles.card}>
        <div>
          <p className={styles.cardTitle}>Client B</p>
          <p className={styles.cardSubtitle}>Proposal sent</p>
        </div>
        <span className={styles.cardBadge}>Proposal Sent</span>
      </div>
    </div>
  );
};

export default LeadDashboard2;