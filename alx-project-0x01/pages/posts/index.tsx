import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { Post } from "@/interfaces";

interface PostsPageProps {
  posts: Post[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.map((post: Post) => (
            <PostCard 
              key={post.id} 
              title={post.title} 
              body={post.body} 
              userId={post.userId} 
              id={post.id} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0, 9) // Limit to 9 posts for better display
    }
  };
}

export default Posts;