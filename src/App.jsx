import { useState } from "react"
import { UserProvider } from "./contexts/UserContext"
import { ProductProvider } from "./contexts/ProductContext"
import { LoginUserProvider } from "./contexts/LoginUserContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import UsersPage from "./components/UsersPage"
import ProductsPage from "./components/ProductsPage"

function App() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false) // Sidebar toggle for mobile

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard setActiveTab={setActiveTab} />
      case "users":
        return <UsersPage />
      case "products":
        return <ProductsPage />
      case "assignments":
        return (
          <div className="flex-1 bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-card border-b border-gray-200 dark:border-gray-700 px-8 py-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-foreground">Assignments</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Manage product assignments to users</p>
            </div>
            <div className="p-8">
              <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-200 text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-2">
                  Assignments Coming Soon
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This feature is under development and will be available soon.
                </p>
              </div>
            </div>
          </div>
        )
      case "categories":
        return (
          <div className="flex-1 bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-card border-b border-gray-200 dark:border-gray-700 px-8 py-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-foreground">Categories</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Manage product categories and classifications</p>
            </div>
            <div className="p-8">
              <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-200 text-2xl">📁</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-2">
                  Categories Coming Soon
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This feature is under development and will be available soon.
                </p>
              </div>
            </div>
          </div>
        )
      default:
        return <Dashboard setActiveTab={setActiveTab} />
    }
  }

  return (
    <ThemeProvider>
      <LoginUserProvider>
        <UserProvider>
          <ProductProvider>
            <div className="flex flex-col md:flex-row min-h-screen">
              {/* Hamburger for mobile */}
              <button
                className="md:hidden absolute top-4 left-4 z-50 bg-white dark:bg-card p-2 rounded shadow"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle sidebar"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* Sidebar: hidden on mobile unless toggled */}
              <div className={`${sidebarOpen ? "block" : "hidden"} md:block `}>
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              {renderContent()}
            </div>
          </ProductProvider>
        </UserProvider>
      </LoginUserProvider>
    </ThemeProvider>
  )
}

export default App