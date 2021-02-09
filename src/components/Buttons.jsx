import React from 'react';


const Buttons = (props)=> {
    //definimos una variable donde vamos a guardar el tiempo con los ceros si es necesario
    let timeS = '';
    //creamos una funcion que para cada vuelta va a retornar el tiempo adicionandole o no un cero
    //segun sea necesario para que se muestren siempre dos digitos
    const time = (vuelta)=>{ 
        // {ms:44 , s:1 , m:0 , h:0}
            let ms = vuelta.time.ms > 9 ? vuelta.time.ms : `0${vuelta.time.ms}`;
            //44
            let s = vuelta.time.s > 9 ? vuelta.time.s : `0${vuelta.time.s}`;
            //01
            let m = vuelta.time.m > 9 ? vuelta.time.m : `0${vuelta.time.m}`;
            //00
            let h = vuelta.time.h > 9 ? vuelta.time.h : `0${vuelta.time.h}`;
            //00
            timeS = `${h}:${m}:${s}:${ms}`;
        //retornamos timeS que es el tiempo en string   
        return timeS}          
        
    // console.log(timeS)

    
    
    return(
        <> 
        {/* usamos condicionales para definir que botones se renderizan segun el estado del cronometro */}
        {/* si el cronometro esta andando */}
        {/* renderizamos un boton de stop y uno de vuelta, las funciones de los botones viene ¿n como props*/}
            {props.isStop === "running" ? <div className="buttonsContainer">
                <button className = "stop" onClick = {props.handleStatus}><img className= "buttonIcon"alt= "Stop" src= "https://cdn.pixabay.com/photo/2014/04/03/00/40/button-309039_960_720.png"></img></button>
                                            <button className = "auxButton" onClick= {props.vuelta} >Vuelta</button>
                                          </div> :
            // si no esta andando, renderizamos un boton de start y uno de reset
             <div className="buttonsContainer">
                 <button className = "start" onClick = {props.handleStatus}><img className= "buttonIcon"alt ="Start" src = "https://cdn.pixabay.com/photo/2016/03/31/20/37/button-1295902_960_720.png"></img></button>
                 <button className = "auxButton" onClick = {props.reset}>Reset</button>
            </div>}
            {/* ademas de los botones vamos a renderizar la lista de las vueltas guardadas por el usuario*/}
            <ul>
                {/* aca le decimos que si la longitud del array es mayor a cero, es decir hay vueltas, nos imprima el titulo Vueltas, de lo contrario no */}
                {props.vueltas.length > 0 ?  <li><h2>Vueltas</h2></li>: <li></li>}
               
                {
                    // mapeamos la lista vueltas, y para cada uno de sus elementos (vuelta) 
                    // creamos un elemento li que como valor va a tomar lo que retorne la funcion vuelta tomando como parametro
                    // cada una de las vueltas en el arreglo
                    props.vueltas.map(vuelta =>

                        (<li key = {vuelta.id}>{vuelta.id +1}<img className= "clockIcon" alt = "clock-icon"src= "https://cdn.pixabay.com/photo/2017/06/26/17/06/hexagon-2444429_960_720.png"></img>{time(vuelta)}</li>)
                    )
                }
            </ul>
            
             
        </>
    )
}

export default Buttons;