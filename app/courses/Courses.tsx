import CourseCard from '../courses/page'; // Adjust the path

const courses = [
  {
    name: "Frontend Development",
    description: "HTML, CSS, JS, React, Next.js",
    price: "$199",
    discount: "$299",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&s",
  },
  // add other courses here
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
