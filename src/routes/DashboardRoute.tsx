//import node modules libraries

import { v4 as uuid } from 'uuid';
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

export const DashboardMenu: MenuItemType[] = [
  {
    id: uuid(),
    title: 'Dashboard',
    link: '/',
    icon: <IconLayoutDashboard size={20} strokeWidth={1.5} />, 
  },
  {
    id: uuid(),
    title: 'Sales',
    icon: <IconTargetArrow size={20} strokeWidth={1.5} />, 
    children: [
      {
        id: uuid(),
        name: 'Leads',
        link: 'leads',
      },
      {
        id: uuid(),
        name: 'Deals',
        link: 'deals',
      },
    ],
  },
  {
    id: uuid(),
    title: 'Customers',
    icon: <IconUsers size={20} strokeWidth={1.5} />, 
    link: 'customers',
  },
  // Ecommerce menu removed
  // Blog menu removed
  {
    id: uuid(),
    title: 'Auth',
    link: '/sign-in',
    icon: <IconLock size={20} strokeWidth={1.5} />,
  },
];
