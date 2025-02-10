import {IPost} from "@/models/IPost";

interface PostPageComponentProps {
    post: IPost;
}

export const PostPageComponent = ({post}: PostPageComponentProps) => {
    return (
        <div className="p-5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-5 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                        <p className="text-gray-500">User ID: {post.userId}</p>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Post Content</h2>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
};