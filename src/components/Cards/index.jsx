import React from "react";
import { Card, Button } from "react-bootstrap";
import { Counter } from "../Counter"
import '../Cards/styles.css'

export const Cards = ({ name, price, quantity, img }) => {
    return (
        <div id="card">
            <Card style={{ width: "18rem" }} className="card-inverapp">
                <Card.Img variant="top" src={img} className='card-img' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Counter quantity={quantity} />
                    <Card.Text>
                        Cantidad máxima: {quantity}
                    </Card.Text>
                    <Button variant="success" className="boton">Comprar</Button>
                    <Button variant="danger" className="boton">Vender</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
