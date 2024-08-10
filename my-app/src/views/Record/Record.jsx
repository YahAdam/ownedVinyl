import React from "react";
import { useState, useEffect } from "react";
import "./Record.css"

import BaseButton from "../../components/BaseButton/BaseButton";
import Table from "../../components/BaseTable/BaseTable";

import { records as ownedRecords } from "../../utilities/records";

function Record() {
  function addRecord() {
    if (!newRecord) {
      return;
    }
    if (isRecordDuplicate(newRecord)) {
      return;
    }
    const newList = [...records, newRecord];
    setRecords(newList);
  }

  function isRecordDuplicate(record) {
    ownedRecords.some((rec) => {
      return (
        rec.artist === record.artist &&
        rec.title === record.title &&
        rec.color === record.color
      );
    });
  }

  function setRecordDetails(value, type) {
    switch (type) {
      case "title":
        return setNewRecord({ ...newRecord, title: value });
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
    title: "",
    artist: "",
    color: "",
  });
  const headers = ["Title", "Artist", "Color"];

  useEffect(() => {
    setRecords(ownedRecords);
  }, []);

  return (
    <div className={'records'}>
      <Table headers={headers} data={records} />
      <div className={"record-container"}>
        {records.map((record, index) => (
          <div className={"record"} key={index}>
            {record.artist} - {record.title}
          </div>
        ))}
        <label htmlFor="recordTitle">Album Title</label>
        <input
          id="recordTitle"
          value={newRecord.title}
          onChange={(event) => {
            setRecordDetails(event.target.value, "title");
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
        <BaseButton text="Add" color="green" handleClick={addRecord} />
      </div>
    </div>
  );
}

export default Record;
