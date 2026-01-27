import React, { useState } from 'react';
import { 
  User, Mail, Lock, BookOpen, Upload, Eye, EyeOff, 
  CheckCircle, GraduationCap, Code, Smartphone, Brain,
  Database, Shield, Zap
} from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios'
import { useNavigate} from "react-router"
export default function LeranystRegistration() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    course: '',
    ProfileImage:""
  });
  
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const courses = [
    { id: 'ai-ml', name: 'Artificial Intelligence & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'web-dev', name: 'Full Stack Web Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'app-dev', name: 'Mobile App Development', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
    { id: 'data-science', name: 'Data Science & Analytics', icon: Database, color: 'from-orange-500 to-red-500' },
    { id: 'cybersecurity', name: 'Cybersecurity & Ethical Hacking', icon: Shield, color: 'from-indigo-500 to-purple-500' },
    { id: 'cloud-devops', name: 'Cloud Computing & DevOps', icon: Zap, color: 'from-yellow-500 to-orange-500' },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        setErrors({ ...errors, image: 'Image size should be less than 5MB' });
        return;
      }

      setFormData((form)=>{
        return {...form,ProfileImage:file}
      })
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setErrors({ ...errors, image: null });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.ProfileImage) newErrors.image = 'ProfileImage is required';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };






const apiCall=async(actualFormData)=>{

  // console.log("api",fo);
  

const resp=await axios.post("/user/register",actualFormData)

console.log("resp",resp);

}











  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.course) {
      setErrors({ ...errors, course: 'Please select a course' });
      return;
    }






    
    console.log('Registration Data:', { ...formData, profileImage },formData);
    toast.success('Course enrollment successful! Welcome to Leranyst 🎉');



const actualFormData=new FormData()


actualFormData.append("ProfileImage",formData.ProfileImage)
actualFormData.append("name",formData.name)
actualFormData.append("email",formData.email)
actualFormData.append("password",formData.password)
actualFormData.append("confirmPassword",formData.confirmPassword)
actualFormData.append("course",formData.course)



    apiCall(actualFormData)


setFormData({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    course: '',
    ProfileImage:""
  })

  navigate("/")
  };

  const nextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Registration Card */}
      <div className="relative w-full max-w-5xl">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Branding */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-700 p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h1 className="text-3xl font-bold">Leranyst</h1>
                </div>

                <h2 className="text-4xl font-bold mb-4">Enroll in Your Course</h2>
                <p className="text-white/90 text-lg mb-8">
                  Register now to start learning and building your skills in cutting-edge technologies.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Expert Instructors</h3>
                      <p className="text-white/80 text-sm">Learn from industry professionals with real-world experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Hands-on Projects</h3>
                      <p className="text-white/80 text-sm">Build real applications and portfolio-worthy projects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Career Support</h3>
                      <p className="text-white/80 text-sm">Get placement assistance and career guidance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-white/80 text-sm">Already enrolled?</p>
                  <a href="#" className="text-white font-semibold hover:underline">Access your course →</a>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-20 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Right Side - Form */}
            <form className="bg-white p-8 md:p-12" onSubmit={handleSubmit}>
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    currentStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    1
                  </div>
                  <div className={`w-16 h-1 rounded ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    currentStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {currentStep === 1 ? 'Student Information' : 'Choose Your Course'}
              </h3>
              <p className="text-gray-600 text-center mb-8">
                {currentStep === 1 ? 'Enter your details for course enrollment' : 'Select the program you want to enroll in'}
              </p>

              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  {/* Profile Image Upload */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-12 h-12 text-white" />
                        )}
                      </div>
                      <label className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors shadow-lg">
                        <Upload className="w-4 h-4 text-white" />
                        <input
                          type="file"
                          onChange={handleImageUpload}
                          className="hidden"
                          name="ProfileImage"


                        />
                      </label>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Upload your photo</p>
                    {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Re-enter your password"
                        className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>

                  <button
                    onClick={nextStep}
                    className="w-full py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Next: Select Course
                  </button>
                </div>
              )}

              {/* Step 2: Course Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto pr-2">
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, course: course.id })}
                        className={`relative p-4 border-2 rounded-xl text-left transition-all hover:shadow-lg ${
                          formData.course === course.id
                            ? 'border-indigo-600 bg-indigo-50'
                            : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-linear-to-br ${course.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                            <course.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-1">{course.name}</h4>
                            <p className="text-sm text-gray-600">Enroll in this course to get started</p>
                          </div>
                          {formData.course === course.id && (
                            <CheckCircle className="w-6 h-6 text-indigo-600 shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Complete Enrollment
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}