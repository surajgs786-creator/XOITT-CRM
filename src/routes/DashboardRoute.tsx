//import node modules libraries
import { v4 as uuid } from 'uuid';
import {
  IconFiles,
  IconShoppingBag,
  IconNews,
  IconFile,
  IconLock,
  IconTarget,
  IconTargetArrow,
} from '@tabler/icons-react';

//import custom type
import { MenuItemType } from 'src/types/menuTypes';

export const DashboardMenu: MenuItemType[] = [
  {
    id: uuid(),
    title: 'Dashboard',
    link: '/',
    icon: <IconFiles size={20} strokeWidth={1.5} />,
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
        name: 'Contacts',
        link: 'contacts',
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
    title: 'Ecommerce',
    link: '/ecommerce',
    icon: <IconShoppingBag size={20} strokeWidth={1.5} />,
  },
  {
    id: uuid(),
    title: 'Blog',
    link: '/blog',
    icon: <IconNews size={20} strokeWidth={1.5} />,
  },
  {
    id: uuid(),
    title: 'Auth',
    link: '/sign-in',
    icon: <IconLock size={20} strokeWidth={1.5} />,
  },
];
