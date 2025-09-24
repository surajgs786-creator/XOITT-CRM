import React from "react";
import styles from "./AfterSalesService.module.css";

const AfterSalesService = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>After Sales Service</h1>
      <div className={styles.serviceCard}>
        <p className={styles.serviceTitle}>Service A</p>
        <p className={styles.serviceDescription}>Description of Service A</p>
      </div>
      <div className={styles.serviceCard}>
        <p className={styles.serviceTitle}>Service B</p>
        <p className={styles.serviceDescription}>Description of Service B</p>
      </div>
    </div>
  );
};

export default AfterSalesService;