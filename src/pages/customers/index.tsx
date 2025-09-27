import React, { useState } from 'react';
import './index.scss';
import CustomerContainer from '../../components/Customers/CustomerContainer';

const CustomersPage: React.FC = () => {
  return (
    <div className="customers-page-wrapper">
      <CustomerContainer />
    </div>
  );
};

export default CustomersPage;
