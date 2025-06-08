'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const alumni = [
  {
    name: 'Amina Hussein',
    title: 'Fullstack Developer',
    description: "6 months ago I didn’t even know how to write a single line of code. Now, I’m building real projects!",
    image: 'https://randomuser.me/api/portraits/women/70.jpg',
  },
  {
    name: 'Fatima Ali',
    title: 'Frontend Engineer',
    description: "Just half a year ago, I had zero tech background. SomTech made me confident in React and design.",
    image: 'https://randomuser.me/api/portraits/women/71.jpg',
  },
  {
    name: 'Layla Noor',
    title: 'Mobile App Developer',
    description: "6 months ago, mobile apps felt impossible. Now I’ve published my first Flutter app.",
    image: 'https://randomuser.me/api/portraits/women/72.jpg',
  },
  {
    name: 'Hodan Yusuf',
    title: 'Backend Specialist',
    description: "Before joining, I feared backend development. Today, I’m writing APIs and handling databases!",
    image: 'https://randomuser.me/api/portraits/women/73.jpg',
  },
  {
    name: 'Nimco Ahmed',
    title: 'Blockchain Developer',
    description: "6 months ago I didn’t know what Web3 was. Now, I work on Ethereum smart contracts!",
    image: 'https://randomuser.me/api/portraits/women/74.jpg',
  },
];

export default function AlumniPage() {
  return (
    <>
      <Header />
      <main className="py-12 px-6 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Successful Alumni</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="rounded-full object-cover border-4 border-blue-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{person.title}</p>
              <p className="text-gray-600 text-sm">{person.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
