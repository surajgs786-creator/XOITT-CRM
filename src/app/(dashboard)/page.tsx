import { Fragment } from 'react';
import { Metadata } from 'next';
import { DashboardContainer } from 'src/components/dashboard/DashboardContainer';

export const metadata: Metadata = {
  title: 'Dashboard | XOITT CRM',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const HomePage = () => {
  return (
    <Fragment>
      <DashboardContainer />
    </Fragment>
  );
};

export default HomePage;
