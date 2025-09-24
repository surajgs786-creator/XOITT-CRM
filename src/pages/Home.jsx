import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [showMine, setShowMine] = useState(false);

  // Example data with 'mine' property
  const leads = [
    { name: "John Doe", subtitle: "Interested in HVAC systems", badge: "New", mine: true },
    { name: "Jane Smith", subtitle: "Follow-up on plumbing project", badge: "In Progress", mine: false },
    { name: "Ethan Carter", subtitle: "Proposal sent for renovation", badge: "Proposal Sent", mine: true }
  ];
  const activities = [
    { icon: "call", color: "text-blue-500", title: "Call with Alex", time: "10:00 AM", mine: true },
    { icon: "event", color: "text-yellow-500", title: "Meeting with Sarah", time: "2:00 PM", mine: false },
    { icon: "notifications", color: "text-green-500", title: "Follow up with David", time: "4:00 PM", mine: true }
  ];
  const urgent = [
    { icon: "warning", title: "Call with CEO", time: "Today, 9:00 AM", mine: true },
    { icon: "priority_high", title: "Submit project report", time: "Due: Today, 5:00 PM", mine: false },
    { icon: "error", title: "Resolve client issue", time: "ASAP", mine: true }
  ];

  return (
    <div className={styles.container}>
      <div className="flex justify-end p-4">
        <label className="flex items-center cursor-pointer select-none">
          <span className="mr-3 text-sm font-medium text-zinc-700">My Items</span>
          <div className="relative">
            <input
              type="checkbox"
              checked={showMine}
              onChange={() => setShowMine((v) => !v)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-zinc-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
          </div>
          <span className="ml-3 text-xs text-zinc-500">{showMine ? "ON" : "OFF"}</span>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Leads Widget */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-primary">Leads</h2>
          <div className="space-y-4">
            {leads.filter(l => !showMine || l.mine).map((lead, idx) => (
              <div key={idx} className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">{lead.name}</p>
                  <p className="text-sm text-zinc-500">{lead.subtitle}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${lead.badge === "New" ? "bg-blue-100 text-blue-700" : lead.badge === "In Progress" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{lead.badge}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Task Followup Widget */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-primary">Activities</h2>
          <div className="space-y-4">
            {activities.filter(a => !showMine || a.mine).map((activity, idx) => (
              <div key={idx} className="border rounded-lg p-4 flex items-center gap-4">
                <span className={`material-symbols-outlined ${activity.color}`}>{activity.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-zinc-900 dark:text-white">{activity.title}</p>
                  <p className="text-sm text-zinc-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Urgent Activities Widget */}
        <div className="bg-white dark:bg-red-900 rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-red-600 dark:text-red-300">Urgent Activities</h2>
          <div className="space-y-4">
            {urgent.filter(u => !showMine || u.mine).map((item, idx) => (
              <div key={idx} className="border border-red-300 dark:border-red-700 rounded-lg p-4 flex items-center gap-4 bg-red-50 dark:bg-red-800">
                <span className="material-symbols-outlined text-red-500">{item.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-zinc-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-red-700 dark:text-red-300">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;