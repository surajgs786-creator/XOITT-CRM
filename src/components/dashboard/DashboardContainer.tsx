'use client';

import { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap/esm';
import DashboardStats from './DashboardStats';
import TaskProgress from './TaskProgress';
import ActiveProject from './ActiveProject';
import UpcomingMeetingSlider from './UpcomingMeetingSlider';
import ActivityLog from './ActivityLog';
import TaskList from './TaskList';

export const DashboardContainer = () => {
  const [showData, setShowData] = useState(false);

  const toggleShowData = () => {
    setShowData((prev) => !prev);
  };

  return (
    <Fragment>
      <Row className="g-6 mb-6">
        <Col>
          <div
            className="d-flex align-items-center justify-content-end"
            style={{ minHeight: 48 }}
          >
            <label className="d-flex align-items-center cursor-pointer mb-0">
              <span className="me-2">My Data</span>
              <div style={{ position: 'relative', width: 44, height: 24 }}>
                <input
                  type="checkbox"
                  checked={showData}
                  onChange={toggleShowData}
                  className="form-check-input position-absolute top-0 start-0 w-100 h-100 opacity-0 m-0"
                  style={{ zIndex: 2 }}
                />
                <div
                  className={`bg-${showData ? 'success' : 'secondary'} rounded-pill w-100 h-100 position-absolute top-0 start-0`}
                  style={{ transition: 'background 0.2s' }}
                ></div>
                <div
                  className="bg-white rounded-circle position-absolute"
                  style={{
                    top: 2,
                    left: showData ? 22 : 2,
                    width: 20,
                    height: 20,
                    transition: 'left 0.2s',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                  }}
                ></div>
              </div>
              <span className="ms-2 small text-muted">
                {showData ? 'ON' : 'OFF'}
              </span>
            </label>
          </div>
        </Col>
      </Row>
      {/* Always show dashboard data, toggle only changes UI for now */}
      <>
        <Row className="g-6 mb-6">
          <DashboardStats myDataOnly={showData} />
        </Row>
        <Row className="g-6 mb-6">
          <Col
            xl={5}
            style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'stretch',
              }}
            >
              <TaskProgress myDataOnly={showData} />
            </div>
          </Col>
          <Col
            xl={4}
            style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'stretch',
              }}
            >
              <ActiveProject myDataOnly={showData} />
            </div>
          </Col>
          <Col
            xl={3}
            style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'stretch',
              }}
            >
              <UpcomingMeetingSlider myDataOnly={showData} />
            </div>
          </Col>
        </Row>

        <Row className="g-6 mb-6">
          <Col xl={6}>
            <ActivityLog myDataOnly={showData} />
          </Col>

          <Col xl={6}>
            <TaskList myDataOnly={showData} />
          </Col>
        </Row>
      </>
    </Fragment>
  );
};
