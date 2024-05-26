import React from 'react';

const Task = ({ task }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => {}} />
      <span>{task.text}</span>
    </li>
  );
};

export default Task;
