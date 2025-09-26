import { Fragment } from 'react';
import { Metadata } from 'next';
import ContactContainer from 'src/components/contacts/ContactsContainer';
import ContactsHeader from 'src/components/contacts/ContactsHeader';

export const metadata: Metadata = {
  title: 'Contacts | XOITT CRM',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const CustomersPage = () => {
  return (
    <Fragment>
      <ContactsHeader />
      <ContactContainer />
    </Fragment>
  );
};

export default CustomersPage;
