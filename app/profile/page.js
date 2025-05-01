import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const user = {
    name: 'MingxiuChen',
    email: '584925664@qq.com',
  };

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
        <h1 className="text-3xl font-bold">Profile</h1>
        <Link href="/settings">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Link>
      </div>

      {/* 用户信息 */}
      <div className="flex justify-between items-center px-4 py-6">
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          M
        </div>
      </div>

      {/* 学习进度 */}
      <div className="p-8 flex flex-col items-center justify-center">
        <div className="w-32 h-32 border border-gray-300 rounded-lg flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3v4a1 1 0 001 1h4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-center px-8 mb-2">
          That feeling of completion is just around the corner
        </h3>
        <p className="text-gray-600 text-center mb-8">
          Make some progress to get closer to your goal.
        </p>
        <Link 
          href="/learn" 
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium"
        >
          Continue Learning
        </Link>
      </div>
    </div>
  );
} 