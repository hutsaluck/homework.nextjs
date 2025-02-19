import {ICar} from "@/models/ICar";

interface CarPageComponentProps {
    car: ICar;
}

export const CarPageComponent = ({car}: CarPageComponentProps) => {
    return (
        <div className="p-5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-5 mb-8">
                    <div>
                        <img
                            src={`https://bin.ua/uploads/posts/2024-06/1719315021_1.jpg`}
                            alt={`${car.brand} car`}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{car.brand}</h1>
                        <p className="text-gray-500"><strong>Year:</strong> {car.year}</p>
                        <p className="text-gray-500"><strong>Price:</strong> ${car.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};