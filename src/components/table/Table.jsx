import React, { useState } from 'react';
import Badge from '../badge/Badge';
import './table.css';
const Table = (props) => {
  const initDataShow =
    props.limit && props.tableData
      ? props.tableData.slice(0, +props.limit)
      : props.tableData;
  const [dataShow, setDataShow] = useState(initDataShow);
  const [currPage, setCurrPage] = useState(0);
  let pages = 1;
  let range = [];
  if (props.limit !== undefined) {
    let page = props.tableData.length / +props.limit;
    pages =
      props.tableData.length % +props.limit === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }
  const selectPage = (page) => {
    const start = +props.limit * page;
    const end = start + +props.limit;
    setDataShow(props.tableData.slice(start, end));
    setCurrPage(page);
  };

  const thead =
    null ||
    (props.headData && (
      <thead>
        <tr>
          {props.headData.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
    ));
  const tbody =
    null ||
    (props.tableData && (
      <tbody>
        {dataShow.map((item, index) => (
          <tr key={index}>
            {Object.keys(item).map((key, ki) => {
              let content = item[key];
              if (props.badges && props.badges.includes(key)) {
                content = (
                  <Badge type={props.status[item[key]]}>
                    {item[key]}
                  </Badge>
                );
              }

              return <td key={ki}>{content}</td>;
            })}
          </tr>
        ))}
      </tbody>
    ));

  return (
    <>
      <div className="table-wrapper">
        <table>
          {thead}
          {tbody}
        </table>
      </div>
      {pages > 1 ? (
        <div className="table__pagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item ${
                currPage === index && 'active'
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Table;
