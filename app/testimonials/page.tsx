// app/testimonials/page.tsx
"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayaan Ali",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "SomTech helped me go from beginner to professional full-stack developer. The instructors are amazing!",
  },
  {
    name: "Fatima Yusuf",
    role: "Mobile App Developer",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    text: "I built my first app within a month! The mobile dev course is top-notch.",
  },
  {
    name: "Nimco Mohamed",
    role: "Blockchain Enthusiast",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "Thanks to SomTech, I finally understand how Web3 and smart contracts work!",
  },
  {
    name: "Layla Ibrahim",
    role: "Game Developer",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    text: "Their game dev course is hands-on and really fun. Highly recommended!",
  },
  {
    name: "Zahra Ahmed",
    role: "Frontend Engineer",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    text: "Tailwind + React + SomTech = magic! I love the way they teach modern tech.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <main className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">What Our Students Say</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex flex-col items-center space-y-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <p className="text-gray-600 italic">"{t.text}"</p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      
    </>
  );
}
