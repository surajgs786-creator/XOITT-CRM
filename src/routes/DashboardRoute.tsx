//import node modules libraries

import { v4 as uuidv4 } from 'uuid';
import {
  IconFiles,
  IconLayoutDashboard,
  IconShoppingBag,
  IconNews,
  IconFile,
  IconLock,
  IconTarget,
  IconTargetArrow,
  IconUsers,
} from '@tabler/icons-react';

//import custom type
import { MenuItemType } from '../types/menuTypes';
import { generateId } from 'src/helper/utils';

export const DashboardMenu: MenuItemType[] = [
  {
    id: uuidv4(),
    title: 'Dashboard',
    link: '/',
    icon: <IconLayoutDashboard size={20} strokeWidth={1.5} />, 
  },
  {
    id: uuidv4(),
    title: 'Sales',
    icon: <IconTargetArrow size={20} strokeWidth={1.5} />, 
    children: [
      {
        id: uuidv4(),
        name: 'Leads',
        link: 'leads',
      },
      {
        id: uuidv4(),
        name: 'Deals',
        link: 'deals',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Customers',
    icon: <IconUsers size={20} strokeWidth={1.5} />, 
    link: 'customers',
  },
  {
    id: uuidv4(),
    title: 'Auth',
    link: 'signin',
    icon: <IconLock size={20} strokeWidth={1.5} />,
  },
];
