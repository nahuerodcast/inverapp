import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemList } from "../components/ItemList";

export const ItemListContainer = ({ greeting, subdesc }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("../stocks.json")
            .then(response => response.json())
            .then(data => {
                setTimeout(() => { setProductos(data) }, 1000);
            });
    }, []);



    return (
        <div>
            <h1>{greeting}</h1>
            <h4>{subdesc}</h4>
            <div id="nahue">
                {/* < Cards name={producto.name} price={producto.price} quantity={producto.quantity} img={producto.img} /> */}
                <ItemList productos={productos} />
            </div>
        </div>
    )
}
