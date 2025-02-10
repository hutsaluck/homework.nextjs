import {IUser} from "@/models/IUser";

interface UserPageComponentProps {
    user: IUser;
}

export const UserPageComponent = ({user}: UserPageComponentProps) => {
    return (
        <div className="p-5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-5 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <p className="text-gray-500">Username: @{user.username}</p>
                        <p className="text-gray-500">
                            <a
                                href={`mailto:${user.email}`}
                                className="font-bold hover:text-gray-500 hover:shadow-black"
                            >
                                {user.email}
                            </a>
                        </p>
                        <p>
                            <a
                                href={`tel:${user.phone}`}
                                className="font-bold hover:text-gray-500 hover:shadow-black"
                            >
                                {user.phone}
                            </a>
                        </p>
                        <p className="text-gray-500">Website: {user.website}</p>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-center items-start">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Address</h2>
                        <p><strong>Street:</strong> {user.address.street}</p>
                        <p><strong>Suite:</strong> {user.address.suite}</p>
                        <p><strong>City:</strong> {user.address.city}</p>
                        <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
                        <p><strong>Coordinates:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Company</h2>
                        <p><strong>Name:</strong> {user.company.name}</p>
                        <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                        <p><strong>BS:</strong> {user.company.bs}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};