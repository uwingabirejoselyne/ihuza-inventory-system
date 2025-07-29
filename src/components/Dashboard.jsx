import { useUsers, useProducts } from "../hooks/useAppContext";
import StatCard from "./StatCard";
import RecentProducts from "./RecentProducts";
import UserTable from "./UserTable";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import Header from "./Header"; // Import the new Header component
import {
  CircleCheckBig,
  Package,
  TriangleAlert,
  UsersRound,
} from "lucide-react";

const Dashboard = ({ setActiveTab }) => {
  const { totalUsers } = useUsers();
  const { totalProducts, assignedProducts, unassignedProducts } = useProducts();

  return (
    <div className="flex-1 bg-back">
      <Header />

      <div className="p-8 dark:bg-card bg-white rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-lg p-6 text-white mb-8 shadow-md">
          <div className="flex  gap-2">
             <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center shadow-md">
            {/* <span className="text-blue-900 font-bold text-lg">IH</span> */}
            <Package className="text-white"/>
          </div>
            <div>
              <h2 className="text-xl font-bold mb-2">
                IHUZA INVENTORY - System Overview
              </h2>
              <p className="text-blue-100 dark:text-blue-300 mb-4">
                Monitor your iHUZA inventory and product assignments in
                real-time.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-100 font-medium">
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={totalUsers}
            subtitle="Total Users"
            color="blue"
            icon={<UsersRound />}
          />
          <StatCard
            title="Total Products"
            value={totalProducts}
            subtitle="Total Products"
            color="blue"
            icon={<Package />}
          />
          <StatCard
            title="Assigned Products"
            value={assignedProducts}
            subtitle="Assigned Products"
            color="green"
            icon={<CircleCheckBig />}
          />
          <StatCard
            title="Unassigned Products"
            value={unassignedProducts}
            subtitle="Unassigned Products"
            color="yellow"
            icon={<TriangleAlert />}
          />
        </div>

        <div className="mb-8">
          <RecentProducts />
        </div>

        <div className="mb-8">
          <UserTable />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentActivity />
          <QuickActions setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
