// AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Task/taskSlice.js";
import { v4 as uuidv4 } from "uuid";

function InputTask() {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    title: "",
    deadline: "",
    completed: false,
    important: false,
  });

  const dispatch = useDispatch();

  const handleSaveTask = () => {
    dispatch(addTask(newTask));
    setNewTask({
      id: "",
      title: "",
      description: "",
      deadline: "",
      completed: false,
      important: false,
    });
    setShowModal(false);
  };

  return (
    <div >
      <button
        className="py-3 px-5 text-white font-semibold text-sm rounded-full shadow-lg bg-black mt-2"
        onClick={() => setShowModal(true)}
      >
        + Add Task
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Add New Task
            </h2>
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="block w-full p-3 mb-4 text-sm bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              cols="10"
              rows="4"
              value={newTask.description}
              placeholder="Task Description"
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="block w-full p-3 mb-4 text-sm bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <input
              type="date"
              placeholder="Deadline"
              value={newTask.deadline}
              onChange={(e) =>
                setNewTask({ ...newTask, deadline: e.target.value })
              }
              className="block w-full p-3 mb-4 text-sm bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="mb-4">
              <label className="flex items-center space-x-3 mb-2">
                <input
                  type="checkbox"
                  checked={newTask.completed}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      completed: e.target.checked,
                    })
                  }
                  className="h-5 w-5 text-blue-600 rounded-lg border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-600 text-sm">Completed</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={newTask.important}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      important: e.target.checked,
                    })
                  }
                  className="h-5 w-5 text-red-500 rounded-lg border-gray-300 focus:ring-red-500"
                />
                <span className="text-gray-600 text-sm">Important</span>
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-400 to-green-600 shadow-lg hover:shadow-xl transition"
                onClick={handleSaveTask}
              >
                Save Task
              </button>
              <button
                className="px-5 py-2 rounded-full text-sm font-semibold text-gray-700 bg-gray-200 shadow-lg hover:bg-gray-300 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputTask;
