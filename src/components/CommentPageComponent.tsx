import { IComment } from "@/models/IComment";

interface CommentPageComponentProps {
    comment: IComment;
}

export const CommentPageComponent = ({ comment }: CommentPageComponentProps) => {
    return (
        <div className="p-5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-5 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold">Comment by {comment.name}</h1>
                        <p className="text-gray-500">Email: {comment.email}</p>
                        <p className="text-gray-500">Comment ID: {comment.id}</p>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Comment Content</h2>
                    <p>{comment.body}</p>
                </div>
            </div>
        </div>
    );
};
