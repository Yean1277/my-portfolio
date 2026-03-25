'use client';

import { useState } from 'react';
import HeroHeader from '@/components/HeroHeader';
import ProfileCard from '@/components/ProfileCard';
import BlogPost from '@/components/BlogPost';
import Statistics from '@/components/Statistics';
import Calendar from '@/components/Calendar';

const categories = ['アーカイブ', 'Examples', 'Guides', 'Technology'];

const posts = [
  {
    title: 'Markdown Tutorial',
    date: '2023-01-30',
    category: 'Examples',
    wordCount: 1025,
    description: 'A simple sample of a Markdown blog post.',
    tags: ['Markdown', 'Blog'],
  },
  {
    title: 'Encrypted Post',
    date: '2024-07-15',
    category: 'Technology',
    wordCount: 427,
    description: 'This is an article for testing the page encryption feature.',
    tags: [],
    isEncrypted: true,
  },
  {
    title: 'Simple Guides for Mizuki',
    date: '2024-04-01',
    category: 'Guides',
    wordCount: 152,
    description: 'How to use this blog template.',
    tags: ['Tutorial', 'Blogging'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUScyrjRndBvZ3GqAaoSNe8CktY74EM-qfwjtwgEIdH9G2nGBH0fpae2_lCCoElzcYhCrOXcou-IA699mZmM2UCqiwKJumNBUFj2V9w5tUe81NLaawiWmyLEcaedY0cWbanpAYFV-yBu_8UFA4fVOOWns3TuJ8UGJYJE4NwyTGe2KnlO2xZM8AuhZKWZWE40Z8inWOjIC2q7-lOMgJPETRD62ffYTcWlJxZiHnkgU_j0yNlsN83fYJEwAe5ydy6SRKyLYbq7ZD5g',
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('アーカイブ');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = activeCategory === 'アーカイブ' ? posts : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      <HeroHeader />
      <main className="container mx-auto px-4 -mt-10 mb-20">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            <ProfileCard />
          </aside>
          <div className="col-span-12 lg:col-span-6 space-y-4">
            <nav className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                    activeCategory === category
                      ? 'bg-orange-theme text-white'
                      : 'bg-white text-gray-500 hover:bg-orange-50'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </nav>
            {filteredPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
            <div className="flex justify-center items-center space-x-2 pt-6">
              <button
                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-400 hover:text-orange-theme"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                ‹
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-orange-theme text-white rounded-lg shadow-sm font-bold">
                {currentPage}
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-400 hover:text-orange-theme"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                ›
              </button>
            </div>
          </div>
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            <Statistics />
            <Calendar />
          </aside>
        </div>
      </main>
    </div>
  );
}
