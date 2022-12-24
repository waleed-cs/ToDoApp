import React from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "../styles/form.css";
const Form = ({
  text,
  setText,
  toDos,
  setToDos,
  editMode,
  setEditMode,
  tempNote,
  setTempNote,
}) => {
  const submitForm = (e) => {
    e.preventDefault();
    if (!editMode) {
      if (text !== "") {
        setToDos([{ id: uuidv4(), task: text, complete: false }, ...toDos]);
        setText("");
      }
    } else {
      if (text !== "") {
        console.log("test");
        setToDos(
          toDos.map((item) => {
            if (item.id === tempNote.id) {
              return { ...item, task: text };
            } else {
              return item;
            }
          })
        );
        setEditMode(false);
        setText("");
      }
    }
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        {editMode ? (
          <>
            <motion.button whileTap={{ scale: 0.5 }}>Update</motion.button>
            <motion.button
              onClick={() => {
                setEditMode(false);
                setText("");
              }}
            >
              Cancel
            </motion.button>
          </>
        ) : (
          <motion.button whileTap={{ scale: 0.5 }}>
            <FontAwesomeIcon icon={faAdd} />
          </motion.button>
        )}
      </form>
    </>
  );
};

export default Form;
