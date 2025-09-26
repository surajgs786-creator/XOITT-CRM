import { Fragment } from 'react';
import { Metadata } from 'next';
import CustomerDetails from 'src/components/contacts/CustomerDetails';

export const metadata: Metadata = {
  title: 'edit customer | XOITT CRM',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const EditCustomer = () => {
  return (
    <Fragment>
      <CustomerDetails mode='Edit'/>
    </Fragment>
  );
};

export default EditCustomer;
