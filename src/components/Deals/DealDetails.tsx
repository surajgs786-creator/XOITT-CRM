import React from 'react';
import { DealType } from '../../types/DealType';

interface DealDetailsProps {
  deal: DealType;
}

const DealDetails: React.FC<DealDetailsProps> = ({ deal }) => (
  <div>
    <h3>{deal.name}</h3>
    <p>Stage: {deal.stage}</p>
    <p>Value: ${deal.value}</p>
    <p>Owner: {deal.owner}</p>
    <p>Status: {deal.status}</p>
    <p>Created At: {deal.createdAt}</p>
  </div>
);

export default DealDetails;
