'use client';
//import node modules libraries

//import required data files

import { leadData } from 'src/data/LeadData';
import TableContainer from '../common/TableContainer';
import { ContactListColumns } from './ContactsColumnDefinitions';

const ContactContainer = () => {
  return <TableContainer data={leadData} columnDef={ContactListColumns} />;
};

export default ContactContainer;
