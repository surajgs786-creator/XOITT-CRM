import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { DealType } from '../../types/DealType';

interface AddDealModalProps {
  show: boolean;
  onClose: () => void;
  onAdd: (deal: DealType) => void;
}

const AddDealModal: React.FC<AddDealModalProps> = ({ show, onClose, onAdd }) => {
  const [deal, setDeal] = useState<Partial<DealType>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeal({ ...deal, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (deal.name && deal.stage && deal.value && deal.owner && deal.status && deal.createdAt) {
      onAdd(deal as DealType);
      setDeal({});
      onClose();
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Deal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Deal Name</Form.Label>
            <Form.Control name="name" value={deal.name || ''} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stage</Form.Label>
            <Form.Control name="stage" value={deal.stage || ''} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Value</Form.Label>
            <Form.Control name="value" type="number" value={deal.value || ''} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Owner</Form.Label>
            <Form.Control name="owner" value={deal.owner || ''} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control name="status" value={deal.status || ''} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Created At</Form.Label>
            <Form.Control name="createdAt" value={deal.createdAt || ''} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Add Deal</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDealModal;
