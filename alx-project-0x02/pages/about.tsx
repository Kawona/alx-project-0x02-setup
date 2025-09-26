import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
    return (
        <>
            <Header />
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                About Page
            </h1>
            <Button size="small" shape="rounded-sm">Small</Button>
            <Button size="medium" shape="rounded-sm">Small</Button>
            <Button size="large" shape="rounded-sm">Small</Button>
            
        </div>
        </>
        
    );
}
