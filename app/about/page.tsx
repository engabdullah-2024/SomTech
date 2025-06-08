import Header from "../components/Header";
import Footer from "../components/Footer";
import { BookOpen, Smartphone, Gamepad, Database, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-8 max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-blue-600 text-center">About SomTech</h2>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
          SomTech is a cutting-edge digital learning platform committed to empowering developers through comprehensive, hands-on courses. We specialize in the latest technologies across multiple domains to help you master the skills needed to build the future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-800">
          <div className="flex items-start space-x-4">
            <BookOpen className="text-blue-600" size={32} />
            <div>
              <h3 className="text-xl font-semibold">Comprehensive Courses</h3>
              <p>Explore fullstack, frontend, and backend web development courses designed for real-world projects.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Smartphone className="text-blue-600" size={32} />
            <div>
              <h3 className="text-xl font-semibold">Mobile Development</h3>
              <p>Learn to build performant and beautiful mobile apps for iOS and Android platforms.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Gamepad className="text-blue-600" size={32} />
            <div>
              <h3 className="text-xl font-semibold">Game Development</h3>
              <p>Dive into game engines and design immersive games with engaging mechanics.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Database className="text-blue-600" size={32} />
            <div>
              <h3 className="text-xl font-semibold">Blockchain Technology</h3>
              <p>Understand decentralized applications and blockchain fundamentals for the future of tech.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 col-span-full justify-center">
            <Users className="text-blue-600" size={32} />
            <div>
              <h3 className="text-xl font-semibold">Community Focus</h3>
              <p>Join a vibrant community of learners and industry experts dedicated to continuous growth.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
