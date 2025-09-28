import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      const mappedPosts: PostProps[] = data.map((posts: any) => ({
        id: posts.id,
        title: posts.title,
        content: posts.body,
        userId: posts.userId,
      }));
      setPosts(mappedPosts);
    };

    fetchPosts();

  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Posts</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.Id}
              Id={post.Id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}