import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemList } from "../../components/ItemList";

export const ItemListContainer = ({ greeting, subdesc }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("../stocks.json")
            .then(response => response.json())
            .then(data => {
                setTimeout(() => { setProductos(data) }, 100);
            });
    }, []);



    return (
        <div>
            <h1>{greeting}</h1>
            <h4>{subdesc}</h4>
            <div id="nahue">
                <ItemList productos={productos} />
            </div>
        </div>
    )
}
