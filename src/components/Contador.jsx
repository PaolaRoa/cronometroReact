import React, {useEffect} from 'react';


const Contador = (props) => {
 
    
    //agregamos o no un cero para que se muestren siempre dos digitos en la pantalla del cronometro
    let ms = props.time.ms > 9 ? props.time.ms : `0${props.time.ms}`;
    let s = props.time.s > 9 ? props.time.s :  `0${props.time.s}`;
    let m = props.time.m > 9 ? props.time.m : `0${props.time.m}`;
    let h = props.time.h > 9 ? props.time.h : `0${props.time.h}`;
    //variable donde colocamos el tiempo con ceros donde se requieren
    let timeStr = `${h}:${m}:${s}:${ms}`
    let timeTitle = `${h}:${m}:${s}`
    useEffect(() => {
        document.title = `${timeTitle}`
     }, );

    return (  
        // un elemento p con el valor de timeStr que es el que se va a renderizar 
        <p>{timeStr}</p>
    );
}

export default Contador;
