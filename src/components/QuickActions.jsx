 

import { Users, Package, ActivityIcon as Assignment, ArrowRight } from "lucide-react"

const QuickActions = ({ setActiveTab }) => {
  const actions = [
    {
      id: "users",
      title: "View Users",
      description: "View all registered users",
      icon: Users,
      color: "blue",
    },
    {
      id: "products",
      title: "View Products",
      description: "View all registered products",
      icon: Package,
      color: "green",
    },
    {
      id: "assignments",
      title: "View Assignments",
      description: "View all product assignments",
      icon: Assignment,
      color: "purple", // Changed to purple based on image
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        // bg: "bg-blue-50 dark:bg-blue-900",
        border: "border-blue-200 dark:border-blue-700",
        icon: "text-blue-600 dark:text-blue-300",
        text: "text-blue-600 dark:text-blue-300",
      },
      green: {
        // bg: "bg-green-50 dark:bg-green-900",
        border: "border-green-200 dark:border-green-700",
        icon: "text-green-600 dark:text-green-300",
        text: "text-green-600 dark:text-green-300",
      },
      purple: {
        // bg: "bg-purple-50 dark:bg-purple-900", // Will need to define purple colors in CSS
        border: "border-purple-200 dark:border-purple-700",
        icon: "text-purple-600 dark:text-purple-300",
        text: "text-purple-600 dark:text-purple-300",
      },
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon
          const currentColors = getColorClasses(action.color)
          return (
            <button
              key={action.id}
              onClick={() => setActiveTab(action.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-colors hover:shadow-md ${currentColors.bg} ${currentColors.border}`}
            >
              <div className="flex items-center space-x-3">
                <Icon size={20} className={currentColors.icon} />
                <div className="text-left">
                  <h4 className="font-medium text-gray-900 dark:text-foreground">{action.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{action.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${currentColors.text}`}>Go</span>
                <ArrowRight size={16} className={currentColors.icon} />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuickActions
