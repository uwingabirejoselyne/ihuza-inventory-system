/* eslint-disable react-refresh/only-export-components */
 

import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "1 day ago",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "6 hours ago",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.a@ihuza.com",
      role: "Manager",
      status: "Active",
      lastLogin: "30 min ago",
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "r.taylor@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "2 days ago",
    },
    {
      id: 8,
      name: "Jennifer Miller",
      email: "j.miller@ihuza.com",
      role: "Staff",
      status: "Active",
      lastLogin: "4 hours ago",
    },
    {
      id: 9,
      name: "Christopher Lee",
      email: "c.lee@ihuza.com",
      role: "Admin",
      status: "Active",
      lastLogin: "1 hour ago",
    },
    {
      id: 10,
      name: "Amanda White",
      email: "a.white@ihuza.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 week ago",
    },
  ])

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: Date.now() }])
  }

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setUsers((prev) => prev.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)))
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
        updateUser,
        totalUsers: users.length,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
