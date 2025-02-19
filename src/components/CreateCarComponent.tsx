import {saveCar} from "@/server-actions/serverActions";

export const CreateCarComponent = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Do you want to build your own car?</h2>
            <p className="text-center text-lg mb-6">Just do it!</p>
            <form className="grid gap-5" action={saveCar}>
                <label htmlFor="brand" className="relative">
                    <p className="bg-white py-0 font-light absolute px-1 -top-3 left-4 bg-primary-color text-gray-500">Brand</p>
                    <input
                        type="text"
                        name={'brand'}
                        id="brand"
                        placeholder="Brand"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-500"
                    />
                </label>

                <label htmlFor="price" className="relative">
                    <p className="bg-white py-0 font-light absolute px-1 -top-3 left-4 bg-primary-color text-gray-500">Price</p>
                    <input
                        type="number"
                        name={'price'}
                        id="price"
                        placeholder="Price"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-500"
                    />
                </label>

                <label htmlFor="year" className="relative">
                    <p className="bg-white py-0 font-light absolute px-1 -top-3 left-4 bg-primary-color text-gray-500">Year</p>
                    <input
                        type="year"
                        name={'year'}
                        id="year"
                        placeholder="Year"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-500"
                    />
                </label>

                <input
                    type="submit"
                    value="Create car"
                    className="px-10 py-4 uppercase bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400 text-gray-500"
                />
            </form>
        </div>

    );
};