import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItem] = useState(["Do all Exercises", "Finish the course"]);
  const [name, setName] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const addName = (event) => {
    const inputText = event.target.value;
    setName(inputText);
    setIsInputEmpty(false);
  };

  const addItem = () => {
    if (name.trim() === "") {
      //  console.log("Empty input, cannot add item");
      setIsInputEmpty(true);
      return;
    }

    console.log("button clicked");
    console.log(name);
    setItem((prevItems) => [...prevItems, name]);
    setName("");
  };

  const handleDelete = (index) => {
    const updated = items.filter((item, i) => i !== index);
    setItem(updated);
  };

  return (
    <div className="App">
      <div className={`input-group `}>
        <label className={`${isInputEmpty ? "emptyLabel" : ""}`}>
          Course Goal
        </label>
        <input
          type="text"
          value={name}
          onChange={addName}
          className={`${isInputEmpty ? "empty" : ""}`}
        />
        <button type="button" onClick={addItem}>
          Add Goal
        </button>
      </div>
      <div>
        {items.map((item, index) => (
          <h1 key={index} onClick={() => handleDelete(index)}>
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default App;
