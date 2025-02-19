import {CarComponent} from "@/components/CarComponent";
import {ICar} from "@/models/ICar";

interface CarsComponentProps {
    cars: ICar[]
}

export const CarsComponent = ({cars}: CarsComponentProps) => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Car List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map(car => <CarComponent key={car.id} car={car}/>)}
            </div>
        </div>
    );
};