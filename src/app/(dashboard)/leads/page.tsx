import { Fragment } from 'react';
import { Metadata } from 'next';
import LeadContainer from 'src/components/leads/LeadsContainer';
import LeadsHeader from 'src/components/leads/Leadsheader';

export const metadata: Metadata = {
  title: 'leads | XOITT CRM',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const Leads = () => {
  return (
    <Fragment>
      <LeadsHeader />
      <LeadContainer />
    </Fragment>
  );
};

export default Leads;
