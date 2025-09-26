import React from "react";

export default function indexPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to the index Page
            </h1>
            <p className="text-gray-600">This is the default landing page</p>
        </div>
    );
}