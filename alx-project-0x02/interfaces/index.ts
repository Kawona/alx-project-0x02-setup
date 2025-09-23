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