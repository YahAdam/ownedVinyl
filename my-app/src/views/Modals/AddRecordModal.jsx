import React from "react";
import Modal from "react-modal";
import "./AddRecordModal.css";

import BaseButton from "../../components/BaseButton/BaseButton";
import BaseTitle from "../../components/BaseTitle/BaseTitle";
import BaseIcon from "../../components/BaseIcon/BaseIcon";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "30%",
    borderRadius: "16px"
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
  function clearRecord() {
    setNewRecord({
      title: "",
      artist: "",
      color: "",
    });
  }

  return (
    <div className="flex justify-center">
      <BaseButton
        text="Add Record"
        size="small"
        icon={{ name: "Plus", props: { width: "24", height: "24" } }}
        handleClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={"flex justify-end"} onClick={closeModal}>
          <BaseIcon iconName={"XIcon"} props={{ width: "20", height: "20" }} />
        </div>
        <div className={"record-container"}>
          <BaseTitle title="Add New Record" />
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
          <BaseButton text="Clear" handleClick={clearRecord} />
        </div>
      </Modal>
    </div>
  );
}

export default AddRecordModal;
