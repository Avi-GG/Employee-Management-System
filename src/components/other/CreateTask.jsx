import { useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [taskAssignTo, setTaskAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [userData, setUserData] = useContext(AuthContext);
    const submitHandler = (e) => {
        e.preventDefault();

        // Create new task object
        const newTask = {
            id: uuidv4(), // This will generate a unique ID
            title,
            date,
            category,
            description,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        };

        // Get data from userData and create a new employees array to avoid direct mutation
        const updatedEmployees = userData.employees.map(employee => {
            if (taskAssignTo === employee.firstName) {
                // Add the new task to the matching employee's tasks
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask], // **Updated: Use spread operator to add the new task**
                };
            }
            return employee; // Return unchanged employee
        });

        // **Updated: Create new userData object to keep it immutable**
        const updatedUserData = {
            ...userData,
            employees: updatedEmployees,
        };

        // Update context with new userData
        setUserData(updatedUserData);

        // Clear the form fields
        setTitle('');
        setDescription('');
        setDate('');
        setCategory('');
        setTaskAssignTo('');
        console.log('Task created successfully');
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap items-start justify-between' onSubmit={submitHandler}>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={date} onChange={(e) => setDate(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input value={taskAssignTo} onChange={(e) => setTaskAssignTo(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc.' />
                    </div>
                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' cols="30" rows="10" placeholder="Task description"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full font-bold'>Create Task</button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;
