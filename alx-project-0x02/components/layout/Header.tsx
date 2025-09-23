import Link from "next/link";

export default function Header() {
    <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">Beyound</h1>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
            </ul>
        </nav>
    </header>
}