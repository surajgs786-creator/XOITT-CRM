// Import node module libraries
import { useContext, ReactNode } from 'react';
import { AccordionContext, useAccordionButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CustomToggleProps {
  children: ReactNode;
  eventKey: string;
  className?: string;
  href?: string;
  dataBsTarget?: string;
  ariaControls?: string;
  icon?: ReactNode;
  callback?: (eventKey: string) => void;
}

export default function CustomToggle({
  children,
  eventKey,
  icon,
  callback,
}: CustomToggleProps) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Nav.Item as="li" className="dropdown">
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          decoratedOnClick(e);
        }}
        className={`dropdown-toggle ${isCurrentEventKey ? 'active' : ''}`}
        data-bs-toggle="dropdown"
        aria-expanded={isCurrentEventKey}
      >
        <span className="nav-icon">{icon}</span>
        <span className="text">{children}</span>
      </Link>
    </Nav.Item>
  );
}

export function CustomToggleLevel2({
  children,
  eventKey,
  className = 'nav-link',
  href = '#',
  dataBsTarget = '',
  ariaControls = '',
}: CustomToggleProps) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey);
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to={href}
      className={`${className} ${isCurrentEventKey ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault(); // Prevent default link behavior
        decoratedOnClick(e);
      }}
      data-bs-toggle="collapse"
      data-bs-target={dataBsTarget}
      aria-expanded={isCurrentEventKey}
      aria-controls={ariaControls}
    >
      <span>{children}</span>
    </Link>
  );
}
