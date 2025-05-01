import Image from 'next/image';
import Link from 'next/link';

// 模拟课程数据
const courses = [
  { 
    id: 1, 
    title: 'DeepLearning.AI 数据分析', 
    provider: 'DeepLearning.AI', 
    type: 'Professional Certificate', 
    rating: 4.8, 
    reviews: 41, 
    image: null,
    description: '学习数据分析的基础知识和高级技术，掌握Python和SQL等工具，为数据科学职业生涯做准备。',
    duration: '3个月',
    level: '中级',
    enrollmentStatus: '开放注册',
    modules: [
      { id: 1, title: '数据分析基础', duration: '2周' },
      { id: 2, title: 'Python数据处理', duration: '3周' },
      { id: 3, title: '数据可视化', duration: '2周' },
      { id: 4, title: '高级分析技术', duration: '3周' },
    ]
  },
  { 
    id: 2, 
    title: 'UX Design Toolkit', 
    provider: 'Coursera', 
    type: 'Professional Certificate', 
    rating: 5.0, 
    reviews: 3, 
    image: null,
    description: '学习用户体验设计的核心原则和最佳实践，包括用户研究、原型设计和用户测试等技能。',
    duration: '4个月',
    level: '初级到中级',
    enrollmentStatus: '开放注册',
    modules: [
      { id: 1, title: 'UX设计原则', duration: '2周' },
      { id: 2, title: '用户研究方法', duration: '3周' },
      { id: 3, title: '原型设计', duration: '2周' },
      { id: 4, title: '用户测试', duration: '3周' },
    ]
  },
];

export default function CoursePage({ params }) {
  // 找到对应ID的课程
  const course = courses.find(c => c.id === parseInt(params.id)) || courses[0];

  return (
    <div className="pb-4">
      {/* 课程图片顶部 */}
      <div className="relative h-48 w-full bg-gray-200">
        {course.image ? (
          <Image 
            src={course.image} 
            alt={course.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-indigo-800 text-white text-4xl font-bold">
            {course.title.substring(0, 2)}
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Link href="/" className="flex items-center justify-center w-10 h-10 bg-white/80 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 课程基本信息 */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-1">{course.title}</h1>
        <p className="text-gray-600 mb-2">{course.provider}</p>
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm">{course.rating} ({course.reviews})</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-600">{course.type}</span>
        </div>

        {/* 课程详情 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">课程详情</h2>
          <p className="text-gray-700 mb-4">{course.description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">持续时间</p>
              <p className="font-semibold">{course.duration}</p>
            </div>
            <div>
              <p className="text-gray-500">难度级别</p>
              <p className="font-semibold">{course.level}</p>
            </div>
            <div>
              <p className="text-gray-500">状态</p>
              <p className="font-semibold">{course.enrollmentStatus}</p>
            </div>
          </div>
        </div>

        {/* 课程模块 */}
        <div>
          <h2 className="text-lg font-bold mb-3">课程模块</h2>
          <div className="space-y-3">
            {course.modules.map(module => (
              <div key={module.id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between">
                  <h3 className="font-medium">{module.title}</h3>
                  <span className="text-sm text-gray-500">{module.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 注册按钮 */}
        <div className="mt-8">
          <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium">
            开始学习
          </button>
        </div>
      </div>
    </div>
  );
} 