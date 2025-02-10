import {getAllComments} from "@/services/api.service";
import {IComment} from "@/models/IComment";
import {CommentComponent} from "@/components/CommentComponent";

export const CommentsComponent = async () => {
    const comments: IComment[] = await getAllComments()

    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {
                comments.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};