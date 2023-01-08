import React from "react";

const Record = ({records}) => {
  return (
  <div className="records">
       <div className="record__container">
      {records.map((record, index) => (
        <div className="record" key={index}>{record.artist} - {record.title}</div>
      ))}
    </div>
    </div>
  );
};

export default Record;