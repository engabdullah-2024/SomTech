import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-blue-700">Contact Us</h2>
        <p className="text-gray-700 text-lg">
          Have questions or want to get in touch? We’re here to help!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-600" />
            <a
              href="mailto:info@somtech.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              info@somtech.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="text-blue-600" />
            <a href="tel:+1234567890" className="text-blue-600 underline hover:text-blue-800">
              +1 (234) 567-890
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-600" />
            <address className="not-italic text-gray-700">
              123 SomTech St., Tech City, TX 75001
            </address>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="text-blue-600" />
            <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
