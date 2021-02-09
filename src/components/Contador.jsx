import React, {useEffect} from 'react';


const Contador = (props) => {
 
    
    //agregamos o no un cero para que se muestren siempre dos digitos en la pantalla del cronometro
    let ms = props.tiempo.ms > 9 ? props.tiempo.ms : `0${props.tiempo.ms}`;
    let s = props.tiempo.s > 9 ? props.tiempo.s :  `0${props.tiempo.s}`;
    let m = props.tiempo.m > 9 ? props.tiempo.m : `0${props.tiempo.m}`;
    let h = props.tiempo.h > 9 ? props.tiempo.h : `0${props.tiempo.h}`;
    //variable donde colocamos el tiempo con ceros donde se requieren
    let timeStr = `${h}:${m}:${s}:${ms}`
    //varaible que va a actualizar el titulo
    let timeTitle = `${h}:${m}:${s}`
    //asigna el valor al titulo
    useEffect(() => {
        document.title = `${timeTitle}`
     }, );

    return (  
        // un elemento p con el valor de timeStr que es el que se va a renderizar 
        <p>{timeStr}</p>
    );
}

export default Contador;
