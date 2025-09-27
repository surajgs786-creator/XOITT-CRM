

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './index.scss';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided, DroppableStateSnapshot, DraggableStateSnapshot } from '@hello-pangea/dnd';

type Deal = {
  id: string;
  title: string;
  customer: string;
  value: number;
  assigned: string;
  stage: string;
};

const initialDeals: Deal[] = [
  { id: '1', title: 'Deal A', customer: 'ABC Corp', value: 12000, assigned: 'Rajesh Kumar', stage: 'New' },
  { id: '2', title: 'Deal B', customer: 'XYZ Ltd', value: 8500, assigned: 'Priya Singh', stage: 'New' },
  { id: '3', title: 'Deal C', customer: 'LMN Inc', value: 15000, assigned: 'Deepak Nair', stage: 'In Progress' },
  { id: '4', title: 'Deal D', customer: 'DEF Corp', value: 22000, assigned: 'Suresh Babu', stage: 'Won' },
  { id: '5', title: 'Deal E', customer: 'PQR Ltd', value: 6000, assigned: 'Meera Thomas', stage: 'Lost' },
  { id: '6', title: 'Deal F', customer: 'RST Ltd', value: 9000, assigned: 'Anjali Menon', stage: 'Delayed' },
];

const stages = ['New', 'In Progress', 'Delayed', 'Won', 'Lost'] as const;
type Stage = typeof stages[number];

type GroupedDeals = Record<Stage, Deal[]>;

function groupDealsByStage(deals: Deal[]): GroupedDeals {
  const grouped = {} as GroupedDeals;
  stages.forEach((stage) => (grouped[stage] = []));
  deals.forEach((deal) => grouped[deal.stage as Stage].push(deal));
  return grouped;
}


const DealsPage: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    customer: '',
    value: '',
    assigned: '',
  });

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceStage = source.droppableId as Stage;
    const destStage = destination.droppableId as Stage;
    const grouped = groupDealsByStage(deals);
    const [moved] = grouped[sourceStage].splice(source.index, 1);
    moved.stage = destStage;
    grouped[destStage].splice(destination.index, 0, moved);
    setDeals(stages.flatMap((stage) => grouped[stage]));
  };

  const groupedDeals = groupDealsByStage(deals);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setForm({ title: '', customer: '', value: '', assigned: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.customer || !form.value || !form.assigned) return;
    const newDeal: Deal = {
      id: (Date.now() + Math.random()).toString(),
      title: form.title,
      customer: form.customer,
      value: Number(form.value),
      assigned: form.assigned,
      stage: 'New',
    };
    setDeals([newDeal, ...deals]);
    handleClose();
  };

  return (
    <div className="deals-kanban-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Deals</h2>
        <Button variant="primary" onClick={handleShow} data-testid="add-deal-btn">+ New Deal</Button>
      </div>
      <div className="kanban-container">
        <DragDropContext onDragEnd={onDragEnd}>
          {stages.map((stage) => (
            <Droppable droppableId={stage} key={stage}>
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <div
                  className={`kanban-column${snapshot.isDraggingOver ? ' dragging-over' : ''}`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="column-header">{stage}</div>
                  <div className="deal-cards">
                    {groupedDeals[stage].map((deal, idx) => (
                      <Draggable draggableId={deal.id} index={idx} key={deal.id}>
                        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                          <div
                            className={`deal-card${snapshot.isDragging ? ' dragging' : ''}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="deal-title">{deal.title}</div>
                            <div className="deal-details">
                              Customer: {deal.customer}<br />Value: ${deal.value.toLocaleString()}
                            </div>
                            <div className="assigned-to">Assigned To: {deal.assigned}</div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Deal</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="dealTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="Enter deal title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dealCustomer">
              <Form.Label>Customer</Form.Label>
              <Form.Control
                type="text"
                name="customer"
                value={form.customer}
                onChange={handleChange}
                required
                placeholder="Enter customer name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dealValue">
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="number"
                name="value"
                value={form.value}
                onChange={handleChange}
                required
                min={0}
                placeholder="Enter deal value"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dealAssigned">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control
                type="text"
                name="assigned"
                value={form.assigned}
                onChange={handleChange}
                required
                placeholder="Enter assignee name"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Deal
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default DealsPage;
