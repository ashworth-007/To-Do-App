import { CalendarClock, FilePenLine, Trash, CheckCircle, XCircle } from "lucide-react";
import React from "react";

const TaskCard = ({ task, handleOpenEditModal, handleDeleteTask }) => {
  return (
    <li className="relative flex flex-col justify-between bg-gradient-to-tr from-gray-50 to-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden p-6 gap-4 transition-shadow duration-200">
      {/* Top Section: Edit, Delete, Status */}
      <div className="flex justify-between items-center">
        {/* Edit and Delete Icons */}
        <div className="flex items-center gap-3">
          <FilePenLine
            className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
            onClick={() => handleOpenEditModal(task)}
            size={20}
          />
          <Trash
            className="text-red-600 hover:text-red-800 cursor-pointer transition-colors"
            onClick={() => handleDeleteTask(task.id)}
            size={20}
          />
        </div>

        {/* Task Status */}
        <div>
          {task.completed ? (
            <div className="flex items-center gap-2 text-green-700 bg-green-100 border border-green-600 text-xs px-2 py-1 rounded-full">
              <CheckCircle size={16} /> Completed
            </div>
          ) : (
            <div className="flex items-center gap-2 text-red-700 bg-red-100 border border-red-600 text-xs px-2 py-1 rounded-full">
              <XCircle size={16} /> ToDo
            </div>
          )}
        </div>
      </div>

      {/* Deadline */}
      <div className="flex items-center gap-2">
        <CalendarClock className="text-gray-500" size={20} />
        <span className="text-sm text-gray-600">
          {new Date(task.deadline).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Task Title */}
      <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>

      {/* Task Description */}
      <p className="text-sm text-gray-600">{task.description}</p>
    </li>
  );
};

export default TaskCard;
