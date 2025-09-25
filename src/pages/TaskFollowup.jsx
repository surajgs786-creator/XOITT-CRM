import React, { useState } from "react";
import styles from "./TaskFollowup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCalendar, faBell, faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskFollowup = () => {
  const [showModal, setShowModal] = useState(false);
  const [activity, setActivity] = useState({ title: "", time: "", type: "call" });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Activity added: " + JSON.stringify(activity, null, 2));
    setShowModal(false);
    setActivity({ title: "", time: "", type: "call" });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="flex items-center p-4">
          <div className="w-12"></div>
          <h1 className={styles.headerTitle}>Activities</h1>
          <div className="flex w-12 items-center justify-end">
            <button className={styles.addButton} onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className={styles.sectionTitle}>Today</h2>
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
              onClick={() => setShowModal(true)}
            >
              Add Activity
            </button>
          </div>
          <div className="space-y-3">
            <div className={styles.taskCard}>
              <div className={styles.taskIcon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="font-medium">Call with Alex</p>
                <p className="text-sm text-gray-500">10:00 AM</p>
              </div>
            </div>
            <div className={styles.taskCard}>
              <div className={styles.taskIcon}>
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div>
                <p className="font-medium">Meeting with Sarah</p>
                <p className="text-sm text-gray-500">2:00 PM</p>
              </div>
            </div>
            <div className={styles.taskCard}>
              <div className={styles.taskIcon}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div>
                <p className="font-medium">Follow up with David</p>
                <p className="text-sm text-gray-500">4:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-2xl text-zinc-700 hover:text-red-500"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-primary">Add Activity</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium" htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={activity.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="time">Time</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={activity.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="type">Type</label>
                <select
                  id="type"
                  name="type"
                  value={activity.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                >
                  <option value="call">Call</option>
                  <option value="meeting">Meeting</option>
                  <option value="reminder">Reminder</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-zinc-300 dark:bg-zinc-700 text-zinc-900 dark:text-white rounded hover:bg-zinc-400 dark:hover:bg-zinc-600"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors"
                >
                  Add Activity
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskFollowup;