import { Fragment } from 'react';
import { Metadata } from 'next';
import NewLead from 'src/components/leads/NewLead';

export const metadata: Metadata = {
  title: 'new lead | XOITT CRM',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const Leads = () => {
  return (
    <Fragment>
      <NewLead />
    </Fragment>
  );
};

export default Leads;
