import React from "react";
import "./Record.css";

import Table from "../../components/BaseTable/BaseTable";
import AddRecordModal from "../Modals/AddRecordModal";

import { records as ownedRecords } from "../../utilities/records";

function Record() {
  React.useEffect(() => {
    setRecords(ownedRecords);
  }, []);
  const [records, setRecords] = React.useState([]);
  const headers = ["Title", "Artist", "Color"];
  function setNewRecord(newRecordList) {
    setRecords(newRecordList);
  }
  return (
    <div className={"records"}>
      <Table headers={headers} data={records} />
      <AddRecordModal defaultRecords={records} handleChange={setNewRecord} />
    </div>
  );
}

export default Record;
