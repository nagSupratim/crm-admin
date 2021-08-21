import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';
import Table from '../components/table/Table';
import StatusCard from '../components/statuscard/StatusCard';
import statusCardData from '../assets/JsonData/status-card-data.json';

const chartOptions = {
  series: [
    {
      name: 'Online Customers',
      data: [20, 36, 40, 53, 60, 71, 80, 93, 97],
    },
    {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 38, 23, 10],
    },
  ],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
    legend: {
      position: 'top',
    },
    grid: {
      show: false,
    },
  },
};
const topCustomers = {
  headData: ['user', 'total orders', 'total spending'],
  tableData: [
    {
      username: 'michael scott',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'jim halpert',
      order: '250',
      price: '$12,251',
    },
    {
      username: 'dwight schrute',
      order: '120',
      price: '$10,840',
    },
    {
      username: 'kelly kapoor',
      order: '112',
      price: '$9,780',
    },
    {
      username: 'ryan howard',
      order: '80',
      price: '$8,530',
    },
  ],
};
const latestOrders = {
  headData: ['order id', 'user', 'total price', 'date', 'status'],
  tableData: [
    {
      id: '#OD1715',
      user: 'Kelly Kapoor',
      price: '#350',
      date: '21 Aug 2021',
      status: 'pending',
    },
    {
      id: '#OD1714',
      user: 'Stanley Hudson',
      price: '$200',
      date: '21 Aug 2021',
      status: 'refund',
    },
    {
      id: '#OD1713',
      user: 'Stanley Hudson',
      price: '$200',
      date: '21 Aug 2021',
      status: 'paid',
    },
    {
      id: '#OD1712',
      user: 'Meredeth Palmer',
      price: '$400',
      date: '20 Aug 2021',
      status: 'paid',
    },
    {
      id: '#OD1711',
      user: 'Toby Flenderson',
      price: '$900',
      date: '20 Aug 2021',
      status: 'shipping',
    },
  ],
  badges: ['status'],
};
const orderStatus = {
  shipping: 'primary',
  pending: 'warning',
  paid: 'success',
  refund: 'danger',
};

const Dashboard = () => {
  const themeReducer = useSelector(
    (state) => state.ThemeReducer.mode
  );
  return (
    <div>
      <h2 className="page-header">Dashboards</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCardData.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard {...item} key={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={
                themeReducer === 'theme-mode-dark'
                  ? {
                      ...chartOptions.options,
                      theme: { mode: 'dark' },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: 'light' },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
              <Table {...topCustomers} />
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest oreders</h3>
            </div>
            <div className="card__body">
              <Table {...latestOrders} status={orderStatus} />
            </div>
            <div className="card__footer">
              <Link to="/">veiw all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
