import React from 'react';
import { Cards } from "../Cards/index";

export const ItemList = ({ productos }) => {
    return (
        <>
            <>
                {productos.map(product => { return (<Cards product={product} key={product.id} />) })}
            </>
        </>
    );
}