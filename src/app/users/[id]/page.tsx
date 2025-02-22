import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";
import {UserPageComponent} from "@/components/UserPageComponent";
import {MenuComponent} from "@/components/MenuComponent";

type Props = {
    params: Promise<{id: string}>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params

    return {
        title: `User Page ${id}`
    }
}
const UserPage:FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams
    let user: IUser | null = null
    if (typeof data === "string") {
        user = JSON.parse(data) as IUser
    }


    return (
        <div>
            <MenuComponent/>
            {user && (
                <UserPageComponent user={user}/>
            )}
        </div>
    );
};

export default UserPage;