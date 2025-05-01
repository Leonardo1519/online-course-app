import Image from 'next/image';
import Link from 'next/link';

export default function LearnPage() {
  const coursesInProgress = [
    {
      id: 1,
      title: 'Writing in the Sciences',
      provider: 'Stanford University',
      progress: 0,
      currentModule: '1.1: Introduction; principles of effective writing',
      moduleDuration: '11 min',
      image: null
    }
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

      {/* 所有课程标题 */}
      <div className="text-center border-b border-gray-200 pb-3">
        <h1 className="text-xl font-bold">All Courses</h1>
      </div>

      {/* 课程列表 */}
      <div className="p-4">
        {coursesInProgress.map(course => (
          <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden mb-4">
            {/* 课程头部信息 */}
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-800 rounded-sm flex items-center justify-center overflow-hidden">
                  {course.image ? (
                    <Image 
                      src={course.image} 
                      alt={course.provider} 
                      width={40}
                      height={40}
                    />
                  ) : (
                    <span className="text-white text-xs font-bold">
                      {course.provider.substring(0, 2)}
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="font-bold">{course.provider}</h2>
                  <h3 className="text-lg font-bold">{course.title}</h3>
                </div>
              </div>
              <div className="flex mt-3 text-sm items-center">
                <span>Course</span>
                <span className="mx-2">•</span>
                <span>{course.progress}% Completed</span>
              </div>
              
              {/* 进度条 */}
              <div className="h-1 bg-gray-200 rounded-full mt-3">
                <div 
                  className="h-1 bg-blue-600 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
            
            {/* 当前模块信息 */}
            <div className="border-t border-gray-200 p-4">
              <div className="text-lg font-medium">{course.currentModule}</div>
              <div className="flex mt-4 justify-between items-center">
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Video</span>
                  </div>
                  <div className="flex items-center">
                    <span>{course.moduleDuration}</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
                  Up Next
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 