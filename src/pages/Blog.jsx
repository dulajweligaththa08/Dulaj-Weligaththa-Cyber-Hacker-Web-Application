import React from 'react';
import { BLOG_POSTS } from '../utils/constants';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

export const BlogPage = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-block px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
          <BookOpen size={14} className="inline mr-2" />
          <span>{`> CYBERSECURITY & DEV INSIGHTS`}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-orbitron">
          TECHNICAL <span className="text-gold-gradient">ARTICLES</span>
        </h1>
        <p className="text-[#9A9A9A] text-sm sm:text-base">
          Insights on Flutter architecture, web security best practices, and backend optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="bg-[#171717] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-code text-[#D4AF37]">
                <span className="px-2.5 py-1 rounded bg-[#0F0F0F] border border-[#D4AF37]/30">{post.category}</span>
                <span className="flex items-center space-x-1 text-[#9A9A9A]">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-[#9A9A9A] text-xs leading-relaxed font-poppins">
                {post.snippet}
              </p>
            </div>

            <div className="pt-6 border-t border-[#262626] flex items-center justify-between text-xs font-orbitron text-[#D4AF37] group-hover:text-white transition-colors">
              <span className="flex items-center space-x-1 text-[#9A9A9A]">
                <Calendar size={12} />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>READ ARTICLE</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
