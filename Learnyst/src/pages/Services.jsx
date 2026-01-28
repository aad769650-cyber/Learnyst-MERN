import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Shield, Zap, BarChart3, Globe, Code, Cpu } from 'lucide-react'; // Using Lucide for clean icons

const Services = () => {

    const navigate=useNavigate()

const apiCall=async()=>{
try {
      const res=await axios.get("/user/services/")
console.log("1",res);

    if (res.status==201) {




        
        const resp=await axios.get("/refresh")


        console.log("2",resp);
        
    if (resp.status==201) {
navigate("/login")
console.log(resp);

    }else{
// navigate("/services")
    }

 

    }
} catch (error) {
    console.log("err",error);
    
}
}


useEffect(()=>{
    apiCall()
})

  
  const services = [
    {
      title: "Custom Software Development",
      description: "Scalable, robust solutions tailored to your specific business logic and user needs.",
      icon: <Code className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Cloud Infrastructure",
      description: "Modernizing your architecture with secure, high-availability cloud deployment.",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Data Analytics & BI",
      description: "Turning raw data into actionable insights with professional visualization tools.",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
            Our Expertise
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Future-Proof Your <span className="text-blue-600">Digital Ecosystem</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
            Learnyst delivers high-performance solutions designed to scale. We blend 
            technical excellence with strategic thinking to solve your toughest challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Start a Project
            </button>
       
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-300">
              <div className="mb-6 p-3 bg-blue-50 w-fit rounded-xl  group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Learnyst Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Why Learnyst is the right partner for your growth.</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We don't just write code; we build business value. Our methodology 
                ensures your product is launched on time and built to last.
              </p>
              <ul className="space-y-4">
                {[
                  "Agile development cycles",
                  "Security-first mindset",
                  "Dedicated 24/7 technical support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Shield className="text-blue-400 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="h-64 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-blue-400">99.9%</span>
                    <p className="text-sm text-slate-400">Uptime Rate</p>
                  </div>
               </div>
               <div className="h-64 mt-8 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white">150+</span>
                    <p className="text-sm text-blue-100">Projects Delivered</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Ready to transform your business?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Let’s discuss your goals and how Learnyst can help you achieve them.
          </p>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
         <NavLink to={"/register"}>Get in Touch</NavLink>
          </button>
        </div>
      </section>
    </div>
  
  )
}

export default Services