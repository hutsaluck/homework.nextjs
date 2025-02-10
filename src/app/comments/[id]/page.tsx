import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/models/IComment";
import {CommentPageComponent} from "@/components/CommentPageComponent";
import {MenuComponent} from "@/components/MenuComponent";

type Props = {
    params: Promise<{id: string}>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params

    return {
        title: `Comment Page ${id}`
    }
}
const CommentPage:FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams
    let comment: IComment | null = null
    if (typeof data === "string") {
        comment = JSON.parse(data) as IComment
    }


    return (
        <div>
            <MenuComponent/>
            {comment && (
                <CommentPageComponent comment={comment}/>
            )}
        </div>
    );
};

export default CommentPage;