import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./styles/app.css";
function App() {
  //States
  const [text, setText] = useState("");
  const [tempNote, setTempNote] = useState(null);
  const [toDos, setToDos] = useState(() => {
    const data = localStorage.getItem("data");
    const parsedData = JSON.parse(data);
    return parsedData || [];
  });
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(toDos));
  }, [toDos]);
  return (
    <div className="container">
      <h1>To Do List</h1>
      <Form
        text={text}
        setText={setText}
        toDos={toDos}
        setToDos={setToDos}
        editMode={editMode}
        setEditMode={setEditMode}
        tempNote={tempNote}
        setTempNote={setTempNote}
      />
      <List
        toDos={toDos}
        setToDos={setToDos}
        setText={setText}
        setEditMode={setEditMode}
        tempNote={tempNote}
        setTempNote={setTempNote}
      />
    </div>
  );
}

export default App;
