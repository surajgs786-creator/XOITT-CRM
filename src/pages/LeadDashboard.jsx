import React from "react";
import styles from "./LeadDashboard.module.css";

const LeadDashboard = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Leads</h1>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600">
            <span className="material-symbols-outlined">call</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <div>
            <p className={styles.cardTitle}>John Doe</p>
            <p className={styles.cardSubtitle}>Interested in HVAC systems</p>
          </div>
          <span className={styles.cardBadge}>New</span>
        </div>
        <div className={styles.card}>
          <div>
            <p className={styles.cardTitle}>Jane Smith</p>
            <p className={styles.cardSubtitle}>Follow-up on plumbing project</p>
          </div>
          <span className={styles.cardBadge}>In Progress</span>
        </div>
        <div className={styles.card}>
          <div>
            <p className={styles.cardTitle}>Ethan Carter</p>
            <p className={styles.cardSubtitle}>Proposal sent for renovation</p>
          </div>
          <span className={styles.cardBadge}>Proposal Sent</span>
        </div>
      </main>
    </div>
  );
};

export default LeadDashboard;