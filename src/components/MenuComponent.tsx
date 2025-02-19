import Link from "next/link";

export const MenuComponent = () => {
    return (
        <div className="flex justify-between items-center my-5 mx-5">
            <Link href="/" className="text-2xl font-extrabold uppercase text-white text-shadow-style">
                Logo
            </Link>
            <ul className="flex list-none gap-5">
                <li>
                    <Link href="/cars" className="capitalize no-underline hover:text-gray-500">
                        Cars
                    </Link>
                </li>
                <li>
                    <Link href="/cars/create" className="capitalize no-underline hover:text-gray-500">
                        Create Car
                    </Link>
                </li>
            </ul>
        </div>

    );
};