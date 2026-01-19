'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnimatedHomeContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const difficultyLevels = [
    { 
      level: 'below-level', 
      label: 'Below-Level', 
      subLabel: 'Easy',
      color: 'from-emerald-500 to-green-600', 
      hoverColor: 'hover:from-emerald-600 hover:to-green-700',
      shadow: 'shadow-emerald-500/50',
    },
    { 
      level: 'on-level', 
      label: 'On-Level', 
      subLabel: 'Medium',
      color: 'from-blue-500 to-cyan-600', 
      hoverColor: 'hover:from-blue-600 hover:to-cyan-700',
      shadow: 'shadow-blue-500/50',
    },
    { 
      level: 'above-level', 
      label: 'Above-Level', 
      subLabel: 'Hard',
      color: 'from-red-500 to-orange-600', 
      hoverColor: 'hover:from-red-600 hover:to-orange-700',
      shadow: 'shadow-red-500/50',
    },
  ];

  const features = [
    {
      title: 'Aligned with Standards',
      description: 'All questions follow Indiana Academic Standards',
      gradient: 'from-cyan-400 to-blue-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Instant Scoring',
      description: 'Get immediate feedback after submission',
      gradient: 'from-yellow-400 to-orange-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Multiple Formats',
      description: 'Multiple choice, passage-based, and writing tasks',
      gradient: 'from-purple-400 to-pink-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Practice & Prepare',
      description: 'Simulate the real iLearn assessment experience',
      gradient: 'from-green-400 to-teal-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  // SVG Icons
  const MathIcon = () => (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );

  const BookIcon = () => (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const ChartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const TriangleIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-bounce-slow">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src="/iLearnLogo.png"
                      alt="iLearn Logo"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg leading-tight animate-fade-in">
                <span className="inline-block animate-slide-in-left">Indiana iLearn</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 animate-slide-in-left delay-200">
                  4th Grade Practice Exams
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold mb-2 animate-fade-in delay-300">
                Practice Assessments - Aligned with Indiana State Standards
              </p>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-500">
                Free practice exams for Mathematics and English Language Arts. 
                Build confidence and prepare for success with real exam-style questions.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
              <Image
                src="/360f2268659604icxo3nduxkus3qgyb0jm5g26nrz36dy-1706005957048-compressed.jpg"
                alt="Students learning"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Selection Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
              Choose Your Subject
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Select Mathematics or English Language Arts to begin your practice exam
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {/* Mathematics Card */}
            <div className={`glass-dark rounded-3xl shadow-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-cyan-500/50 animate-fade-in-up delay-300`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-4 shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="relative z-10 text-white animate-pulse-slow">
                    <MathIcon />
                  </div>
                  <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Mathematics</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/80 text-sm sm:text-base">
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                    <ChartIcon />
                    <span>44 Questions</span>
                  </span>
                  <span className="hidden sm:inline text-white/40">•</span>
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                    <ClockIcon />
                    <span>70-100 Minutes</span>
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {difficultyLevels.map((difficulty, index) => (
                  <Link 
                    key={difficulty.level}
                    href={`/exam/${difficulty.level}`}
                    className={`block w-full bg-gradient-to-r ${difficulty.color} ${difficulty.hoverColor} text-white font-semibold py-3 sm:py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg ${difficulty.shadow} transform group relative overflow-hidden animate-fade-in-up`}
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {difficulty.level === 'below-level' && <CheckIcon />}
                        {difficulty.level === 'on-level' && <StarIcon />}
                        {difficulty.level === 'above-level' && <TriangleIcon />}
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                        <span>{difficulty.label}</span>
                        <span className="text-sm opacity-90">({difficulty.subLabel})</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-sm sm:text-base text-white/70 text-center bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="font-semibold mb-1">Covers:</p>
                <p>Number Sense, Computation, Geometry, Measurement, Data Analysis</p>
              </div>
            </div>

            {/* ELA Card */}
            <div className={`glass-dark rounded-3xl shadow-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/50 animate-fade-in-up delay-400`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="relative z-10 text-white animate-pulse-slow">
                    <BookIcon />
                  </div>
                  <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">English Language Arts</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/80 text-sm sm:text-base">
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                    <ChartIcon />
                    <span>40 Questions</span>
                  </span>
                  <span className="hidden sm:inline text-white/40">•</span>
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                    <ClockIcon />
                    <span>90 Minutes</span>
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {difficultyLevels.map((difficulty, index) => (
                  <Link 
                    key={difficulty.level}
                    href={`/ela/${difficulty.level}`}
                    className={`block w-full bg-gradient-to-r ${difficulty.color} ${difficulty.hoverColor} text-white font-semibold py-3 sm:py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg ${difficulty.shadow} transform group relative overflow-hidden animate-fade-in-up`}
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {difficulty.level === 'below-level' && <CheckIcon />}
                        {difficulty.level === 'on-level' && <StarIcon />}
                        {difficulty.level === 'above-level' && <TriangleIcon />}
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                        <span>{difficulty.label}</span>
                        <span className="text-sm opacity-90">({difficulty.subLabel})</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-sm sm:text-base text-white/70 text-center bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="font-semibold mb-1">Covers:</p>
                <p>Reading Foundations, Reading Comprehension, Vocabulary, Grammar, Writing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="glass-dark rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 animate-gradient-x"></div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center relative z-10 animate-fade-in-up">
              Why Practice with Us?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative z-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 sm:p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/10 group relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                  <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-4 shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 relative z-10">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-white/70 relative z-10">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center relative z-10">
              <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto">
                These practice exams are designed to simulate the Indiana iLearn assessment format.
                All questions align with Indiana Academic Standards for Grade 4.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Image Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
            <Image
              src="/assesment-interim-analysis.jpg"
              alt="Assessment analysis"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-900/30 to-transparent flex items-end">
              <div className="p-6 sm:p-8 lg:p-12 text-white transform transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                  Track Your Progress
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
                  Get detailed feedback and insights to improve your performance on the actual iLearn assessment.
                </p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
              <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full animate-float-delayed"></div>
          </div>
        </div>
      </section>
    </>
  );
}

