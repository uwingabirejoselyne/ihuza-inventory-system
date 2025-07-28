/* eslint-disable react-refresh/only-export-components */
"use client"

import { createContext, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: "Laptops",
      status: "In Stock",
      dateAdded: "Dec 10, 2024",
      assigned: false,
      assignedTo: null,
    },
    {
      id: 2,
      name: "iPad Air",
      category: "Tablets",
      status: "In Stock",
      dateAdded: "Dec 7, 2024",
      assigned: false,
      assignedTo: null,
    },
    {
      id: 3,
      name: "Dell XPS 13",
      category: "Laptops",
      status: "In Stock",
      dateAdded: "Dec 9, 2024",
      assigned: false,
      assignedTo: null,
    },
    {
      id: 4,
      name: "Surface Pro 9",
      category: "Tablets",
      status: "Out of Stock",
      dateAdded: "Dec 6, 2024",
      assigned: false,
      assignedTo: null,
    },
    {
      id: 5,
      name: "iPhone 15 Pro",
      category: "Mobile",
      status: "Low Stock",
      dateAdded: "Dec 8, 2024",
      assigned: false,
      assignedTo: null,
    },
    {
      id: 6,
      name: "Dell ThinkPad X1 Carbon",
      category: "Laptops",
      status: "In Stock",
      dateAdded: "Dec 3, 2024",
      assigned: true,
      assignedTo: "Sarah Johnson",
    },
    {
      id: 7,
      name: "Apple MacBook Air M2",
      category: "Laptops",
      status: "In Stock",
      dateAdded: "Dec 2, 2024",
      assigned: true,
      assignedTo: "Michael Brown",
    },
  ])

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now(), assigned: false, assignedTo: null }])
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product)))
  }

  const assignProduct = (productId, userId, userName) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, assigned: true, assignedTo: userName } : product,
      ),
    )
  }

  const unassignProduct = (productId) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === productId ? { ...product, assigned: false, assignedTo: null } : product)),
    )
  }

  const getAssignedProducts = () => products.filter((product) => product.assigned)
  const getUnassignedProducts = () => products.filter((product) => !product.assigned)

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
        assignProduct,
        unassignProduct,
        totalProducts: products.length,
        assignedProducts: getAssignedProducts().length,
        unassignedProducts: getUnassignedProducts().length,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
