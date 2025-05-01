import Image from 'next/image';
import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <Link href={`/course/${course.id}`} className="min-w-[250px] flex flex-col">
      <div className="relative w-full h-36 rounded-lg mb-2 overflow-hidden bg-gray-200">
        {course.image ? (
          <Image 
            src={course.image} 
            alt={course.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-indigo-800 text-white text-xl font-bold p-4">
            {course.title.substring(0, 2)}
          </div>
        )}
      </div>
      <h3 className="font-bold text-base line-clamp-2">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.provider}</p>
      <p className="text-sm text-gray-600">{course.type}</p>
      <div className="flex items-center mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="ml-1 text-sm">{course.rating} ({course.reviews})</span>
      </div>
    </Link>
  );
} 