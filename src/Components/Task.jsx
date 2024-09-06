import React from "react";

const Task = ({ title, description, createDate, dueDate }) => {
  return (
    <>
      <div className="item">
        <h4>{title}</h4>
        <label className="Description">Description:- {description}</label>

        <div>
          <label>
            Create at {createDate}, due date {dueDate}
          </label>
        </div>
        <div className="">
          <button className="delete-btn">Delete</button>
          <button className="edit-btn">Edit</button>
          <button className="detail-btn">View Details</button>
        </div>
      </div>
    </>
  );
};

export default Task;
