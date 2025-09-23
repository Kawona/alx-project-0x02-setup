import React from "react";
import Card from "../components/common/Card";

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
            <h1 className="text-4xl font-bold text-gray-50 mb-4">
                Welcome to my Next.js App
            </h1>

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
        </div>
    );
}
