import React from "react";

const AcceptTask = ({ task, onMarkAsCompleted, onMarkAsFailed }) => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-3 bg-emerald-500 rounded-xl">
            <div className="bg-gray-800 h-full w-full p-3 rounded-xl">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{task.category}</h3>
                    <h4 className="text-sm">{task.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> {task.title}</h2>
                <p className="text-sm mt-2">{task.description}</p>
                <div className="flex justify-between mt-4">
                    <button onClick={() => onMarkAsCompleted(task.id)} className="bg-green-500 py-1 px-2 text-sm rounded-md">Mark as Completed</button>
                    <button onClick={() => onMarkAsFailed(task.id)} className="bg-red-500 py-1 px-2 text-sm rounded-md">Mark as Failed</button>
                </div>
            </div>
        </div>
    );
};

export default AcceptTask;
