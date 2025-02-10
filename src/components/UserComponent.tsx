import {IUser} from "@/models/IUser";
import Link from "next/link";

type IUserProps = {
    user: IUser;
}
export const UserComponent = ({user}: IUserProps) => {
    const {username, website, email, phone} = user
    return (
        <Link href={{pathname: `/users/${user.id}`, query: {data: JSON.stringify(user)}}}>
            <div
                className="my-10 border border-gray-300 rounded-2xl grid justify-center items-center cursor-pointer transition-shadow duration-500 hover:shadow-lg">
                <div className="p-4">
                    <h3 className="text-2xl font-semibold text-center mb-2">
                        {username}
                    </h3>
                    <div
                        className="text-center max-h-[160px] hover:max-h-full overflow-hidden text-ellipsis transition-all duration-300">
                        <p>website: {website}</p>
                        <p>email: {email}</p>
                        <p>phone: {phone}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};