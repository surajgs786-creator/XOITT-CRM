import { Fragment } from 'react';
import { Metadata } from 'next';
import CustomerDetails from 'src/components/contacts/CustomerDetails';

export const metadata: Metadata = {
  title: 'new customer | XOITT CRM',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const NewCustomer = () => {
  return (
    <Fragment>
      <CustomerDetails mode='New'/>
    </Fragment>
  );
};

export default NewCustomer;
