import { useState } from "react";

type PostModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: { title: string; content: string }) => void;
};

export default function PostModal({ isOpen, onClose, onSubmit }: PostModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        onSubmit({ title, content }); 
        setTitle("");
        setContent("")
        onClose();
    }

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border p-2 rounded"
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border p-2 rounded"
                />
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                    >Cancel</button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded bg-greeen-600 text-white hover:bg-green-700"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
)
}

