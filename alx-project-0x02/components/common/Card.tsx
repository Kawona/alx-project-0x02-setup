import React from "react";
import { CardProps } from "../../interfaces";

export default function Card({ title, content }: CardProps) {
    return (
        <div className=" border rounded-lg shadow-md p-4 bg-white">
            <h2 className="tect-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    )
}