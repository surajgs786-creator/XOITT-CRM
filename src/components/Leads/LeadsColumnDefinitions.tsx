// Import libraries
import { Fragment, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { Badge, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import custom types
import { LeadListType } from '../../types/LeadType';

// Import custom components
import DasherTippy from '../common/DasherTippy';
import Checkbox from '../table/Checkbox';

export const leadListColumns: ColumnDef<LeadListType>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      return (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      );
    },
    cell: ({ row }) => (
      <div>
        <Checkbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Lead Name',
  },
  {
    accessorKey: 'company',
    header: 'Company',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'source',
    header: 'Lead Source',
  },
  {
    accessorKey: 'owner',
    header: 'Lead Owner',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const statusText = row.original.status;

      // Define a mapping for status to badge styles
      const statusStyles: Record<string, { bg: string; text: string }> = {
        Active: { bg: 'success-subtle', text: 'success-emphasis' },
        New: { bg: 'primary-subtle', text: 'primary-emphasis' },
        Contacted: { bg: 'info-subtle', text: 'info-emphasis' },
        Qualified: { bg: 'warning-subtle', text: 'warning-emphasis' },
        Lost: { bg: 'danger-subtle', text: 'danger-emphasis' },
      };

      // Default to a neutral style if the status is not in the mapping
      const { bg, text } = statusStyles[statusText] || {
        bg: 'secondary-subtle',
        text: 'secondary-emphasis',
      };

      return (
        <Badge bg={bg} text={text} pill={true}>
          {statusText}
        </Badge>
      );
    },
  },
  {
    accessorKey: '',
    header: 'Action',
    cell: () => {
      const navigate = useNavigate(); // Initialize useNavigate
      const [showDeleteModal, setShowDeleteModal] = useState(false);

      const handleViewClick = () => {
        navigate('/leadDetails?action=View'); // Navigate to the View page
      };

      const handleEditClick = () => {
        navigate('/leadDetails?action=Edit'); // Navigate to the Edit page
      };

      const handleDeleteClick = () => {
        setShowDeleteModal(true); // Show the delete confirmation modal
      };

      const handleCloseModal = () => {
        setShowDeleteModal(false); // Close the modal
      };

      const handleConfirmDelete = () => {
        console.log('Item deleted'); // Add your delete logic here
        setShowDeleteModal(false); // Close the modal after deletion
      };

      return (
        <Fragment>
          <DasherTippy content="View">
            <Button
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
              onClick={handleViewClick}
            >
              <IconEye size={16} />
              <div id="eyeThree" className="d-none">
                <span>View</span>
              </div>
            </Button>
          </DasherTippy>
          <DasherTippy content="Edit">
            <Button
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
              onClick={handleEditClick}
            >
              <IconEdit size={16} />
              <div id="editTwo" className="d-none">
                <span>Edit</span>
              </div>
            </Button>
          </DasherTippy>
          <DasherTippy content="Delete">
            <Button
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
              onClick={handleDeleteClick}
            >
              <IconTrash size={16} />
              <div id="trashThree" className="d-none">
                <span>Delete</span>
              </div>
            </Button>
          </DasherTippy>

          {/* Delete Confirmation Modal */}
          <Modal show={showDeleteModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleConfirmDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      );
    },
  },
];
