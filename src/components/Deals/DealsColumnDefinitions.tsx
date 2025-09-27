import { ColumnDef } from '@tanstack/react-table';
import { DealType } from '../../types/DealType';

export const dealsColumns: ColumnDef<DealType>[] = [
  { accessorKey: 'name', header: 'Deal Name' },
  { accessorKey: 'stage', header: 'Stage' },
  { accessorKey: 'value', header: 'Value' },
  { accessorKey: 'owner', header: 'Owner' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'createdAt', header: 'Created At' },
];
