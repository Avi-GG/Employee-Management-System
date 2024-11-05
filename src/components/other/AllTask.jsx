import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData] = useContext(AuthContext);
    const [employeeTasks, setEmployeeTasks] = useState([]);

    useEffect(() => {
        const tasksPerEmployee = userData.employees.map(employee => {
            const counts = employee.tasks.reduce(
                (acc, task) => {
                    if (task.newTask) acc.newTask += 1;
                    if (task.active) acc.active += 1;
                    if (task.completed) acc.completed += 1;
                    if (task.failed) acc.failed += 1;
                    return acc;
                },
                { newTask: 0, active: 0, completed: 0, failed: 0 }
            );
            return { ...employee, ...counts }; // Merge employee data with task counts
        });
        setEmployeeTasks(tasksPerEmployee);
    }, [userData.employees]);

    return (
        <div id='alltasks' className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 text-center'>
            <div className='bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded font-bold'>
                <h2 className='w-1/5'>Employee</h2>
                <h2 className='w-1/5'>New Task</h2>
                <h2 className='w-1/5'>Active</h2>
                <h2 className='w-1/5'>Completed</h2>
                <h2 className='w-1/5'>Failed</h2>
            </div>
            <div id='alltasks' className='h-[80%] overflow-auto'>
                {employeeTasks.map(employee => (
                    <div key={employee.id} className='mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5 text-white'>{employee.firstName}</h2>
                        <h2 className='w-1/5 text-fuchsia-600'>{employee.newTask}</h2>
                        <h2 className='w-1/5 text-green-600'>{employee.active}</h2>
                        <h2 className='w-1/5 text-blue-600'>{employee.completed}</h2>
                        <h2 className='w-1/5 text-red-600'>{employee.failed}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;
