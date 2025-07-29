import { useUsers } from "../hooks/useAppContext"

 


const UserTable = () => {
  const { users, deleteUser } = useUsers()

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "text-red-600 bg-red-100 dark:bg-red-700 dark:text-red-300"
      case "Manager":
        return "text-blue-600 bg-blue-100 dark:bg-blue-700 dark:text-blue-300"
      case "Staff":
        return "text-green-600 bg-green-100 dark:bg-green-700 dark:text-green-300"
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  const getStatusColor = (status) => {
    return status === "Active"
      ? "text-green-600 bg-green-100 dark:bg-green-700 dark:text-green-300"
      : "text-red-600 bg-red-100 dark:bg-red-700 dark:text-red-300"
  }

  return (
    <div className=" bg-card rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Users</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-card divide-y divide-gray-200 dark:divide-gray-700">
            {users.slice(0, 10).map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 dark:text-blue-200 font-semibold text-sm">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-foreground">{user.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-300 dark:hover:text-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 text-sm font-medium">
          View all
        </button>
      </div>
    </div>
  )
}

export default UserTable
