// import node module libraries
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'; // Updated for react-router-dom

// import helper utility file
import { capitalizedWord } from '../../helper/utils';

const DasherBreadcrumb = () => {
  const location = useLocation(); // Get the current path
  const navigate = useNavigate(); // For navigation
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col>
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item onClick={() => navigate('/')}>
                Home
              </Breadcrumb.Item>
              {pathSegments.map((segment, index) =>
                index === pathSegments.length - 1 ? (
                  <Breadcrumb.Item
                    as="li"
                    active
                    key={segment}
                    className="text-capitalize"
                  >
                    {capitalizedWord(segment)}
                  </Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item as="li" key={segment}>
                    <span
                      onClick={() =>
                        navigate(`/${pathSegments.slice(0, index + 1).join('/')}`)
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      {capitalizedWord(segment)}
                    </span>
                  </Breadcrumb.Item>
                ),
              )}
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DasherBreadcrumb;
