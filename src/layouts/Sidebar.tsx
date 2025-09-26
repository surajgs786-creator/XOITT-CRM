// Import node module libraries
import React, { Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Accordion,
  Badge,
  Image,
  ListGroup,
  Nav,
} from 'react-bootstrap';

// Import custom types
import { MenuItemType } from '../types/menuTypes';

// Import custom components
import { Avatar } from '../components/common/Avatar';
import CustomToggle, { CustomToggleLevel2 } from './SidebarMenuToggle';

// Import required routes
import { getAssetPath } from '../helper/assetPath';
import { DashboardMenu } from '../routes/DashboardRoute';

interface SidebarProps {
  hideLogo: boolean;
  containerId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ hideLogo = false, containerId }) => {
  const location = useLocation(); // React Router's hook to get the current path

  // Generate Link
  const generateLink = (item: MenuItemType) => {
    return (
      <Link
        to={`${item.link}`}
        className={`nav-link ${location.pathname === `/${item.link}` ? 'active' : ''}`}
      >
        <span className="text">{item.name}</span>
        {item.badge && (
          <Badge
            className="ms-1"
            bg={item.badgecolor ? item.badgecolor : 'primary'}
          >
            {item.badge}
          </Badge>
        )}
      </Link>
    );
  };

  return (
    <div id={containerId}>
      <div>
        {hideLogo || (
          <div className="brand-logo">
            <Link
              to="/"
              className="d-none d-md-flex align-items-center gap-2"
            >
              <Image
                src={getAssetPath('/images/brand/logo/logo-icon.svg')}
                alt=""
              />
              <span className="fw-bold fs-4 site-logo-text">XOITT</span>
            </Link>
          </div>
        )}

        {/* Sidebar Dashboard Menu */}
        <Accordion
          defaultActiveKey="0"
          as="ul"
          bsPrefix="navbar-nav flex-column"
        >
          {DashboardMenu.map(function (menu, index) {
            if (menu.grouptitle) {
              return (
                // Group Title
                <Nav.Item key={index} as="li">
                  <div className="nav-heading">{menu.title}</div>
                  <hr className="mx-5 nav-line mb-1" />
                </Nav.Item>
              );
            } else {
              if (menu.children) {
                return (
                  <Fragment key={index}>
                    {/* Dropdown Parent Menu */}
                    <CustomToggle eventKey={index.toString()} icon={menu.icon}>
                      {menu.title}
                    </CustomToggle>
                    <Accordion.Collapse eventKey={index.toString()}>
                      <ListGroup as="ul" className="dropdown-menu flex-column">
                        {menu.children.map(
                          function (menuLevel1Item, menuLevel1Index) {
                            if (menuLevel1Item.children) {
                              return (
                                <ListGroup.Item
                                  as="li"
                                  bsPrefix="nav-item"
                                  key={menuLevel1Index}
                                >
                                  {/* First level menu started */}
                                  <Accordion
                                    defaultActiveKey="0"
                                    bsPrefix="navbar-nav flex-column"
                                  >
                                    <CustomToggleLevel2
                                      eventKey={'0'}
                                      href={'#link'}
                                    >
                                      {menuLevel1Item.title}
                                    </CustomToggleLevel2>
                                    <Accordion.Collapse eventKey={'0'}>
                                      <ListGroup
                                        as="ul"
                                        bsPrefix=""
                                        className="nav flex-column"
                                      >
                                        {/* Second level menu started */}
                                        {menuLevel1Item.children.map(
                                          function (
                                            menuLevel2Item,
                                            menuLevel2Index,
                                          ) {
                                            if (menuLevel2Item.children) {
                                              return (
                                                <ListGroup.Item
                                                  as="li"
                                                  bsPrefix="nav-item"
                                                  key={menuLevel2Index}
                                                >
                                                  {/* Second level accordion menu started */}
                                                  <Accordion
                                                    defaultActiveKey="0"
                                                    className="navbar-nav flex-column"
                                                  >
                                                    <CustomToggleLevel2
                                                      eventKey={'0'}
                                                    >
                                                      {menuLevel2Item.title}
                                                    </CustomToggleLevel2>
                                                    <Accordion.Collapse
                                                      eventKey={'0'}
                                                      bsPrefix="nav-item"
                                                    >
                                                      <ListGroup
                                                        as="ul"
                                                        bsPrefix=""
                                                        className="nav flex-column"
                                                      >
                                                        {/* Third level menu started */}
                                                        {menuLevel2Item.children.map(
                                                          function (
                                                            menuLevel3Item,
                                                            menuLevel3Index,
                                                          ) {
                                                            return (
                                                              <ListGroup.Item
                                                                key={
                                                                  menuLevel3Index
                                                                }
                                                                as="li"
                                                                bsPrefix="nav-item"
                                                              >
                                                                <Link
                                                                  to={
                                                                    menuLevel3Item.link?.toString() ||
                                                                    `/${menuLevel3Item.link}`
                                                                  }
                                                                  className={`nav-link ${
                                                                    location.pathname ===
                                                                    `/${menuLevel3Item.link}`
                                                                      ? 'active'
                                                                      : ''
                                                                  }`}
                                                                >
                                                                  {
                                                                    menuLevel3Item.name
                                                                  }
                                                                </Link>
                                                              </ListGroup.Item>
                                                            );
                                                          },
                                                        )}
                                                        {/* End of third level menu */}
                                                      </ListGroup>
                                                    </Accordion.Collapse>
                                                  </Accordion>
                                                  {/* End of second level accordion */}
                                                </ListGroup.Item>
                                              );
                                            } else {
                                              return (
                                                <ListGroup.Item
                                                  key={menuLevel2Index}
                                                  as="li"
                                                  bsPrefix="nav-item"
                                                >
                                                  {generateLink(menuLevel2Item)}
                                                </ListGroup.Item>
                                              );
                                            }
                                          },
                                        )}
                                        {/* End of second level menu */}
                                      </ListGroup>
                                    </Accordion.Collapse>
                                  </Accordion>
                                  {/* End of first level menu */}
                                </ListGroup.Item>
                              );
                            } else {
                              return (
                                <ListGroup.Item
                                  as="li"
                                  bsPrefix="nav-item"
                                  key={menuLevel1Index}
                                >
                                  {/* First level menu items */}
                                  <Link
                                    to={`/${menuLevel1Item?.link}`}
                                    className={`nav-link ${
                                      location.pathname === `/${menuLevel1Item.link}`
                                        ? 'active'
                                        : ''
                                    }`}
                                  >
                                    {menuLevel1Item.name}
                                  </Link>
                                  {/* End of first level menu items */}
                                </ListGroup.Item>
                              );
                            }
                          },
                        )}
                      </ListGroup>
                    </Accordion.Collapse>
                    {/* End of main menu / menu level 1 / root items */}
                  </Fragment>
                );
              } else {
                return (
                  <Nav.Item as="li" key={index}>
                    <Link
                      to={menu.link ? `${menu.link}` : '#'}
                      className={`nav-link ${
                        location.pathname === menu.link ? 'active' : ''
                      }`}
                    >
                      <span className="nav-icon">{menu.icon}</span>
                      <span className="text">{menu.title}</span>
                    </Link>
                  </Nav.Item>
                );
              }
            }
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
