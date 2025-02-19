import {FC} from "react";
import {Metadata} from "next";
import {ICar} from "@/models/ICar";
import {CarPageComponent} from "@/components/CarPageComponent";
import {MenuComponent} from "@/components/MenuComponent";
import {getCarById} from "@/services/api.service";

type Props = {
    params: Promise<{id: string}>,
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params

    return {
        title: `Car Page ${id}`
    }
}
const CarPage:FC<Props> = async ({params}: Props) => {
    const {id} = await params
    const car: ICar = await getCarById(Number(id));


    return (
        <div>
            <MenuComponent/>
            {car && (
                <CarPageComponent car={car}/>
            )}
        </div>
    );
};

export default CarPage;