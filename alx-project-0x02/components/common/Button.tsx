import React from "react";
import { ButtonProps } from "@/interfaces";

export default function Button({
    children,
    size = 'medium',
    shape = "rounded-md",
    onClick,
    className = "",
}: ButtonProps) {
    const sizeClasses: Record<typeof size, string> = {
        small: "px-py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`bg-green-600 text-white font-semibold
                ${sizeClasses[size]}
                ${shape}
                hover:bg-green-700 transition
                ${className}
                `}
        >
            {children}
        </button>
    );
}