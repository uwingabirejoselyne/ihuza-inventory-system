import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import { ProductProvider } from "./contexts/ProductContext"
import { LoginUserProvider } from "./contexts/LoginUserContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import UsersPage from "./components/UsersPage"
import ProductsPage from "./components/ProductsPage"
import LoginPage from "./components/LoginPage"
import CategoriesPage from "./components/CategoriesPage"

// Layout component for authenticated pages (with sidebar)
const AuthenticatedLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
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
        <Sidebar />
      </div>
      {/* Main Content Area */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LoginUserProvider>
        <UserProvider>
          <ProductProvider>
            <Router>
              <Routes>
                {/* Login page - no sidebar */}
                <Route path="/" element={<LoginPage />} />
                
                {/* Authenticated pages - with sidebar */}
                <Route path="/dashboard" element={
                  <AuthenticatedLayout>
                    <Dashboard />
                  </AuthenticatedLayout>
                } />
                <Route path="/products" element={
                  <AuthenticatedLayout>
                    <ProductsPage />
                  </AuthenticatedLayout>
                } />
                <Route path="/users" element={
                  <AuthenticatedLayout>
                    <UsersPage />
                  </AuthenticatedLayout>
                } />
                <Route path="/categories" element={
                  <AuthenticatedLayout>
                    <CategoriesPage />
                  </AuthenticatedLayout>
                } />
                <Route path="/assignments" element={
                  <AuthenticatedLayout>
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
                  </AuthenticatedLayout>
                } />
              </Routes>
            </Router>
          </ProductProvider>
        </UserProvider>
      </LoginUserProvider>
    </ThemeProvider>
  )
}

export default App