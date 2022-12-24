import React from "react";
import "../styles/toDo.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = ({
  toDo,
  setToDos,
  toDos,
  setText,
  setEditMode,
  tempNote,
  setTempNote,
}) => {
  //delete an item
  const DeleteItem = () => {
    const filterdList = toDos.filter((item) => {
      return item.id !== toDo.id;
    });

    setToDos(filterdList);
  };
  // check the compalted item
  const checkItem = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === toDo.id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <motion.div
      className="row"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <p className={toDo.complete ? "check" : ""}>{toDo.task}</p>
      <div>
        <button onClick={checkItem}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          onClick={() => {
            setText(toDo.task);
            setTempNote(toDo);
            setEditMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button onClick={DeleteItem}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </motion.div>
  );
};

export default Todo;
