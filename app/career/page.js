'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState('dataScience');
  
  const jobCategories = {
    dataScience: {
      title: 'Data Science & Analytics (4)',
      jobs: [
        { id: 1, title: 'Data Manager' },
        { id: 2, title: 'Data Analyst' },
        { id: 3, title: 'Data Scientist' },
        { id: 4, title: 'Data Engineer' },
      ]
    },
    softwareEngineering: {
      title: 'Software Engineering & IT (14)',
      jobs: [
        { id: 5, title: 'Python Developer' },
        { id: 6, title: 'Junior Software Developer' },
        { id: 7, title: 'Cybersecurity Professional' },
        { id: 8, title: 'UX Designer' },
        { id: 9, title: 'IT Support Specialist' },
        { id: 10, title: 'Product Manager' },
        { id: 11, title: 'Full Stack Developer' },
        { id: 12, title: 'Front-End Developer' },
        { id: 13, title: 'Application Developer' },
        { id: 14, title: 'Back-End Developer' },
      ]
    }
  };

  return (
    <div className="pb-4">
      {/* 状态栏 */}
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="font-bold text-2xl">21:09</div>
        <div className="flex items-center gap-2">
          <div>5G</div>
          <div className="bg-gray-900 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">24</div>
        </div>
      </div>

      {/* Coursera Career 头部 */}
      <div className="border-b border-gray-100 pb-3">
        <div className="p-4 flex items-center gap-3">
          <div className="text-2xl font-bold">coursera</div>
          <div className="text-xl">Career</div>
        </div>

        <div className="px-4 py-4">
          <h1 className="text-3xl font-bold">What job role interests you?</h1>
          <p className="text-base mt-2 text-gray-700">
            Pick one below, and we'll suggest a learning path to get you started. (You can update this at any time.)
          </p>
        </div>
      </div>

      {/* 工作分类 */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">{jobCategories.dataScience.title}</h2>
        <div className="grid grid-cols-2 gap-3">
          {jobCategories.dataScience.jobs.map(job => (
            <Link href={`/career/path/${job.id}`} key={job.id} className="border border-gray-200 rounded-lg p-4 text-center">
              <span className="font-medium">{job.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">{jobCategories.softwareEngineering.title}</h2>
        <div className="grid grid-cols-2 gap-3">
          {jobCategories.softwareEngineering.jobs.slice(0, 6).map(job => (
            <Link href={`/career/path/${job.id}`} key={job.id} className="border border-gray-200 rounded-lg p-4 text-center">
              <span className="font-medium">{job.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 