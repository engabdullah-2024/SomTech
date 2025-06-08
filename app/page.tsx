import CourseCard from './courses/page';
import Footer from './components/Footer';
import Header from './components/Header';
import TestimonialsPage from './testimonials/page';
import StatsCounter from './components/StatsCounter';

const courses = [
  {
    name: "Frontend Development",
    description: "HTML, CSS, JS, React, Next.js",
    price: "$199",
    discount: "$299",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&s",
  },
  {
    name: "Backend Development",
    description: "Node.js, Express, MongoDB",
    price: "$249",
    discount: "$349",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56kzJyg7fHohpY1YO62YkFqMDGIrkrKmbqg&s",
  },
  {
    name: "Fullstack Development",
    description: "Frontend + Backend = Fullstack",
    price: "$399",
    discount: "$499",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLL5wEv6hFqb4fO49WaJVm__IfrD-TXcRZw&s",
  },
  {
    name: "Mobile Development",
    description: "React Native, Flutter",
    price: "$299",
    discount: "$399",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqL-oTkaPr555gZPIqwGlPyHFv0ZAWxWr4w&s",
  },
  {
    name: "Game Development",
    description: "Unity, Unreal Engine, C#",
    price: "$349",
    discount: "$449",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fSfBH17OziJme8Kam1U8ZcLRcyQSkHp3Kg&s",
  },
  {
    name: "Blockchain Development",
    description: "Solidity, Web3, Ethereum",
    price: "$499",
    discount: "$599",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMJYHTcBIrO9ewpnYEsYnGwmOvuREvdLzIw&s",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Welcome to SomTech</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Empowering the next generation of developers through practical, hands-on learning in Web, Mobile, Game, and Blockchain technologies. Learn with purpose, build with confidence.
        </p>
      </section>

      {/* Courses Section */}
      <section className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Explore Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </section>
<div>
  <StatsCounter/>
  <TestimonialsPage/>
</div>
      <Footer />
    </div>
  );
}
