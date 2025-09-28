import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

type UsersPageProps = {
    users: UserProps[];
};

export default function UserPage({ users }: UsersPageProps) {
    return (
        <div>
            <Header />
            <main className="p-6">
                <h2 className="text-2xl font-bold mb-4">Users</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            address={user.address}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const users: UserProps[] = data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: user.address.street,
            city: user.address.city,
        },
    }));

    return {
        props: {
            users,
        },
    };
};