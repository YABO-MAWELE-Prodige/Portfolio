/* export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        YABO MAWELE Prodige
      </main>
    </div>
  );
}
*/
"use client";
import React, { useState } from "react";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export const artworks = [
  {
    id: 1,
    title: "Sand",
    src: "/img/ia.jpg",
  },
  {
    d: 2,
    title: "Satellite",
    src: "/img/ib.jpg",
  },
  {
    id: 3,
    title: "Ocean",
    src: "/img/ic.jpg",
  },
  {
    id: 4,
    title: "Fresa",
    src: "/img/id.jpg",
  },
  {
    id: 5,
    title: "Sangre",
    src: "/img/ie.jpg",
  },
  {
    id: 6,
    title: "Dune",
    src: "/img/if.jpg",
  },
];

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex space-x-6">
          <a href="#" className="text-black font-bold">
            All Prints
          </a>
          <a href="#" className="text-black">
            About
          </a>
        </div>

        <h1 className="text-2xl text-black font-bold">Jay Montclaire</h1>

        <div className="flex items-center">
          <button className="flex items-center space-x-1 border-none text-black">
            <ShoppingCart className="w-5 h-5" />
            <span>0</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-32 space-y-6">
        <h2 className="text-6xl text-black font-light">Fine Art Painter.</h2>
        <h2 className="text-6xl text-black font-light">Printmaker.</h2>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div key={index} className="space-y-4">
              <div className="flex flex-col">
                <Image
                  src={artwork.src}
                  alt={artwork.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <a
                href="#"
                className="block text-center text-lg hover:underline underline-offset-4 text-black"
              >
                {artwork.title}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-10 py-16">
          <div className="max-w-2xl mx-auto px-8">
            <h2 className="text-black">Contact</h2> <br />
            <p className="mb-6 text-black">
              For custom paintings, or any questions you can contact me here:
            </p>
            <a
              href="mailto:email@email.com"
              className="block hover:underline text-black"
            >
              email@email.com
            </a>
            <a
              href="tel:(555)555-5555"
              className="block hover:underline text-black"
            >
              (555)555-5555
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter & Footer */}
      <div className="py-16 px-8">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-4 mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Sign up with your email address to receive news and updates"
              className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>©JayMontclaire</p>
            <p>Made with passion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
