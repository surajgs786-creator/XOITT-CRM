
'use client'
//import node module libraries


import { Row, Col, Button } from 'react-bootstrap';
import { IconPlus } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';// Import useNavigate

//import custom components
import Flex from 'src/components/common/Flex';

const LeadsHeader = () => {
  const router = useRouter(); // Initialize useNavigate

  const handleNewLeadClick = () => {
    router.push('/leads/new'); // Navigate to the New Lead page
  };

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
              onClick={handleNewLeadClick} // Add onClick handler
              variant="dark"
              className="d-md-flex align-items-center gap-2"
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
