import React, { useState } from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem('taskList');
    return savedTasks ? JSON.parse(savedTasks) : props.data.tasks;
  });

  // This function will be called to update the task counts in TaskListNumbers
  const updateTaskCounts = (updatedTasks) => {
    setTaskList(updatedTasks);
  };

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers taskList={taskList} />
      <TaskList data={props.data} updateTaskCounts={updateTaskCounts} />
    </div>
  );
};

export default EmployeeDashboard;
