import React from 'react';
import TasksFilter from './TasksFilter';

const Footer = () => {
  return (
    <footer>
      <TasksFilter />
      <button>Clear Completed</button>
    </footer>
  );
};

export default Footer;
