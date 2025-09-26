'use client';
//import node modules libraries
import {
  Row,
  Col,
  Card,
  CardHeader,
  FormControl,
  Button
} from 'react-bootstrap';

//import custom components
import Flex from 'src/components/common/Flex';
import TanstackTable from 'src/components/table/TanstackTable';

//import required data files
interface TableContainerProps {
    data: any[];
    columnDef: any[];
}

const TableContainer = (props:TableContainerProps) => {
const { data, columnDef } = props;
  return (
    <Row>
      <Col>
        <Card className="card-lg" id="productList">
          <CardHeader className="border-bottom-0">
            <Row className="g-4">
              <Col lg={4}>
                <FormControl
                  type="search"
                  className="listjs-search"
                  placeholder="Search"
                />
              </Col>
              <Col lg={8} className="d-flex justify-content-end">
                <Flex alignItems="center" breakpoint="lg" className="gap-2">
                  <div>
                    <Button variant="white">Filters</Button>
                  </div>
                </Flex>
              </Col>
            </Row>
          </CardHeader>
          <TanstackTable
            data={data}
            columns={columnDef}
            pagination={true}
            isSortable
          />
        </Card>
      </Col>
    </Row>
  );
};

export default TableContainer;
