//import node modules libraries
import { useState } from 'react';
import { Button, Card, CardBody, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Swiper removed for custom logic

//import required data files
import { EventList } from '../../../data/DashboardData';
import { getAssetPath } from '../../../helper/assetPath';

import './UpcomingMeetingSlider.scss';

const UpcomingMeetingSlider = () => {

  const [current, setCurrent] = useState(0);
  const total = EventList.length;

  const goPrev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const goNext = () => setCurrent((prev) => (prev < total - 1 ? prev + 1 : prev));

  return (
    <Card className="card-lg mb-6">
      <CardBody>

        <div className="d-flex align-items-center justify-content-between mb-4 py-2 position-relative" style={{ zIndex: 2 }}>
          <h5 className="mb-1">Upcoming Meetings</h5>
          <div className="swiper-navigation">
            <button className="custom-swiper-prev" onClick={goPrev} type="button" aria-label="Previous">
              <FontAwesomeIcon icon={faChevronLeft} size="sm" />
            </button>
            <button className="custom-swiper-next" onClick={goNext} type="button" aria-label="Next">
              <FontAwesomeIcon icon={faChevronRight} size="sm" />
            </button>
          </div>
        </div>

        <div className="blog-swiper" style={{ width: '100%' }}>
          <Card className="border" style={{ width: '100%' }}>
            <CardBody>
              <div>
                <h4>{EventList[current].title}</h4>
                <div className="d-flex align-items-center gap-3 text-secondary">
                  <span>{EventList[current].date}</span>
                  <span>{EventList[current].time}</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-secondary mt-4">
                  <Image
                    src={getAssetPath('/images/svg/zoom.svg')}
                    alt=""
                  />
                  <span>Zoom</span>
                </div>
              </div>
              <div className="d-grid mt-4">
                <Button href="#" variant="primary">
                  Join
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>

      </CardBody>
    </Card>
  );
};

export default UpcomingMeetingSlider;
