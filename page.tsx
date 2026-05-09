"use client";

import React, { useState } from 'react';

export default function ProfessionalDashboard() { 
  const [activeTab, setActiveTab] = useState('Overview');

  // Reliable Unsplash images with good CORS headers for WebContainers
  const teamImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format&q=80"
  ];

  return (
    <div className="relative min-h-screen text-slate-100 font-sans overflow-hidden flex">

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous" // 🚨 Crucial for WebContainers
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* BLUR OVERLAY (Creates the professional glass effect) */}
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md -z-10"></div>

      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-slate-800/50 bg-slate-900/40 hidden md:flex flex-col p-4 shadow-2xl">
        <div className="flex items-center gap-3 mb-10 px-4 py-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
            ⚡
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            DataDash
          </span>
        </div>

        <nav className="flex flex-col gap-2">
          {['Overview', 'Analytics', 'Customers', 'Settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${activeTab === tab
                  ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-500/20 border border-blue-500/50'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 border border-transparent'
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 lg:p-10 h-screen overflow-y-auto">

        {/* HEADER */}
        <header className="flex justify-between items-center mb-10 pb-6 border-b border-slate-800/50">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Dashboard {activeTab}
            </h1>
            <p className="text-slate-400 text-sm">
              Welcome back! Here is what is happening with your projects today.
            </p>
          </div>

          {/* USER PROFILE IMAGE */}
          <div className="flex items-center gap-4">
            <button className="p-2 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-colors border border-slate-700">
              🔔
            </button>
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden shadow-lg shadow-blue-500/20">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
                crossOrigin="anonymous" // 🚨 Crucial for WebContainers
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Total Revenue', value: '$45,231', trend: '+20.1%', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { label: 'Active Users', value: '2,314', trend: '+15.2%', color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { label: 'New Signups', value: '841', trend: '-2.3%', color: 'text-rose-400', bg: 'bg-rose-400/10' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl">
              <p className="text-slate-400 text-sm font-medium mb-3">{stat.label}</p>
              <div className="flex justify-between items-end">
                <h3 className="text-4xl font-bold text-white tracking-tight">{stat.value}</h3>
                <span className={`${stat.color} ${stat.bg} text-xs font-bold px-2.5 py-1 rounded-lg`}>
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE GALLERY / RECENT TEAM */}
        <h2 className="text-xl font-bold text-white mb-6">Active Team Members</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamImages.map((imgUrl, index) => (
            <div key={index} className="group relative bg-slate-800/40 rounded-2xl border border-slate-700/50 overflow-hidden aspect-square shadow-lg cursor-pointer">
              <img
                src={imgUrl}
                crossOrigin="anonymous" // 🚨 Crucial for WebContainers
                alt={`Team Member ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-5 left-5">
                <p className="font-bold text-white text-lg drop-shadow-md">Member {index + 1}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                  <p className="text-xs text-slate-300 font-medium">Online now</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}