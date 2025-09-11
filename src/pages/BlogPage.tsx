import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../components/blogData';

const BlogPage: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-azul-profundo mb-4">Blog</h1>
        <p className="text-center text-gray-600 mb-12">
          Fique por dentro dos eventos e novidades que impulsionam os negócios nas comunidades de Maceió.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard 
              key={post.id} 
              title={post.title} 
              summary={post.summary} 
              image={post.image}
              isFictional={post.isFictional}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;