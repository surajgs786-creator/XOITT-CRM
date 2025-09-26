//import node modules libraries
import { Image, Offcanvas } from 'react-bootstrap';

//import custom components
import Sidebar from './Sidebar';

//import custom hooks
import useMenu from '../hooks/useMenu';
import { getAssetPath } from '../helper/assetPath';

const OffcanvasSidebar = () => {
  const { showMenu, toggleMenuHandler } = useMenu();

  return (
    <Offcanvas
      placement={'start'}
      show={showMenu}
      onHide={() => toggleMenuHandler(false)}
      backdrop={true}
      className="offcanvasNav offcanvas-start"
    >
      <Offcanvas.Header closeButton>
        <div className="d-flex align-items-center gap-2">
          <Image
            src={getAssetPath('/images/brand/logo/logo-icon.svg')}
            alt=""
          />
          <span className="fw-bold fs-4 site-logo-text">Dasher</span>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <Sidebar hideLogo />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasSidebar;
