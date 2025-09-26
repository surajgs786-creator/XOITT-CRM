import React, { useState } from 'react';
import DashboardStats from './DashboardStats/DashboardStats';
import TaskProgress from './TaskProgress/TaskProgress';
import ActiveProject from './ActiveProject/ActiveProject';
import UpcomingMeetingSlider from './UpcomingMeetingSlider/UpcomingMeetingSlider';
import ActivityLog from './ActivityLog/ActivityLog';
import TaskList from './TaskList/TaskList';
import { Col, Row } from 'react-bootstrap';
import './dashboard.scss';

const Dashboard: React.FC = () => {
  const [showData, setShowData] = useState(false);

  const toggleShowData = () => {
    setShowData((prev) => !prev);
  };

  return (
    <>
      <Row className="g-6 mb-6">
        <Col>
          <div className="d-flex align-items-center justify-content-end" style={{ minHeight: 48 }}>
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
              <span className="ms-2 small text-muted">{showData ? 'ON' : 'OFF'}</span>
            </label>
          </div>
        </Col>
      </Row>
      <Row className="g-6 mb-6">
  <DashboardStats />
      </Row>
      <Row className="g-6 mb-6">
        <Col xl={5} style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
            <TaskProgress />
          </div>
        </Col>
        <Col xl={4} style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
            <ActiveProject />
          </div>
        </Col>
        <Col xl={3} style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
            <UpcomingMeetingSlider />
          </div>
        </Col>
      </Row>
      <Row className="g-6 mb-6">
        <Col xl={6}>
          <ActivityLog />
        </Col>
        <Col xl={6}>
          <TaskList />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
