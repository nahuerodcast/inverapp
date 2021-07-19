import React from "react";
import { Card, Button } from "react-bootstrap";
import { Counter } from "../Counter"
import '../Cards/styles.css'


export const Cards = ({ product }) => {
    return (
        <div id="card">
            <Card style={{ width: "18rem" }} className="card-inverapp">
                <Card.Img variant="top" src={product.img} className='card-img' />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Counter quantity={product.quantity} />
                    <Card.Text>
                        Cantidad máxima: {product.quantity}
                    </Card.Text>
                    <Button variant="success" className="boton">Comprar</Button>
                    <Button variant="danger" className="boton">Vender</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
