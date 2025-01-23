import { useNavigate } from "react-router-dom";

export default function Bar({ children }) {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="font-semibold text-gray-700 text-2xl">To Do App</span>
        </div>

        <ul className="flex space-x-6">{children}</ul>
      </nav>
    </header>
  );
}

const checkPath = (path) => {
  if (path === location.pathname) return true;
  else return false;
};

export function BarItem({ text, active, path }) {
  active = checkPath(path);
  const navigate = useNavigate();

  return (
    <li
      className={`
        relative py-2 px-4 text-lg font-medium cursor-pointer
        transition-colors rounded-lg
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
      onClick={() => navigate(path)}
    >
      <span>{text}</span>
    </li>
  );
}
