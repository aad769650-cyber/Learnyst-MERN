import React, { useState } from 'react';
import { ChevronDown, Search, BookOpen, CreditCard, Users, Settings, MessageCircle, Award } from 'lucide-react';

export default function LearnystFAQ() {
  const [openCategory, setOpenCategory] = useState('getting-started');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, color: 'from-emerald-500 to-teal-600' },
    { id: 'courses', name: 'Course Creation', icon: Award, color: 'from-blue-500 to-cyan-600' },
    { id: 'payments', name: 'Payments & Pricing', icon: CreditCard, color: 'from-purple-500 to-pink-600' },
    { id: 'students', name: 'Student Management', icon: Users, color: 'from-orange-500 to-red-600' },
    { id: 'technical', name: 'Technical Support', icon: Settings, color: 'from-indigo-500 to-blue-600' },
    { id: 'features', name: 'Features', icon: MessageCircle, color: 'from-rose-500 to-pink-600' }
  ];

  const faqs = {
    'getting-started': [
      {
        question: 'What is Learnyst?',
        answer: 'Learnyst is a comprehensive learning management system (LMS) that enables educators, trainers, and organizations to create, sell, and manage online courses. It provides a complete platform for building your online education business with features including course creation tools, payment processing, student management, and mobile apps.'
      },
      {
        question: 'How do I create my first course on Learnyst?',
        answer: 'To create your first course: 1) Sign up and log into your Learnyst account, 2) Navigate to the "Courses" section in your dashboard, 3) Click "Create New Course", 4) Fill in course details including title, description, and pricing, 5) Upload your course content (videos, PDFs, quizzes), 6) Organize content into sections and lessons, 7) Preview and publish your course. The intuitive interface guides you through each step.'
      },
      {
        question: 'Do I need technical knowledge to use Learnyst?',
        answer: 'No technical knowledge is required! Learnyst is designed to be user-friendly and intuitive. The platform features a drag-and-drop interface, pre-built templates, and step-by-step wizards that make course creation simple. However, advanced users can customize further using HTML/CSS if desired.'
      },
      {
        question: 'How long does it take to set up my online school?',
        answer: 'You can have your basic online school set up in as little as 30 minutes. This includes creating your account, customizing your branding, and uploading your first course. However, we recommend taking time to fully customize your platform, add detailed course content, and test the student experience for the best results.'
      }
    ],
    'courses': [
      {
        question: 'What types of content can I upload to my courses?',
        answer: 'Learnyst supports multiple content formats including video files (MP4, MOV, AVI), audio files, PDF documents, PowerPoint presentations, Word documents, images, SCORM packages, and embedded content from YouTube, Vimeo, and other platforms. You can also create interactive quizzes, assignments, and live sessions.'
      },
      {
        question: 'Can I drip-feed course content to students?',
        answer: 'Yes! Learnyst offers flexible content release scheduling. You can drip-feed content based on enrollment date, specific calendar dates, or when students complete previous lessons. This helps maintain student engagement and prevents overwhelm by releasing material gradually.'
      },
      {
        question: 'How do I create quizzes and assessments?',
        answer: 'Creating quizzes is straightforward: Navigate to your course, add a new lesson, select "Quiz" as the content type, then add questions. Learnyst supports multiple question types including multiple choice, true/false, fill-in-the-blank, and essay questions. You can set passing scores, time limits, randomize questions, and provide instant feedback.'
      },
      {
        question: 'Can I offer certificates to my students?',
        answer: 'Absolutely! Learnyst includes a built-in certificate generator. You can design custom certificates with your branding, set completion criteria, and automatically issue certificates when students complete courses or achieve certain scores. Certificates are downloadable and can be shared on social media.'
      },
      {
        question: 'Is there a limit to the number of courses I can create?',
        answer: 'The number of courses you can create depends on your subscription plan. Most plans offer unlimited course creation, allowing you to build and expand your course catalog as your business grows. Check your specific plan details for any limitations.'
      }
    ],
    'payments': [
      {
        question: 'What payment gateways does Learnyst support?',
        answer: 'Learnyst integrates with major payment gateways including Razorpay, PayPal, Stripe, Instamojo, PayU, and CCAvenue. This allows you to accept payments from students worldwide using credit cards, debit cards, net banking, UPI, and digital wallets. Multiple gateway options ensure maximum payment success rates.'
      },
      {
        question: 'What pricing models can I use for my courses?',
        answer: 'Learnyst supports flexible pricing models: one-time payment (students pay once for lifetime access), subscription-based pricing (monthly or annual recurring payments), installment plans (pay in multiple parts), free courses with upsells, and tiered pricing (different prices for different access levels). You can also offer coupons and promotional discounts.'
      },
      {
        question: 'How and when do I receive payments?',
        answer: 'Payments are processed through your connected payment gateway account. The settlement timeline depends on your payment processor (typically 2-7 business days). Learnyst does not hold your money – funds go directly to your account. The platform charges a commission or subscription fee depending on your plan.'
      },
      {
        question: 'Can I offer refunds to students?',
        answer: 'Yes, you can process refunds directly through your Learnyst dashboard. You have full control over your refund policy and can choose to offer full or partial refunds. Refunds are processed through the original payment method, and you can set automated refund rules based on your policy.'
      },
      {
        question: 'Are there any transaction fees?',
        answer: 'Transaction fees vary by payment gateway (typically 2-3% plus a small fixed fee). Learnyst itself charges either a commission on sales or a flat subscription fee, depending on your chosen plan. The Plus and Pro plans typically offer lower or no commission rates compared to free plans.'
      }
    ],
    'students': [
      {
        question: 'How do students access their courses?',
        answer: 'Students can access courses through your custom-branded website, mobile apps (iOS and Android available on higher plans), or the Learnyst web player. Once enrolled, they receive login credentials and can access their learning dashboard anytime, anywhere. Progress is synced across all devices.'
      },
      {
        question: 'Can I communicate with my students?',
        answer: 'Yes! Learnyst provides multiple communication channels: announcement system for broadcasting updates, email marketing tools for sending campaigns, discussion forums for community interaction, direct messaging, comment sections on lessons, and push notifications through mobile apps. You can engage students throughout their learning journey.'
      },
      {
        question: 'How do I track student progress?',
        answer: 'The analytics dashboard provides comprehensive insights including course completion rates, quiz scores, time spent on lessons, login frequency, and engagement metrics. You can view individual student progress or aggregate data across all learners. Export reports in CSV format for further analysis.'
      },
      {
        question: 'Can I create student groups or cohorts?',
        answer: 'Yes, you can organize students into groups or cohorts for more targeted teaching. This is useful for running live batches, creating peer learning groups, offering group discounts, or segmenting students by skill level. Each group can have specific access permissions and communication channels.'
      },
      {
        question: 'What happens if a student forgets their password?',
        answer: 'Students can easily reset their password using the "Forgot Password" link on the login page. They\'ll receive a reset link via email. As an admin, you can also manually reset passwords or resend activation emails from your dashboard if students encounter issues.'
      }
    ],
    'technical': [
      {
        question: 'Can I use my own domain name?',
        answer: 'Yes! Learnyst allows you to connect your custom domain (e.g., learn.yourwebsite.com) on most paid plans. This helps maintain your brand identity. The platform provides step-by-step instructions for updating DNS records, and the setup typically takes 24-48 hours for propagation.'
      },
      {
        question: 'Is the platform mobile-responsive?',
        answer: 'Absolutely! All Learnyst websites are fully mobile-responsive, ensuring students have a seamless experience on smartphones and tablets. Higher-tier plans also include native mobile apps (iOS and Android) with your branding, offering an even better mobile learning experience with offline viewing capabilities.'
      },
      {
        question: 'How secure is my data on Learnyst?',
        answer: 'Learnyst takes security seriously with SSL encryption for all data transmission, secure payment processing (PCI-DSS compliant), regular backups, DRM protection for video content to prevent downloading, restricted access controls, and compliance with data protection regulations. Your content and student data are protected with enterprise-grade security.'
      },
      {
        question: 'Can I integrate Learnyst with other tools?',
        answer: 'Yes! Learnyst offers integrations with popular tools including Google Analytics for tracking, Facebook Pixel for marketing, Zapier for automation, email marketing platforms (Mailchimp, ConvertKit), Zoom for live classes, and webhooks for custom integrations. API access is available on higher plans for advanced integrations.'
      },
      {
        question: 'What if I need help or technical support?',
        answer: 'Learnyst provides multiple support channels: email support (response within 24 hours), live chat during business hours, comprehensive knowledge base with tutorials and guides, video tutorials, and webinars. Priority support with faster response times is available on higher-tier plans. The community forum also offers peer-to-peer assistance.'
      },
      {
        question: 'Can I migrate my existing courses from another platform?',
        answer: 'Yes, Learnyst supports course migration from other platforms. You can import SCORM packages or manually upload your content. The support team can assist with bulk migration for large course libraries. Student data can also be imported via CSV files, making the transition smooth.'
      }
    ],
    'features': [
      {
        question: 'Does Learnyst support live classes?',
        answer: 'Yes! Learnyst integrates with Zoom, Google Meet, and other live streaming platforms. You can schedule live classes, send automatic reminders to students, record sessions for later viewing, and manage attendance. Live classes can be combined with self-paced content for blended learning experiences.'
      },
      {
        question: 'Can I create a membership or subscription site?',
        answer: 'Absolutely! Learnyst supports membership models where students pay monthly or annual fees for access to your entire course library. You can create different membership tiers with varying access levels, add or remove courses from memberships, and manage recurring billing automatically.'
      },
      {
        question: 'Is there an affiliate or referral program feature?',
        answer: 'Yes, Learnyst includes built-in affiliate management tools. You can recruit affiliates, provide them with unique tracking links, set commission rates (percentage or fixed amount), track sales and payouts, and manage affiliate relationships all within the platform. This helps you expand your reach through partner marketing.'
      },
      {
        question: 'Can students interact with each other?',
        answer: 'Yes! Community features include discussion forums where students can ask questions and share insights, comment sections on individual lessons, direct messaging between students (if enabled), study groups, and leaderboards for gamification. This fosters peer-to-peer learning and increases engagement.'
      },
      {
        question: 'Does Learnyst have marketing tools?',
        answer: 'Yes! Built-in marketing features include landing page builder, coupon and discount code creation, email marketing campaigns, abandoned cart recovery, upsell and cross-sell suggestions, referral programs, SEO optimization tools, and integration with Facebook and Google Ads. These tools help you attract and convert more students.'
      },
      {
        question: 'Can I white-label the platform?',
        answer: 'Yes, higher-tier plans offer white-labeling options. You can customize the platform with your logo, colors, domain name, and branding throughout the entire student experience. There are no "Powered by Learnyst" badges on white-label plans, ensuring a completely branded experience that reflects your school\'s identity.'
      }
    ]
  };

  const toggleQuestion = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  const filterFAQs = () => {
    if (!searchTerm) return faqs;
    
    const filtered = {};
    Object.keys(faqs).forEach(category => {
      const matchingQuestions = faqs[category].filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchingQuestions.length > 0) {
        filtered[category] = matchingQuestions;
      }
    });
    return filtered;
  };

  const filteredFAQs = filterFAQs();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight">Learnyst FAQ</h1>
          </div>
          <p className="text-xl text-indigo-100 max-w-2xl font-light">
            Find answers to common questions about building and managing your online school
          </p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-none focus:outline-none focus:ring-0 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sticky top-6">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Categories</h3>
              <nav className="space-y-1">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = openCategory === category.id;
                  const hasResults = filteredFAQs[category.id]?.length > 0;
                  
                  if (searchTerm && !hasResults) return null;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setOpenCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-linear-to-r ' + category.color + ' text-white shadow-lg scale-105'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span className="font-medium text-sm text-left">{category.name}</span>
                      {searchTerm && hasResults && (
                        <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                          isActive ? 'bg-white/30' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {filteredFAQs[category.id].length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="md:col-span-3">
            {Object.keys(filteredFAQs).length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">No results found</h3>
                <p className="text-slate-500">Try adjusting your search terms or browse by category</p>
              </div>
            ) : (
              <div className="space-y-6">
                {categories.map((category) => {
                  if (openCategory !== category.id || !filteredFAQs[category.id]) return null;
                  
                  return (
                    <div key={category.id} className="space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 bg-linear-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">{category.name}</h2>
                      </div>
                      
                      {filteredFAQs[category.id].map((faq, index) => {
                        const isOpen = openQuestion === `${category.id}-${index}`;
                        
                        return (
                          <div
                            key={index}
                            className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                          >
                            <button
                              onClick={() => toggleQuestion(`${category.id}-${index}`)}
                              className="w-full flex items-start justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                              <span className="text-lg font-semibold text-slate-800 pr-8">
                                {faq.question}
                              </span>
                              <ChevronDown
                                className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                isOpen ? 'max-h-96' : 'max-h-0'
                              }`}
                            >
                              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Our support team is ready to help you succeed with your online school
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Support
            </button>
        
          </div>
        </div>
      </div>
    </div>
  );
}