import React from "react";
import PropTypes from "prop-types";
import "./BaseTable.css";

const Table = ({ headers, data }) => {
  return (
    <table className={"table"}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, hIndex) => (
                <td key={hIndex}>{row[header]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headers.length}>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
