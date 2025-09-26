//import node module libraries
import { Fragment } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { Badge, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

//import custom types
import { LeadListType } from 'src/types/LeadType';

//import custom components
import DasherTippy from 'src/components/common/DasherTippy';
import Checkbox from 'src/components/table/Checkbox';

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
      return (
        <Fragment>
          <DasherTippy content="View">
            <Button
              href=""
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
            >
              <IconEye size={16} />
              <div id="eyeThree" className="d-none">
                <span>View</span>
              </div>
            </Button>
          </DasherTippy>
          <DasherTippy content="Edit">
            <Button
              href=""
              variant="ghost btn-icon"
              size="sm"
              className="rounded-circle"
            >
              <IconEdit size={16} />
              <div id="editTwo" className="d-none">
                <span>Edit</span>
              </div>
            </Button>
          </DasherTippy>
          <DasherTippy content="Delete">
            <Button
              href=""
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
        </Fragment>
      );
    },
  },
];
