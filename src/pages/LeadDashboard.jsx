import React, { useState } from "react";
import styles from "./LeadDashboard.module.css";

const LeadDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [deal, setDeal] = useState({ client: "", details: "", status: "Pending" });

  const handleChange = (e) => {
    setDeal({ ...deal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Deal added: " + JSON.stringify(deal, null, 2));
    setShowModal(false);
    setDeal({ client: "", details: "", status: "Pending" });
  };

  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center mb-4">
        <h1 className={styles.header}>Lead Dashboard</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={() => setShowModal(true)}
        >
          Add Deal
        </button>
      </div>
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
            <h2 className="text-xl font-bold mb-4 text-primary">Add New Deal</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium" htmlFor="client">Client Name</label>
                <input
                  type="text"
                  id="client"
                  name="client"
                  value={deal.client}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="details">Deal Details</label>
                <input
                  type="text"
                  id="details"
                  name="details"
                  value={deal.details}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={deal.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-primary"
                >
                  <option value="Pending">Pending</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Won">Won</option>
                  <option value="Lost">Lost</option>
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
                  Add Deal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadDashboard;