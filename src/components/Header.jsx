"use client"

import { Bell, Sun, Moon } from "lucide-react"
import { useLoginUser } from "../hooks/useAppContext"
import { useTheme } from "../hooks/useTheme"

const Header = () => {
  const { loginUser } = useLoginUser()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-card border-b border-gray-200 dark:border-gray-700 px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900 dark:text-foreground">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button
          className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900 dark:text-foreground">{loginUser?.username}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{loginUser?.email}</p>
          </div>
          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-100 font-semibold text-sm">
              {loginUser?.username?.charAt(0) || "A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
