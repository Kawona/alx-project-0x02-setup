import React from 'react';
import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
    return (
        <div className="border rounded-lg shadow p-4 bg-white hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-3">{content}</p>
            <span className="text-sm text-gray-500">User ID: {userId}</span>
        </div>
    );
}