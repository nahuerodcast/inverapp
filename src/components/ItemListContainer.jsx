import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './Cards'

export const ItemListContainer = (props) => {
    const producto = {
        name: "Apple",
        price: "140",
        quantity: "12",
        img: 'http://1000marcas.net/wp-content/uploads/2019/11/Apple-Logo.jpg'
    }

    const producto2 = {
        name: "Tesla",
        price: "656,95",
        quantity: "5",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/602px-Tesla_T_symbol.svg.png'
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <h4>{props.subdesc}</h4>
            <div id="nahue">
                < Cards name={producto.name} price={producto.price} quantity={producto.quantity} img={producto.img} />
                < Cards name={producto2.name} price={producto2.price} quantity={producto2.quantity} img={producto2.img} />
            </div>
        </div>
    )
}
