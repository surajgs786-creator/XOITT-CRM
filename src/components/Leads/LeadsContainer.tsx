
//import required data files
import { leadListColumns } from './LeadsColumnDefinitions';
import { leadData } from 'src/data/LeadData';
import TableContainer from '../common/TableContainer';
import { Fragment } from 'react/jsx-runtime';
import LeadsHeader from './Leadsheader';

const LeadContainer = () => {
  return (
  <Fragment>
    <LeadsHeader />
    <TableContainer data={leadData} columnDef={leadListColumns} />
  </Fragment>
  );
};

export default LeadContainer;
