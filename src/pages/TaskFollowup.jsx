import React from "react";
import styles from "./TaskFollowup.module.css";

const TaskFollowup = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="flex items-center p-4">
          <div className="w-12"></div>
          <h1 className={styles.headerTitle}>Activities</h1>
          <div className="flex w-12 items-center justify-end">
            <button className={styles.addButton}>
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <h2 className={styles.sectionTitle}>Today</h2>
          <div className="space-y-3">
            <div className={styles.taskCard}>
              <div className={styles.taskIcon}>
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="font-medium">Call with Alex</p>
                <p className="text-sm text-gray-500">10:00 AM</p>
              </div>
            </div>
            <div className={styles.taskCard}>
              <div className={styles.taskIcon}>
                <span className="material-symbols-outlined">event</span>
              </div>
              <div>
                <p className="font-medium">Meeting with Sarah</p>
                <p className="text-sm text-gray-500">2:00 PM</p>
              </div>
            </div>
            <div className={styles.taskCard}>
              <div className={styles.taskIcon}>
                <span className="material-symbols-outlined">notifications</span>
              </div>
              <div>
                <p className="font-medium">Follow up with David</p>
                <p className="text-sm text-gray-500">4:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TaskFollowup;