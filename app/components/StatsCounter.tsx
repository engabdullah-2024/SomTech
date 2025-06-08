'use client';

import { useEffect, useState } from 'react';
import { Users, BookOpen, Smile } from 'lucide-react';

export default function StatsCounter() {
  const [clients, setClients] = useState(0);
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);

  useEffect(() => {
    const animate = (setter: (val: number) => void, target: number, delay: number) => {
      let count = 0;
      const step = Math.ceil(target / 50);
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setter(count);
      }, delay);
    };

    animate(setClients, 100, 30);
    animate(setStudents, 5000, 1);
    animate(setCourses, 9, 100);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {/* Happy Clients */}
        <div className="flex flex-col items-center">
          <Smile className="text-blue-600 w-12 h-12 mb-2" />
          <h3 className="text-3xl font-bold text-gray-900">{clients}+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>

        {/* Students */}
        <div className="flex flex-col items-center">
          <Users className="text-green-600 w-12 h-12 mb-2" />
          <h3 className="text-3xl font-bold text-gray-900">{students.toLocaleString()}+</h3>
          <p className="text-gray-600">Students Enrolled</p>
        </div>

        {/* Courses */}
        <div className="flex flex-col items-center">
          <BookOpen className="text-purple-600 w-12 h-12 mb-2" />
          <h3 className="text-3xl font-bold text-gray-900">{courses}+</h3>
          <p className="text-gray-600">Courses Available</p>
        </div>
      </div>
    </section>
  );
}
