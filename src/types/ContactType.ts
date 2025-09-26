export type ContactType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  status: 'Active' | 'Inactive' | 'Pending';
  avatar: string;
};
