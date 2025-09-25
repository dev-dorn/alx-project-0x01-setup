import React from 'react';

interface Post {
    id:number;
    title:string;
    body:string;
    author: string;
    date: string;

}

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                {post.title}
            </h2>
            <p className='text-gray-600 mb-4 line-clamp-3'>{post.body}</p>
            <div className='flex justify-between items-center text-sm text-gray-500'>
                <span>BY {post.author}</span>
                <span>{post.date}</span>
            </div>
        </div>
    );
};

export default PostCard;