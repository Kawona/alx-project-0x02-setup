export interface Post {
    id: number;
    title: string;
    body: string;
    userld: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    username: number;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface PostModal {
    title: string;
    content: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
    className?: string;
}

export interface PostProps {
    Id: number;
    title: string;
    content: string;
    userId: number;
}