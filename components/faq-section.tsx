"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is School Management Software?",
    answer: "School management software is a platform that helps in automating and streamlining the institute's daily academic and administrative activities in the most effective manner. At its core, school management software holds all institute data in one place and helps stakeholders in making a better decision. School Software helps in improving the productivity of their institution by managing online admission, student attendance, online fee payment, timetable, parent communication, examination management, payroll, and online learning. The school ERP platform also offers many other 50+ features that help institutes in handling every operation smoothly and efficiently."
  },
  {
    question: "Why do institutes need School Software?",
    answer: "With School Software, institutes can avoid manual handling operations, eliminate the paperwork, reduce the possibility of errors in the process and minimize monotonous tasks of all departments. By embracing the right school management system software the workload of employees can be reduced and various tasks can be completed without consuming too much time & effort."
  },
  {
    question: "How can schools benefit from e-learning modules in School Software?",
    answer: "Benefits of having an E-learning module in school management system are - Institutes can deliver a better learning experience to students beyond classroom boundaries. Teachers can create media-rich customised courses and resolve students doubts in real-time. Students can download the study material and watch the recorded lectures at the comfort of their home."
  },
  {
    question: "Who uses School Software?",
    answer: "School ERP Platform is generally used by students, teachers, parents, admin and other staff members in the institution. It reduces the burden of repetitive tasks of employees, simplifies communication among all stakeholders and allows stakeholders to access up-to-date information from anywhere at any time on any device."
  },
  {
    question: "How much does School Management Software cost?",
    answer: "There are multiple ERP platforms available in the market and the costing of each platform depends on features and plugins selected by the institution - like SMS, Mobile App, Biometric, Vehicle Tracking System, Payment Gateway, Video conferencing integration, E-learning platform and more. EduLives is the most affordable platform and offers School ERP plans for all type of institutes."
  },
  {
    question: "How do I choose School ERP?",
    answer: "Here are some key points that you should consider when selecting School ERP platform for your institution: Assess the need of your institution: Analyse your institution's requirements and assess how it can help you in achieving your business goal. Easy to Use: Make sure that platform has easy to use functionality, quick to master, without the need for hours of training or troubleshooting. End User Training: To ensure that stakeholders actually use the ERP software it is crucial to provide extensive training to all staff members. Look for Demo: Ask the vendor to provide a thorough demo of the product to understand how it can be useful to your business. No Hidden Cost: Before you purchase a School ERP, make sure to check maintenance, implementation and other costs upfront with your vendor. Read Online Reviews: Check the product review on a software review platform to understand the current experience of the product user."
  },
  {
    question: "What are the key features of School Management Software?",
    answer: "The key features of school management software: Students Admission - Streamline students admission process, reduce paperwork by storing student's and parent's records in a digital format, monitor admission enquiries and track applicant status from a single platform. Student Attendance - Automate students attendance tracking, track latecomers and leave requests just in a few clicks. With Biometric device integration, monitor students movement in real time within school premises. Online Fees Management - Completely digitize students fees collection process by integrating it with payment gateway, track fee defaulters and instant alerts to parents regarding pending fees. Examination Management - Conduct online examination, automate students grade calculation, generate various types of reports, share results with students and parents in real-time and much more. HR and Payroll Management - With the school HR management system, institutes can organise and store all employees details in one place. Easily manage employees' leave, payroll generation, payslip generation and more. Apart from these key features, the school management system comes with 50+ other features which helps in managing every aspect of the institution."
  },
  {
    question: "Which is the best School Management Software?",
    answer: "EduLives is the world's most trusted, affordable & popular school management system. With thousands of users worldwide, EduLives is available in 20+ languages. To increase the functionality & capability of EduLives, it easily integrates with various ranges of software. Create an account for free today and see for yourself how EduLives can reduce the workload of your employees and boost the overall productivity of your institution."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">FAQs on School Management Software</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg px-8 py-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Get Started for Free Today</div>
              <div className="text-gray-600 mt-2">Join millions of users who have shared that EduLives provides 99% Customer Support Satisfaction.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 