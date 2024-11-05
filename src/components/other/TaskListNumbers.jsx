import { useState, useEffect } from "react";
import React from 'react';

const TaskListNumbers = ({ data }) => {
   const [active, setActive] = useState(0);
   const [newTask, setNewTask] = useState(0);
   const [completed, setCompleted] = useState(0);
   const [failed, setFailed] = useState(0);

   useEffect(() => {
      const counts = data.tasks.reduce(
         (totals, task) => {
            if (task.newTask) totals.newTask += 1;
            if (task.active) totals.active += 1;
            if (task.completed) totals.completed += 1;
            if (task.failed) totals.failed += 1;
            return totals;
         },
         { newTask: 0, active: 0, completed: 0, failed: 0 }
      );

      setNewTask(counts.newTask);
      setActive(counts.active);
      setCompleted(counts.completed);
      setFailed(counts.failed);
   }, [data.tasks]);

   return (
      <div className='flex mt-10 justify-between gap-5 screen'>
         <div className='rounded-xl w-[45%] px-9 py-6 bg-fuchsia-400'>
            <h2 className='text-3xl font-semibold'>{newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
         </div>
         <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
         </div>
         <div className='rounded-xl w-[45%] px-9 py-6 bg-emerald-400'>
            <h2 className='text-3xl font-semibold'>{active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
         </div>
         <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
         </div>
      </div>
   );
};

export default TaskListNumbers;
