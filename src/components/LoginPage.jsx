import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { LoginUserContext } from "../contexts/LoginUserContext"
import { Package, Eye, EyeOff, Lock, Mail } from "lucide-react"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { users } = useContext(UserContext)
  const { login } = useContext(LoginUserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      )
      if (foundUser) {
        login({
          id: foundUser.id,
          username: foundUser.name,
          email: foundUser.email,
          role: foundUser.role,
        })
        navigate("/dashboard")
      } else {
        setError("Invalid email or password. Please try again.")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0  from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0  opacity-20"></div>
        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white opacity-5 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-4">
              <Package className="text-white text-3xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">IHUZA</h1>
            <p className="text-gray-600 text-sm font-medium">INVENTORY SYSTEM</p>
            <p className="text-gray-500 text-sm mt-2">Sign in to access your dashboard</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-blue-800 text-sm font-medium mb-2">Demo Credentials:</p>
            <div className="text-blue-700 text-xs space-y-1">
              <p><strong>Admin:</strong> john.smith@ihuza.com / password123</p>
              <p><strong>Manager:</strong> sarah.j@ihuza.com / sarahpass</p>
              <p><strong>Staff:</strong> m.brown@ihuza.com / michaelpass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 