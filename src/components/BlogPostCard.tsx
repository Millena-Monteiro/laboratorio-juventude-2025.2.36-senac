import React from 'react';

interface BlogPostProps {
  title: string;
  summary: string;
  image: string;
  link?: string;
}

const BlogPostCard: React.FC<BlogPostProps> = ({ title, summary, image, link}) => {
  return (
    <a href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{summary}</p>
        </div>
      </div>
      </a>
  );
};

export default BlogPostCard;