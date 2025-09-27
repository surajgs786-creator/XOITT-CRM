// Deals data, similar to LeadData
import { DealType } from '../types/DealType';

export const DealsData: DealType[] = [
  {
    id: 'deal-1',
    name: 'Big Enterprise CRM',
    stage: 'Negotiation',
    value: 25000,
    owner: 'John Doe',
    status: 'Open',
    createdAt: '2025-09-27',
  },
  {
    id: 'deal-2',
    name: 'Startup SaaS Platform',
    stage: 'Proposal',
    value: 12000,
    owner: 'Jane Smith',
    status: 'Open',
    createdAt: '2025-09-25',
  },
];
