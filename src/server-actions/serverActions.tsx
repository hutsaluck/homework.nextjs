'use server'

import {addCar} from "@/services/api.service";
import {ICar} from "@/models/ICar";
import {redirect} from "next/navigation";

export const saveCar = async (car: ICar) => {
    await addCar(car)

    redirect('/cars')
}