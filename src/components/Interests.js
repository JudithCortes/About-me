import React from "react";

import "./estilos/style.css";

export default class Interests extends React.Component{
    render(){
        return (
            <div className="intereses box">
                <h2>Me interesa</h2>
                <p>Programación, ciclismo, senderismo</p>
            </div> 
        );
    }
}