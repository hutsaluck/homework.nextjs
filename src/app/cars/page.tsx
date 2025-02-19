import { MenuComponent } from "@/components/MenuComponent";
import { CarsComponent } from "@/components/CarsComponent";
import { PaginationComponent } from "@/components/PaginationComponent";
import { FC } from "react";
import { ICar } from "@/models/ICar";
import {getCars, getCarsWithPagination} from "@/services/api.service";
import { SearchParams } from "next/dist/server/request/search-params";

type Props = {
    searchParams: Promise<SearchParams>
};

const CarsPage: FC<Props> = async ({ searchParams }: Props) => {
    const {page} = await searchParams;
    const currentPage = Number(page) || 1;

    const cars: ICar[] = await getCarsWithPagination(currentPage);
    const allCars: ICar[] = await getCars();
    const limit = 30;
    const totalPages = Math.ceil(allCars.length / limit);

    return (
        <>
            <MenuComponent />
            <CarsComponent cars={cars} />
            <PaginationComponent totalPages={totalPages} searchParams={{ page: currentPage || 1 }} />
        </>
    );
};

export default CarsPage;
