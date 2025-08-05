import React from "react"

const CategoriesPage = () => {
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
}

export default CategoriesPage 