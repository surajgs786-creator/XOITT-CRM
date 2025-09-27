import React, { useState } from 'react';
import { DealsData } from '../../data/DealsData';
import { dealsColumns } from './DealsColumnDefinitions';
import DealsHeader from './DealsHeader';
import TanstackTable from '../table/TanstackTable';
import AddDealModal from './AddDealModal';

const DealsContainer = () => {
  const [deals, setDeals] = useState(DealsData);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddDeal = (deal) => {
    setDeals([...deals, { ...deal, id: `deal-${deals.length + 1}` }]);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Deals</h2>
        <button className="btn btn-dark d-md-flex align-items-center gap-2" onClick={() => setShowAddModal(true)}>
          Add Deal
        </button>
      </div>
      <TanstackTable data={deals} columns={dealsColumns} pagination />
      <AddDealModal show={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleAddDeal} />
    </div>
  );
};

export default DealsContainer;
