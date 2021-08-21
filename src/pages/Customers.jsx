import React from 'react';
import Table from '../components/table/Table';
import customers from '../assets/JsonData/customers-list.json';

const customerData = {
  headData: [
    '',
    'name',
    'email',
    'location',
    'phone',
    'total spends',
    'total orders',
  ],
  tableData: [...customers],
  limit: '10',
};
const Customers = () => {
  return (
    <div>
      <h2 className="page-header">customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table {...customerData}></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
