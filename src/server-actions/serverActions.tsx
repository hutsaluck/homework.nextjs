'use server'

import {addCar} from "@/services/api.service";
import {ICar} from "@/models/ICar";
import {redirect} from "next/navigation";

export const saveCar = async (formData: FormData) => {
    const car:ICar = {
        brand: String(formData.get('brand')),
        price: Number(formData.get('price')),
        year: Number(formData.get('year')),
    };
    await addCar(car)

    redirect('/cars')
}