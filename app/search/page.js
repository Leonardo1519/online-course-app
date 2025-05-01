'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // 模拟热门搜索数据
  const popularSearches = [
    "project management",
    "machine learning",
    "data analytics",
    "digital marketing",
    "cybersecurity",
    "artificial intelligence",
    "google data analytics professional certificate",
    "free",
    "google",
    "data analyst"
  ];

  return (
    <div className="pb-4">
      {/* 状态栏 */}
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="font-bold text-2xl">21:13</div>
        <div className="flex items-center gap-2">
          <div>5G</div>
          <div className="bg-gray-900 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">23</div>
        </div>
      </div>

      {/* 头部 */}
      <div className="p-4 flex justify-between items-center">
        <Link href="/catalog" className="text-blue-600 font-medium">Switch Catalog</Link>
        <Link href="/settings">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Link>
      </div>

      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Search</h1>
        
        {/* 搜索框 */}
        <div className="relative mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="w-full bg-gray-100 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* 热门搜索 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Popular Searches</h2>
          <ul className="space-y-4">
            {popularSearches.map((search, index) => (
              <li key={index} className="border-b border-gray-100 pb-4">
                <Link href={`/search?q=${encodeURIComponent(search)}`} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>{search}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}