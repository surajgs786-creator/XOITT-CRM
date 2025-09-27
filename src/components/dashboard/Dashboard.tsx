import React, { useState, Suspense, lazy } from 'react';
import DashboardStats from './DashboardStats/DashboardStats';
import { Col, Row, Spinner } from 'react-bootstrap';
import './dashboard.scss';

// Lazy load heavy components that use Chart.js and Swiper
const TaskProgress = lazy(() => import('./TaskProgress/TaskProgress'));
const ActiveProject = lazy(() => import('./ActiveProject/ActiveProject'));
const UpcomingMeetingSlider = lazy(() => import('./UpcomingMeetingSlider/UpcomingMeetingSlider'));
const ActivityLog = lazy(() => import('./ActivityLog/ActivityLog'));
const TaskList = lazy(() => import('./TaskList/TaskList'));

// Loading component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
    <Spinner animation="border" role="status" size="sm">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

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
        <Col xl={4} style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
            <Suspense fallback={<LoadingSpinner />}>
              <TaskProgress />
            </Suspense>
          </div>
        </Col>
        <Col xl={4} style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
            <Suspense fallback={<LoadingSpinner />}>
              <ActiveProject />
            </Suspense>
          </div>
        </Col>
        <Col xl={4} style={{ display: 'flex', flexDirection: 'column', maxHeight: 600 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
            <Suspense fallback={<LoadingSpinner />}>
              <UpcomingMeetingSlider />
            </Suspense>
          </div>
        </Col>
      </Row>
      <Row className="g-6 mb-6">
        <Col xl={6}>
          <Suspense fallback={<LoadingSpinner />}>
            <ActivityLog />
          </Suspense>
        </Col>
        <Col xl={6}>
          <Suspense fallback={<LoadingSpinner />}>
            <TaskList />
          </Suspense>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
