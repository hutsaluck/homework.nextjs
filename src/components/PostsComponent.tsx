import {IPost} from "@/models/IPost";
import {getAllPosts} from "@/services/api.service";
import {PostComponent} from "@/components/PostComponent";

export const PostsComponent = async () => {

    const posts: IPost[] = await getAllPosts()
    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {
                posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};