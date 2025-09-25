import React from 'react';
import PostCard from '@/components/common/PostCard';

// Mock data for demonstration
const mockPosts = [
  {
    id: 1,
    title: 'Understanding Next.js',
    body: 'Next.js is a React framework that enables server-side rendering and static site generation...',
    author: 'John Doe',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Tailwind CSS Best Practices',
    body: 'Tailwind CSS is a utility-first CSS framework that allows for rapid UI development...',
    author: 'Jane Smith',
    date: '2024-01-14'
  },
  {
    id: 3,
    title: 'TypeScript in Modern Web Development',
    body: 'TypeScript brings static typing to JavaScript, helping catch errors early...',
    author: 'Mike Johnson',
    date: '2024-01-13'
  }
];

const PostsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;