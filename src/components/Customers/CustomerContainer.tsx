import React, { useState } from 'react';
import CustomerDetails from './CustomerDetails';

// Sample customer data type
export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
};

const initialCustomers: Customer[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '1234567890', company: 'Acme Corp' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', company: 'Beta Ltd' },
];

const CustomerContainer: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [selected, setSelected] = useState<Customer | null>(null);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold mb-0">Customers</h2>
        <button className="btn btn-primary" onClick={() => setSelected({ id: '', name: '', email: '', phone: '', company: '' })}>
          + Add Customer
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.company}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary" onClick={() => setSelected(c)}>
                    View / Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selected && (
        <CustomerDetails
          customer={selected}
          onClose={() => setSelected(null)}
          onSave={(customer) => {
            if (customer.id) {
              setCustomers((prev) => prev.map((c) => (c.id === customer.id ? customer : c)));
            } else {
              setCustomers((prev) => [
                { ...customer, id: (Date.now() + Math.random()).toString() },
                ...prev,
              ]);
            }
            setSelected(null);
          }}
        />
      )}
    </div>
  );
};

export default CustomerContainer;
