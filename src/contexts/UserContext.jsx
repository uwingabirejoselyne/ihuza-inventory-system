/* eslint-disable react-refresh/only-export-components */
 

import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "jose@gmail.com",
      password: "password123",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@ihuza.com",
      password: "sarahpass",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@ihuza.com",
      password: "michaelpass",
      role: "Staff",
      status: "Active",
      lastLogin: "1 day ago",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@ihuza.com",
      password: "emilypass",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@ihuza.com",
      password: "davidpass",
      role: "Staff",
      status: "Active",
      lastLogin: "6 hours ago",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.a@ihuza.com",
      password: "lisapass",
      role: "Manager",
      status: "Active",
      lastLogin: "30 min ago",
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "r.taylor@ihuza.com",
      password: "robertpass",
      role: "Staff",
      status: "Active",
      lastLogin: "2 days ago",
    },
    {
      id: 8,
      name: "Jennifer Miller",
      email: "j.miller@ihuza.com",
      password: "jenniferpass",
      role: "Staff",
      status: "Active",
      lastLogin: "4 hours ago",
    },
    {
      id: 9,
      name: "Christopher Lee",
      email: "c.lee@ihuza.com",
      password: "chrispass",
      role: "Admin",
      status: "Active",
      lastLogin: "1 hour ago",
    },
    {
      id: 10,
      name: "Amanda White",
      email: "a.white@ihuza.com",
      password: "amandapass",
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
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
