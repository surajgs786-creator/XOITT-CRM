//import node module libraries
import { Row, Col, Button } from 'react-bootstrap';
import { IconPlus } from '@tabler/icons-react';

//import custom components
import Flex from 'src/components/common/Flex';

const LeadsHeader = () => {
  return (
    <Row>
      <Col>
        <Flex
          justifyContent="between"
          alignItems="center"
          className="mb-8 w-100"
          breakpoint="md"
        >
          <div>
            <h1 className="mb-3 h2">Leads</h1>
          </div>
          <div>
            <Button
              href="#"
              variant="dark"
              className=" d-md-flex align-items-center gap-2"
            >
              <IconPlus size={18} />
              New Leads
            </Button>
          </div>
        </Flex>
      </Col>
    </Row>
  );
};

export default LeadsHeader;
