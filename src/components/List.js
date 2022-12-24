import React from "react";
import Todo from "./Todo";
import "../styles/List.css";
const List = ({
  toDos,
  setToDos,
  setText,
  setEditMode,
  tempNote,
  setTempNote,
}) => {
  return (
    <>
      <div className="Note">
        <h2>NotePad</h2>
        {toDos.map((toDo) => {
          return (
            <Todo
              toDo={toDo}
              key={toDo.id}
              setToDos={setToDos}
              toDos={toDos}
              setText={setText}
              setEditMode={setEditMode}
              tempNote={tempNote}
              setTempNote={setTempNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;
