import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

type PostsPageProps = {
  posts: PostProps[];
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Posts</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};