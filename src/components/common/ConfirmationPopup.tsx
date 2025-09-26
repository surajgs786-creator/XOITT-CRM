import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ConfirmationPopupProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
  title:string;
  confirmButtonText:string;
  confirmButtonVariant?: string;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ message, onConfirm, onCancel, isOpen ,title,confirmButtonText}) => {
  return (
    <Modal show={isOpen} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationPopup;