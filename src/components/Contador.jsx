import React from 'react';

const Contador = (props) => {
    
    let ms = props.time.ms > 9 ? props.time.ms : `0${props.time.ms}`;
    let s = props.time.s > 9 ? props.time.s :  `0${props.time.s}`;
    let m = props.time.m > 9 ? props.time.m : `0${props.time.m}`;
    let h = props.time.h > 9 ? props.time.h : `0${props.time.h}`;
    let timeStr = `${h}:${m}:${s}:${ms}`

    return (  
        <p>{timeStr}</p>
    );
}

export default Contador;
