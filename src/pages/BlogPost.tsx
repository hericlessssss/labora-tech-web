import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../components/Blog';
import { ArrowLeft, Calendar, Clock, Link as LinkIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-base text-white py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Artigo não encontrado</h1>
            <button
              onClick={() => navigate(-1)}
              className="btn-primary inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base text-white py-24">
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Voltar para o blog
        </button>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6 font-poppins">{post.title}</h1>
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-sm text-gray-400">{post.author.role}</p>
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none mb-12">
            {post.content.map((paragraph, index) => (
              <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {post.relatedImages.map((image, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden bg-black/50">
                <img
                  src={image}
                  alt={`Imagem relacionada ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <footer className="border-t border-white/10 pt-8">
            <h2 className="text-xl font-semibold mb-4 font-poppins">Referências</h2>
            <ul className="space-y-2">
              {post.references.map((reference, index) => (
                <li key={index}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <LinkIcon className="h-4 w-4" />
                    {reference.title}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </article>
      </div>
    </div>
  );
}