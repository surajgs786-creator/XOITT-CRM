//import node module libraries
import { Fragment } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { Badge, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

//import custom types
import { ProductListType } from 'src/types/EcommerceType';

//import custom components
import DasherTippy from 'src/components/common/DasherTippy';
import Checkbox from 'src/components/table/Checkbox';

export const productListColumns: ColumnDef<ProductListType>[] = [
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
  // File removed as part of Ecommerce removal
];
