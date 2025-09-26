import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import Flex from '../common/Flex';

const NewLeadHeader = () => {
  return (
    <Flex direction="row" justifyContent="space-between">
      <h2 className="mb-4">Create Lead</h2>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="primary" type="submit" className="me-2">
          Save
        </Button>
        <Button variant="primary" type="submit">
          Save and New
        </Button>
      </div>
    </Flex>
  );
};

export default NewLeadHeader;
