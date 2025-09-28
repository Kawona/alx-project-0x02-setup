import React from 'react';
import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
    return (
        <div className="border rounded-lg shadow p-4 bg-white hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">{email}</p>
        <p className="text-gray-500 text-sm">
            {address.street}, {address.city}
        </p>
        </div>
    )
    
}
