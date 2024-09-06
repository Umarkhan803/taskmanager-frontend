import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Task from "./Task";
const DashBoard = () => {
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    let result = await fetch("http://localhost:3500/task", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setTask(result);
  };
  const deleteTask = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:3500/task/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getTask();
    }
  };
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:3500/search/${key}`);
      result = await result.json();
      if (result) {
        setTask(result);
      }
    } else {
      getTask();
    }
  };
  console.log(task);
  return (
    <>
      <div className="dashboard">
        <button onClick={() => navigate("/task")} className="task-btn">
          Add Task
        </button>
        <div className="search-div">
          <input
            type="text"
            onChange={searchHandle}
            placeholder="Search here..."
          />
          <label htmlFor="">Sort</label>
        </div>
        <div className="task-container">
          <div className="col col1">
            <h1>TODO</h1>
            {task.length > 0 ? (
              task.map((item, index) => (
                <div className="item" key={item._id}>
                  <h4>{item.title}</h4>
                  <label className="Description">
                    Description:- {item.description}
                  </label>

                  <div>
                    <label>
                      Create at {item.currentDate}, due date {item.dueDate}
                    </label>
                  </div>
                  <div className="">
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(item._id)}>
                      Delete
                    </button>
                    <button className="edit-btn">
                      <Link to="/update">Edit</Link>
                    </button>
                    <button className="detail-btn">View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <h1>NO result found</h1>
            )}
          </div>
          <div className="col col2">
            <h1>IN PROGRESS</h1>
            <div className="item">
              <h4>Task</h4>
              <label className="Description">Description:-</label>

              <div>
                <label>Create at 01/09/2002,05/09/2002</label>
              </div>
              <div className="">
                <button className="delete-btn">Delete</button>
                <button className="edit-btn">Edit</button>
                <button className="detail-btn">View Details</button>
              </div>
            </div>
          </div>
          <div className="col col3">
            <h1>DONE</h1>
            <div className="item">
              <h4>Task</h4>
              <label className="Description">Description:-</label>

              <div>
                <label>Create at 01/09/2002,05/09/2002</label>
              </div>
              <div>
                <button className="delete-btn">Delete</button>
                <button className="edit-btn">Edit</button>
                <button className="detail-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
