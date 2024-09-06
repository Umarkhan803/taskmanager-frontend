import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const addTaskHandler = async () => {
    navigate("/dashbord");
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:3500/add-task", {
      method: "post",
      body: JSON.stringify({
        title,
        description,
        currentDate,
        dueDate,
        userId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <>
      <div className="task-container">
        <div className="task-form">
          <h1>Add Task</h1>
          <label>Title</label>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <label>Description</label>
          <input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <label>Create at </label>
          <input
            value={currentDate}
            type="date"
            onChange={(e) => setCurrentDate(e.target.value)}
          />
          <label>due date</label>
          <input
            value={dueDate}
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={addTaskHandler} className="add-task-btn">
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
