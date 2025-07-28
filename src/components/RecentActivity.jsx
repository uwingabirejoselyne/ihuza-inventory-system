import { Package, UserPlus, AlertTriangle } from "lucide-react"

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "product_added",
      title: "Product added to inventory",
      description: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
      icon: Package,
      iconColor: "text-blue-600 dark:text-blue-300",
      iconBg: "bg-blue-100 dark:bg-blue-800",
    },
    {
      id: 2,
      type: "product_assigned",
      title: "Product assigned to Sarah Johnson",
      description: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
      icon: Package,
      iconColor: "text-blue-600 dark:text-blue-300",
      iconBg: "bg-blue-100 dark:bg-blue-800",
    },
    {
      id: 3,
      type: "product_assigned",
      title: "Product assigned to Michael Brown",
      description: "Apple MacBook Air M2 (PROD2024001)",
      date: "Dec 2, 2024",
      icon: Package,
      iconColor: "text-blue-600 dark:text-blue-300",
      iconBg: "bg-blue-100 dark:bg-blue-800",
    },
    {
      id: 4,
      type: "maintenance",
      title: "Product sent for maintenance",
      description: "HP Spectre x360 - Screen replacement required",
      date: "Jan 16, 2024",
      icon: AlertTriangle, // Changed from Wrench to AlertTriangle based on the image
      iconColor: "text-orange-600 dark:text-orange-300",
      iconBg: "bg-orange-100 dark:bg-orange-800",
    },
    {
      id: 5,
      type: "user_registered",
      title: "New user registered",
      description: "Amanda White - Staff Member",
      date: "Jan 14, 2024",
      icon: UserPlus,
      iconColor: "text-green-600 dark:text-green-300",
      iconBg: "bg-green-100 dark:bg-green-800",
    },
  ]

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Recent Activity</h3>
        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 text-sm font-medium">
          View all
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-3 py-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
            >
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.iconBg}`}>
                  <Icon size={16} className={activity.iconColor} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-foreground">{activity.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentActivity
