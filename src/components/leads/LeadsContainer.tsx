'use client';
//import node modules libraries

//import required data files
import { leadListColumns } from './LeadsColumnDefinitions';
import { leadData } from 'src/data/LeadData';
import TableContainer from '../common/TableContainer';

const LeadContainer = () => {
  return (
    <TableContainer data={leadData} columnDef={leadListColumns } />
  );
};

export default LeadContainer;
