import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/models/IPost";
import {PostPageComponent} from "@/components/PostPageComponent";
import {MenuComponent} from "@/components/MenuComponent";

type Props = {
    params: Promise<{id: string}>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params

    return {
        title: `Post Page ${id}`
    }
}
const PostPage:FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams
    let post: IPost | null = null
    if (typeof data === "string") {
        post = JSON.parse(data) as IPost
    }


    return (
        <div>
            <MenuComponent/>
            {post && (
                <PostPageComponent post={post}/>
            )}
        </div>
    );
};

export default PostPage;