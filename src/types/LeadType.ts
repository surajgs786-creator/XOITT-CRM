export interface LeadListType {
  name: string;
  company: string;
  email: string;
  phone: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Lost';
  owner: string;
  source: string;
  createdDate?: string;
  id: number | string;
  avatarSrc?: string;
  priority?: 'High' | 'Medium' | 'Low';
  tags?: string[];
  notes?: string;
}
