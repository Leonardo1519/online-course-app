import Link from 'next/link';
import Image from 'next/image';
import TopicCard from './components/TopicCard';
import CourseCard from './components/CourseCard';

export default function Home() {
  // 模拟主题数据
  const topics = [
    { id: 1, name: '艺术与人文', icon: 'arts' },
    { id: 2, name: '商业', icon: 'business' },
    { id: 3, name: '计算机科学', icon: 'computer' },
  ];

  // 模拟课程数据
  const courses = [
    { 
      id: 1, 
      title: 'DeepLearning.AI 数据分析', 
      provider: 'DeepLearning.AI', 
      type: 'Professional Certificate', 
      rating: 4.8, 
      reviews: 41, 
      image: null
    },
    { 
      id: 2, 
      title: 'UX Design Toolkit', 
      provider: 'Coursera', 
      type: 'Professional Certificate', 
      rating: 5.0, 
      reviews: 3, 
      image: null
    },
    { 
      id: 3, 
      title: 'Google Agile Essentials', 
      provider: 'Google', 
      type: 'Course', 
      rating: 4.8, 
      reviews: 45, 
      image: null
    },
  ];

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
      
      {/* 探索标题 */}
      <div className="p-4 pb-2">
        <h1 className="text-3xl font-bold">探索</h1>
      </div>
      
      {/* 主题部分 */}
      <div className="px-4 py-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">主题</h2>
          <Link href="/topics" className="text-gray-500">查看全部</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {topics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
      
      {/* Coursera Plus 广告 */}
      <div className="mx-4 my-6 bg-blue-50 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="text-blue-600 font-bold text-xl">
              <span>Coursera </span>
              <span className="bg-blue-600 text-white px-2 rounded">PLUS</span>
            </div>
            <div className="font-bold text-lg">10,000+ 课程，1个价格</div>
          </div>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full">了解更多</button>
        </div>
      </div>
      
      {/* 新课程部分 */}
      <div className="px-4 py-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Coursera新课程</h2>
          <Link href="/new-courses" className="text-gray-500">查看全部</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      
      {/* 获取学位部分 */}
      <div className="px-4 py-2 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">获取你的学位</h2>
          <Link href="/degrees" className="text-gray-500">查看全部</Link>
        </div>
        {/* 学位卡片将在这里添加 */}
      </div>
    </div>
  );
}
