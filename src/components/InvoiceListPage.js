import React from 'react';
import InvoiceList from './InvoiceItem';

const InvoiceListPage = () => {
  return (
    <div>
      <h1>List of Invoices</h1>
      <InvoiceList />
      <button to="/InvoiceForm">Create Invoice</button>
    </div>
  );
};

export default InvoiceListPage;
