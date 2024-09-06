import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // getTaskDetails();
  }, []);
  const getTaskDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:3500/task/${params.id}`);
    result = await result.json();
    setTitle(result.title);
    setDescription(result.description);
    setCurrentDate(result.currentDate);
    setDueDate(result.dueDate);
  };

  const updateTask = async () => {
    console.warn(title, description, currentDate, dueDate);
    let result = await fetch(`http://localhost:3500/update-task/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ title, description, currentDate, dueDate }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };
  return (
    <>
      <div className="product">
        <h1>Update Product</h1>
        <input
          type="text"
          placeholder="Enter product name"
          className="inputBox"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter product price"
          className="inputBox"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter product category"
          className="inputBox"
          value={currentDate}
          onChange={(e) => {
            setCurrentDate(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter product company"
          className="inputBox"
          value={dueDate}
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />

        <button onClick={updateTask} className="appButton">
          Update Product
        </button>
      </div>
    </>
  );
};

export default UpdateTask;
