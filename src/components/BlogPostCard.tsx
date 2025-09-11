import React from 'react';

interface BlogPostProps {
  title: string;
  summary: string;
  image: string;
  isFictional: boolean;
}

const BlogPostCard: React.FC<BlogPostProps> = ({ title, summary, image, isFictional }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{summary}</p>
        </div>
        {isFictional && (
          <p className="text-sm text-gray-400 mt-auto">
            *Esta notícia é fictícia e utilizada apenas para fins de demonstração.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPostCard;