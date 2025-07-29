import {
  Users,
  Package,
  ActivityIcon as Assignment,
  Grid3X3,
  LogOut,
  BarChart3,
} from "lucide-react";
import { useLoginUser } from "../hooks/useAppContext";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { loginUser, logout } = useLoginUser();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "products", label: "Products", icon: Package },
    { id: "assignments", label: "Assignments", icon: Assignment },
    { id: "categories", label: "Categories", icon: Grid3X3 },
  ];

  return (
    <div className="dark:bg-card bg-white text-black w-64 min-h-screen flex flex-col shadow-lg">
      {/* Logo Section */}
      <div className="p-6 border-b border-blue-800 dark:border-blue-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center shadow-md">
            {/* <span className="text-blue-900 font-bold text-lg">IH</span> */}
            <Package className="text-white"/>
          </div>
          <div>
            <h1 className="text-xl font-bold">IHUZA</h1>
            <p className="text-gray-200 text-sm font-medium">INVENTORY</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  activeTab === item.id
                    ? "bg-blue-100 text-blue-700 shadow-md"
                    : "text-black hover:bg-blue-100 hover:text-white dark:hover:bg-blue-800 dark:hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-blue-800 dark:border-blue-700">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">
              {loginUser?.username?.charAt(0) || "A"}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">
              {loginUser?.username}
            </p>
            <p className="text-xs text-blue-300">{loginUser?.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-4 py-2 text-blue-200 hover:bg-blue-800 hover:text-white rounded-lg transition-colors"
        >
          <LogOut size={16} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
