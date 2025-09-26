import { Fragment } from 'react';
import { Metadata } from 'next';
import CustomerDetails from 'src/components/contacts/CustomerDetails';

export const metadata: Metadata = {
  title: 'view customer | XOITT CRM',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const ViewCustomer = () => {
  return (
    <Fragment>
      <CustomerDetails mode='View'/>
    </Fragment>
  );
};

export default ViewCustomer;
