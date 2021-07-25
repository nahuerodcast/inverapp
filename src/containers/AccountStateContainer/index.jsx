import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AccountStateContainer/index.css'

export const AccountStateContainer = () => {

    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    let inverappDate = d + "/" + m + "/" + y;

    return (
        <div className="inverapp-account-state">
            <h1>Estado de cuenta al {inverappDate}</h1>
            <h4>Resumen de movimientos</h4>
            <div className="inverapp-home-cards">

            </div>
        </div>
    )
}
