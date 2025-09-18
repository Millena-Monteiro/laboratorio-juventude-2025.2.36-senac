import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../components/blogData';

const BlogPage: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-[#99d31d] mb-4">
                    Blog de Notícias e Eventos
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Acompanhe as últimas notícias, eventos e feiras livres que movimentam o cenário do empreendedorismo em Maceió.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogPostCard 
                            key={post.id} 
                            title={post.title} 
                            summary={post.summary} 
                            image={post.image}
                            link={post.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;