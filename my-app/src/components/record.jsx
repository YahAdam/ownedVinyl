import React from "react";
import { useState, useEffect } from "react";
import { records as ownedRecords } from "../utilities/records";
import Button from "./button";

function Record() {
  function addRecord() {
    if (!newRecord) {
      return;
    }
    if (isRecordDuplicate(newRecord)) {
      return;
    }
    // const newList = [...records, newRecord]
    // setRecords(newList)
  }

  function isRecordDuplicate(record) {
    ownedRecords.filter((rec) => {
      return (
        rec.artist === record.artist &&
        rec.title === record.title &&
        rec.color === record.color
      );
    });
  }

  function setRecordDetails(value, type) {
    switch (type) {
      case "name":
        return setNewRecord({ ...newRecord, name: value });
      case "artist":
        return setNewRecord({ ...newRecord, artist: value });
      case "color":
        return setNewRecord({ ...newRecord, color: value });
      default:
        console.error("Unknown field type");
    }
  }

  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    name: "",
    artist: "",
    color: "",
  });

  useEffect(() => {
    setRecords(ownedRecords);
  }, []);

  const recordsStyle = {
    backgroundColor: "steelblue",
  };

  const recordContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "8px 0",
    backgroundColor: "turquoise",
    alignItems: "center",
  };

  const recordStyle = {
    width: "200px",
    borderRadius: "16px",
    alignItems: "center",
    color: "maroon",
    backgroundColor: "wheat",
  };

  return (
    <div style={recordsStyle}>
      <div style={recordContainer}>
        {records.map((record, index) => (
          <div style={recordStyle} key={index}>
            {record.artist} - {record.title}
          </div>
        ))}
        <label htmlFor="recordName">Album Name</label>
        <input
          id="recordName"
          value={newRecord.name}
          onChange={(event) => {
            setRecordDetails(event.target.value, "name");
          }}
        />
        <label htmlFor="recordArtist">Artist</label>
        <input
          id="recordArtist"
          value={newRecord.artist}
          onChange={(event) => {
            setRecordDetails(event.target.value, "artist");
          }}
        />
        <label htmlFor="recordColor">Color</label>
        <input
          id="recordColor"
          value={newRecord.color}
          onChange={(event) => {
            setRecordDetails(event.target.value, "color");
          }}
        />
        <Button text="Add" color="green" handleClick={addRecord} />
      </div>
    </div>
  );
}

export default Record;
