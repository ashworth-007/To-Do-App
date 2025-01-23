import React, { useState } from "react";
import { updateTask } from "../redux/Task/taskSlice.js";
import { useDispatch } from "react-redux";

const UpdateTask = ({ taskToUpdate, handleCloseEditModal }) => {
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState({
    id: taskToUpdate.id,
    title: taskToUpdate.title,
    description: taskToUpdate.description,
    deadline: taskToUpdate.deadline,
    completed: taskToUpdate.completed,
    important: taskToUpdate.important,
  });

  const handleSaveChanges = () => {
    dispatch(updateTask({ id: updatedTask.id, updatedTask }));
    handleCloseEditModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Update Task</h2>
          <button
            onClick={handleCloseEditModal}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="task-title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="task-title"
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Deadline Input */}
        <div className="mb-4">
          <label
            htmlFor="task-deadline"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Deadline
          </label>
          <input
            id="task-deadline"
            type="date"
            value={updatedTask.deadline}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, deadline: e.target.value })
            }
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label
            htmlFor="task-desc"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="task-desc"
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
            rows="4"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Checkboxes */}
        <div className="flex items-center gap-4 mb-6">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              checked={updatedTask.completed}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, completed: e.target.checked })
              }
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            Completed
          </label>

          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              checked={updatedTask.important}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, important: e.target.checked })
              }
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            Important
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleSaveChanges}
          >
            Save 
          </button>
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            onClick={handleCloseEditModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
