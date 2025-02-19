import React from 'react'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CarPageLayout metadata'
}

type Props = { children: React.ReactNode }
const CarPageLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}

export default CarPageLayout;