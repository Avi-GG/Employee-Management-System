import React, { useState, useEffect } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data, updateTaskCounts }) => {
  // Load tasks from localStorage initially, or fallback to data.tasks
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem('taskList');
    return savedTasks ? JSON.parse(savedTasks) : data.tasks;
  });

  // Function to update localStorage directly when task list changes
  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem('taskList', JSON.stringify(updatedTasks));
  };

  const handleMarkAsCompleted = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: true, active: false } : task
    );
    setTaskList(updatedTasks);
    updateLocalStorage(updatedTasks);  // Immediately update localStorage
    updateTaskCounts(updatedTasks);  // Update task counts
  };

  const handleMarkAsFailed = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, failed: true, active: false } : task
    );
    setTaskList(updatedTasks);
    updateLocalStorage(updatedTasks);  // Immediately update localStorage
    updateTaskCounts(updatedTasks);  // Update task counts
  };

  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify gap-5 flex-nowrap w-full py-5 mt-10">
      {taskList.map((task, id) => {
        if (task.active) {
          return (
            <AcceptTask key={id} task={task} onMarkAsCompleted={handleMarkAsCompleted} onMarkAsFailed={handleMarkAsFailed} />
          );
        }
        if (task.newTask) {
          return <NewTask key={id} task={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={id} task={task} />;
        }
        if (task.failed) {
          return <FailedTask key={id} task={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
