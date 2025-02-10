import Link from "next/link";

export const HomeComponent = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-xl text-center space-y-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-gray-800">
                    Welcome to the JSONPlaceholder Demo
                </h1>
                <p className="text-lg text-gray-600">
                    This application demonstrates fetching and displaying data for users, posts, and comments from JSONPlaceholder.
                </p>
                <div className="text-left space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Available Pages:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>
                            <strong>Users:</strong> Displays a list of users fetched from{' '}
                            <a
                                href="https://jsonplaceholder.typicode.com/users"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                JSONPlaceholder
                            </a>.
                        </li>
                        <li>
                            <strong>Posts:</strong> Lists posts associated with users.
                        </li>
                        <li>
                            <strong>Comments:</strong> Shows comments related to posts.
                        </li>
                    </ul>
                </div>
                <div className="space-x-4">
                    <Link href="/users" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
                        Go to Users
                    </Link>
                    <Link href="/posts" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
                        Go to Posts
                    </Link>
                    <Link href="/comments" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
                        Go to Comments
                    </Link>
                </div>
            </div>
        </main>
    );
};