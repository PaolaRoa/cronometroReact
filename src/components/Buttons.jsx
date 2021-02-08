import React from 'react';


const Buttons = (props)=> {
    let timeS = '';
    
    const time = (vuelta)=>{
            let ms = vuelta.time.ms > 9 ? vuelta.time.ms : `0${vuelta.time.ms}`;
            let s = vuelta.time.s > 9 ? vuelta.time.s : `0${vuelta.time.s}`;
            let m = vuelta.time.m > 9 ? vuelta.time.m : `0${vuelta.time.m}`;
            let h = vuelta.time.h > 9 ? vuelta.time.h : `0${vuelta.time.h}`;
            timeS = `${h}:${m}:${s}:${ms}`;
           
        return timeS}          
        
    // console.log(timeS)

    
    
    return(
        <>
            {props.isStop === "stopped" ? <div className="buttonsContainer"><button className = "stop" onClick = {props.handleStatus}><img className= "buttonIcon"alt= "Stop" src= "https://cdn.pixabay.com/photo/2014/04/03/00/40/button-309039_960_720.png"></img></button>
                                            <button className = "auxButton" onClick= {props.vuelta} >Vuelta</button>
                                          </div> :
             <div className="buttonsContainer">
                 <button className = "start" onClick = {props.handleStatus}><img className= "buttonIcon"alt ="Start" src = "https://cdn.pixabay.com/photo/2016/03/31/20/37/button-1295902_960_720.png"></img></button>
                 <button className = "auxButton" onClick = {() => props.reset()}>Reset</button>
            </div>};
            {/* <button className = "Vuelta" onClick= {props.vuelta} >Vuelta</button> */}
            <ul>
                {props.vueltas.length > 0 ?  <li><h2>Vueltas</h2></li>: <li></li>}
               
                {
                    props.vueltas.map(vuelta =>

                        (<li key = {vuelta.id}>{vuelta.id +1}<img className= "clockIcon" alt = "clock-icon"src= "https://cdn.pixabay.com/photo/2017/06/26/17/06/hexagon-2444429_960_720.png"></img>{time(vuelta)}</li>)
                    )
                }
            </ul>
            
             
        </>
    )
}

export default Buttons;