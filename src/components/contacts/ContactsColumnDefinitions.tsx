'use client';   
//import node module libraries


import { Fragment, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { Badge, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

//import custom types
import { LeadListType } from 'src/types/LeadType';

//import custom components
import DasherTippy from 'src/components/common/DasherTippy';
import Checkbox from 'src/components/table/Checkbox';
import ConfirmationPopup from 'src/components/common/ConfirmationPopup';

export const ContactListColumns: ColumnDef<LeadListType>[] = [
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
      const [showDeleteModal, setShowDeleteModal] = useState(false);
const router = useRouter();
      const handleDeleteClick = () => {
        console.log('Delete button clicked');
        setShowDeleteModal(true);
      };

      const handleCloseModal = () => {
        setShowDeleteModal(false);
      };

      const handleConfirmDelete = () => {
        // Add your delete logic here
        console.log('Item deleted');
        setShowDeleteModal(false);
      };

      return (
        <Fragment>
          <DasherTippy content="View">
            <Button
              
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
                onClick={() => router.push('/customers/view')}
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
              onClick={() => router.push('/customers/edit')}
            >
              <IconEdit size={16} />
              <div id="editTwo" className="d-none">
                <span>Edit</span>
              </div>
            </Button>
          </DasherTippy>
          <DasherTippy content="Delete">
            <Button
              onClick={handleDeleteClick}
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
            >
              <IconTrash size={16} />
              <div id="trashThree" className="d-none">
                <span>Delete</span>
              </div>
            </Button>
          </DasherTippy>

          {/* Reusable Confirmation Modal */}
          <ConfirmationPopup
            isOpen={showDeleteModal}
            onCancel={handleCloseModal}
            onConfirm={handleConfirmDelete}
            title="Confirm Delete"
            message="Are you sure you want to delete this item? This action cannot be undone."
            confirmButtonText="Delete"
            confirmButtonVariant="danger"
          />
        </Fragment>
      );
    },
  },
];
