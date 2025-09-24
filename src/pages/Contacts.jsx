import React, { useState } from "react";
import ContactProfile from "./ContactProfile";
import styles from "./Contacts.module.css";

const initialContacts = [
  { id: 1, name: "Client X", subtitle: "Follow-up required" },
  { id: 2, name: "Client Y", subtitle: "Meeting scheduled" }
];

const Contacts = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(initialContacts);

  const filteredContacts = contacts.filter(
    c => c.name.toLowerCase().includes(search.toLowerCase()) || c.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contacts</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-3 py-2 border rounded w-1/2 focus:outline-none focus:ring focus:border-primary"
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={() => setShowProfile(true)}
        >
          Add Contact
        </button>
      </div>
      <ul className={styles.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={styles.listItem}>
            <div className="flex items-center">
              <div className="flex-1">  
                <p className={styles.listItemTitle}>{contact.name}</p>
                <p className={styles.listItemSubtitle}>{contact.subtitle}</p>
              </div>
              <button
                className="ml-4 px-2 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600"
                style={{ marginLeft: "auto" }}
                onClick={() => setEditId(contact.id)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
  {showProfile && <ContactProfile onClose={() => setShowProfile(false)} />}
      {editId !== null && (
        <ContactProfile
          onClose={() => setEditId(null)}
          contact={contacts.find(c => c.id === editId)}
        />
      )}
    </div>
  );
};

export default Contacts;