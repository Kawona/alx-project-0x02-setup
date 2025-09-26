"use client";

import React from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { useState } from "react";

type Post = {
    title: string;
    content: string;
}

export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (post: Post) => {
        setPosts((prev) => [...prev, post]);
    };

    return (
        <>
            <Header />
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
            <h1 className="text-4xl font-bold text-gray-50 mb-4">
                Welcome to my Next.js App
            </h1>

            <button
                onClick={() => setIsModalOpen(true)}
                className="mb-6 px-44 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
                Add Post
            </button>

            <Card
                title="Card One"
                content="This is some more content for the second card."
            />
            <Card
                title="Card Two"
                content="This is some more content for the second card."
            />
            <Card
                title="Card Three"
                content="This is some more content for the second card."
            />

            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddPost}
            />
        </div>
        </>
        
    );
}
