import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';
import Contador from './Contador';

const Cronometro = () => {
    //variable que me guarda el tiempo en centesimas
    // const [miliS, setmiliS] = useState(0)
    //estado que me define si el cronometro esta corriendo o esta detenido
    const [isStop, setStatus] = useState("running");
    //estado que me va a guardar el tiempo del cronometro
    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
    //estado que me va a iniciar o terminar el intervalo del cronometro
    const [cronoInt, setCronoInt] = useState();
    //estado que va a registrar las vueltas o marcas del cronometro
    const [vueltas, setVueltas] = useState([])

    let ms = time.ms;
    let s = time.s;
    let m = time.m;
    let h = time.h;

    

    // función que maneja si el cronometro esta activo o detenido segun se presione el boton start stop
    const handleStatus = ()=> {
        
        console.log(isStop)
        if (isStop === "running"){
            running();
            setStatus("stopped");
            
        }
        else{
            stopped()
            setStatus("running")           
        }
        console.log(time)

    
    }

    
    // funciones que hacen iniciar y detener el intervalo 
    const running = () => setCronoInt(setInterval(stopWatch, 10));
    const stopped = () => setCronoInt(clearInterval(cronoInt))
    
    //funcion que va sumando el tiempo y contando los ms, s, m, y horas
   const stopWatch = ()=>{
        // time.ms += 1
        ms += 1;
        if (ms >=100){
            s += 1;
            ms = 0;
           
        }
        if (s > 59){
            m += 1;
            s = 0;
        }
        if (m > 59){
            h += 1;
            m = 0;
        }
    
        setTime({ms:ms, s:s, m:m, h:h})
        }

        //funcion reset que establece el tiempo del cronometro a ceros
        const reset = ()=> {
            setTime({ms: 0, s: 0, m: 0, h: 0});
            setVueltas([])
        }

        //funcion que va a tomar la impresión del tiempo en el momento 
        const vuelta = () => {
            setVueltas([
                ...vueltas,
                {
                    id: vueltas.length,
                    time: time
                }
    
            ]);
            console.log(vueltas)

        }
//    const vueltaa = () =>{
//        vueltas.forEach((vuelta)=>{
//         //    let {id, time} = vuelta;
//            console.log(vueltas[2])
//        })
//    }

    return(
        <>
            <div id="screen" className = {isStop === "stopped"? "inactive" : "active"}>
                <div id="display">
                    <Contador time = {time} />
                </div>
            </div>
            <Buttons handleStatus = {handleStatus} isStop = {isStop} reset= {reset} vuelta= {vuelta} vueltas = {vueltas}/>
            {/* <button onClick = {handleStatus}>{isStop === "stopped" ? 'stop' : 'start'}</button> */}
            {/* <button className = "Vuelta" onClick= {vuelta} >Vuelta</button>
            <ul>
                <li>Vueltas</li>
                {
                    vueltas.map(vuelta =>
                        (<li key = {vuelta.id}>{}</li>)
                    )
                }
            </ul>
             */}
        </>
    )
}

export default Cronometro;