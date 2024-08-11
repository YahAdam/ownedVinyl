import React from "react";
import Modal from "react-modal";

import BaseButton from "../../components/BaseButton/BaseButton";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function AddRecordModal({ handleChange, defaultRecords }) {
  React.useEffect(() => {
    setRecords(defaultRecords);
  }, []);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [records, setRecords] = React.useState([]);
  const [newRecord, setNewRecord] = React.useState({
    title: "",
    artist: "",
    color: "",
  });
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
  }
  function addRecord() {
    if (!allFieldsPopulated() || isRecordDuplicate(newRecord)) {
      return;
    }
    const newList = [...records, newRecord];
    setRecords(newList);
    handleChange(newList);
  }
  function isRecordDuplicate(record) {
    defaultRecords.some((rec) => {
      return (
        rec.artist === record.artist &&
        rec.title === record.title &&
        rec.color === record.color
      );
    });
  }
  function allFieldsPopulated() {
    return !!(newRecord.title && newRecord.artist && newRecord.color);
  }
  function setRecordDetails(value, type) {
    return setNewRecord({ ...newRecord, [type]: value });
  }

  return (
    <div>
      <button onClick={openModal}>Add Record</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={"record-container"}>
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
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default AddRecordModal;
