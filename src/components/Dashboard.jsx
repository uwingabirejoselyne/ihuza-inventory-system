"use client"

import { useUsers, useProducts } from "../hooks/useAppContext"
import StatCard from "./StatCard"
import RecentProducts from "./RecentProducts"
import UserTable from "./UserTable"
import RecentActivity from "./RecentActivity"
import QuickActions from "./QuickActions"
import Header from "./Header" // Import the new Header component

const Dashboard = ({ setActiveTab }) => {
  const { totalUsers } = useUsers()
  const { totalProducts, assignedProducts, unassignedProducts } = useProducts()
  // loginUser, theme, and toggleTheme are now used directly in Header.jsx

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header Section - now a separate component */}
      <Header />

      {/* Main Content Area */}
      <div className="p-8">
        {/* System Overview Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-lg p-6 text-white mb-8 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">¡HUZA INVENTORY - System Overview</h2>
              <p className="text-blue-100 dark:text-blue-300 mb-4">
                Monitor your iHUZA inventory and product assignments in real-time.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-100 font-medium">All Systems Operational</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">¡H</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value={totalUsers} subtitle="Registered Users" color="blue" />
          <StatCard title="Total Products" value={totalProducts} subtitle="In Inventory" color="green" />
          <StatCard title="Assigned Products" value={assignedProducts} subtitle="Currently Assigned" color="orange" />
          <StatCard title="Unassigned Products" value={unassignedProducts} subtitle="Available" color="red" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <RecentProducts />
          </div>
          <div className="lg:col-span-2">
            <UserTable />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentActivity />
          <QuickActions setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
