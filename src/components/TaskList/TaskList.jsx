import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { useState } from 'react'

const TaskList = ({data}) => {
const [taskList, setTaskList] = useState(()=> {const savedTasks = localStorage.getItem('taskList');
                                                return savedTasks? JSON.parse(savedTasks) : data.tasks})

    const handleMarkAsCompleted = (taskId) => {
        const updatedTasks = taskList.map((task) =>
            task.id === taskId ? { ...task, completed: true, active:false } : task
        );
        setTaskList(updatedTasks);
        localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    };

    const handleMarkAsFailed = (taskId) => {
        const updatedTasks = taskList.map((task) =>
            task.id === taskId ? { ...task, failed: true, active:false } : task
        );
        setTaskList(updatedTasks);
        localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    };

    const handleMarkAsAccepted = (taskId) => {
        const updatedTasks = taskList.map((task) =>
            task.id === taskId ? { ...task, active: true, newTask:false } : task
        );
        setTaskList(updatedTasks);
        localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    };
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify gap-5 flex-nowrap w-full py-5  mt-10'>
        {taskList.map((task, id) =>{
            if(task.active) {
                return <AcceptTask key={id} task={task} onMarkAsCompleted={handleMarkAsCompleted} onMarkAsFailed={handleMarkAsFailed}/>
            }
            if(task.newTask) {
                return <NewTask key={id} task={task} onMarkAsAccepted={handleMarkAsAccepted}/>
            }
            if(task.completed) {
                return <CompleteTask key={id} task={task}/>
            }
            if(task.failed) {
                return <FailedTask key={id} task={task}/>
            }
            
        })}
        
    </div>
  )
}

export default TaskList
