import React, { useState, useEffect } from 'react';
import { 
  Bell, Search, User, Settings, LogOut, Menu, X,
  Edit2, Trash2, Plus, Download, Filter, MoreVertical,
  Users, ShoppingCart, DollarSign, TrendingUp, Calendar,
  Mail, Clock, CheckCircle, XCircle, Activity
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from "sonner"

export default function AdminDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [deleteItem, setDelete] = useState({});
  const [data, setData] = useState([]);
  const [editForm, setEditForm] = useState({ name: '', email: '' });
  const [selectedUsers, setSelectedUsers] = useState([]);
const [update,setUpdate]=useState({})




  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditForm({ name: user.name, email: user.email });
  };

  const handleSave = async(id) => {


const resp=await axios.patch("/user/update",{id,editForm})

   console.log(id,editForm);

apiCall()
      setEditingId(null);
  };

  const handleDelete = async(id) => {
    const resp = await axios.delete(`/user/delete/registered/${id}`, id);
    console.log(id, resp);
    setDelete(resp);
  };

  const apiCall = async() => {
    console.log("called");
    const resp = await axios.get("/user/allRegistered");
    console.log(resp.data[0]);
    setData(resp.data[0]);
  }

  useEffect(() => {
    apiCall()
  }, [deleteItem])

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({ name: '', email: '' });
  };

  const stats = [
    { label: 'Total Register Users', value: data.length, change: '+12%', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Signup User', value: '1,234', change: '+8%', icon: ShoppingCart, color: 'from-purple-500 to-purple-600' },
    { label: 'Revenue', value: '$45.2K', change: '+23%', icon: DollarSign, color: 'from-green-500 to-green-600' },
    { label: 'Growth', value: '18.3%', change: '+5%', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
  ];

  const navigate = useNavigate();

  // Generate avatar color based on name
  const getAvatarColor = (name) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600',
      'from-green-500 to-green-600',
      'from-yellow-500 to-yellow-600',
      'from-violet-500 to-red-600',
      'from-indigo-500 to-indigo-600',
      'from-teal-500 to-teal-600',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 h-1"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
                  <p className="text-xs text-gray-500">Management Dashboard</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search users, orders, products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <button className="hidden md:relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <NavLink
                to="/admin"
                className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2
                           text-sm font-medium text-slate-700 shadow-sm
                           hover:bg-slate-100 hover:text-slate-900
                           transition-all duration-200"
              >
               signup user
              </NavLink>
              
              <button className="hidden sm:flex p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <Settings className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-semibold text-gray-800">Admin User</p>
                  <p className="text-xs text-gray-500">bakr@gmail.com</p>
                </div>
                <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AU
                </div>
              </div>

              <button 
                className="sm:flex p-2 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
                onClick={() => {
                  localStorage.removeItem("isAuthenticate");
                  navigate("/adminLogin")
                }}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 bg-linear-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-110`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-3 py-1.5 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-2">{stat.label}</h3>
              <p className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* User Cards Grid */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Section Header */}
          <div className="bg-linear-to-r from-indigo-50 via-purple-50 to-pink-50 px-6 py-5 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Users className="w-6 h-6 text-indigo-600" />
                  User Management
                </h2>
                <p className="text-sm text-gray-600 mt-1">Manage and monitor all registered users</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm">
                  <Download className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Export</span>
                </button>
                {/* <NavLink to="/register"> */}
                  <button className="flex items-center space-x-2 px-5 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-medium"><NavLink to={"/register"}>Register User</NavLink></span>
                  </button>
                {/* </NavLink> */}
              </div>
            </div>
          </div>

          {/* User Cards Grid */}
          <div className="p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((user) => (
                <div key={user.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group">
                  {/* Card Header with Gradient */}
                  <div className={`h-24 bg-linear-to-r ${getAvatarColor(user.name)} relative`}>
                    <div className="absolute -bottom-12 left-6">
                      <div className={`w-24 h-24 rounded-full bg-linear-to-br   flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-lg group-hover:scale-105 transition-transform`}>
                        <img src={user.profile_image} alt="" className='rounded-full'/>
                      </div>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-green-500 text-white shadow-lg">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Active
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-16 px-6 pb-6">
                    {editingId === user.id ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                          />
                        </div>
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => handleSave(user.id)}
                            className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancel}
                            className="flex-1 px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* User Info */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{user.name}</h3>
                          <div className="flex items-center text-gray-500 text-sm mb-3">
                            <Mail className="w-4 h-4 mr-1.5" />
                            {user.email}
                          </div>
                          
                          {/* Role Badge */}
                          <div className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                            <User className="w-3 h-3 mr-1" />
                            User
                          </div>
                        </div>

                        {/* Activity Info */}
                        <div className="border-t border-gray-200 pt-4 mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="flex items-center text-gray-600">
                              <Activity className="w-4 h-4 mr-1.5 text-indigo-500" />
                              Last Active
                            </span>
                            <span className="font-medium text-gray-800">
                              {user.lastActive || '2 hours ago'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-1.5 text-indigo-500" />
                              Joined
                            </span>
                            <span className="font-medium text-gray-800">
                              {user.created_at.slice(0,10) || 'Jan 15, 2024'}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(user)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all font-medium text-sm border border-blue-200"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              handleDelete(user.id);
                              toast.error("User deleted successfully");
                            }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-all font-medium text-sm border border-red-200"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {data.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-linear-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Users Found</h3>
                <p className="text-gray-500 mb-6">Get started by adding your first user</p>
                <NavLink to="/register">
                  <button className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                    <Plus className="w-4 h-4 inline mr-2" />
                    Add First User
                  </button>
                </NavLink>
              </div>
            )}
          </div>

          {/* Pagination Footer */}
          <div className="bg-white px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-indigo-600">{data.length}</span> of <span className="font-semibold text-indigo-600">{data.length}</span> users
              </p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}