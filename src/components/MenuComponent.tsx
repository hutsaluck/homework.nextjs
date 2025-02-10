import Link from "next/link";

export const MenuComponent = () => {
    return (
        <div className="flex justify-between items-center my-5 mx-5">
            <Link href="/" className="text-2xl font-extrabold uppercase text-white text-shadow-style">
                Logo
            </Link>
            <ul className="flex list-none gap-5">
                <li>
                    <Link href="/users" className="capitalize no-underline hover:text-gray-500">
                        Users
                    </Link>
                </li>
                <li>
                    <Link href="/posts" className="capitalize no-underline hover:text-gray-500">
                        Posts
                    </Link>
                </li>
                <li>
                    <Link href="/comments" className="capitalize no-underline hover:text-gray-500">
                        Comments
                    </Link>
                </li>
            </ul>
        </div>

    );
};