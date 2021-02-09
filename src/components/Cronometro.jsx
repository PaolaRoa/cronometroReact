import React, {useState}from 'react';
import Buttons from './Buttons';
import Contador from './Contador';

const Cronometro = () => {
   
    //estado que me define si el cronometro esta corriendo o esta detenido
    //desestructuración [estado, funcion que maneja el estado]
    const [isStop, setStatus] = useState("stopped");
    //estado que me va a guardar el tiempo del cronometro
    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
    //estado que me va a iniciar o terminar el intervalo del cronometro
    const [cronoInt, setCronoInt] = useState();//permite detener o iniciar el intervalo
    //estado que va a registrar las vueltas o marcas del cronometro
    const [vueltas, setVueltas] = useState([])
    //variables para manipular los tiempos
    let ms = time.ms;
    let s = time.s;
    let m = time.m;
    let h = time.h;

    

    // función que maneja si el cronometro esta activo o detenido segun se presione el boton start stop
    const handleStatus = ()=> {
        //si el estado es stopped le decimos que ejecute la funcion running y coloque el estado como running
        // console.log(isStop)
        if (isStop === "stopped"){
            running();
            setStatus("running");
            
        }
        //si el estado es running ejecuta la funcion stopped y coloca el estado como stopped
        else{
            stopped()
            setStatus("stopped")           
        }
        console.log(isStop)
    
        // console.log(time)  
    }

    
    // funciones que hacen iniciar y detener el intervalo 
    //running llama a la funcion stopwatch cada 10 segundos mediante el useState setCronoInt
    const running = () => setCronoInt(setInterval(stopWatch, 10)); 
    //stopped detiene la funcion stopwatch limpiando el intervalo 
    const stopped = () => setCronoInt(clearInterval(cronoInt))
    
    //funcion que va sumando el tiempo y contando los ms, s, m, y horas
   const stopWatch = ()=>{
        // suma 1 ms cada vez que es llamada por la funcion running       
        ms += 1;
        //si son mas de 100 se aumenta un segundo y ms a cero
        if (ms >=100){
            s += 1;
            ms = 0;
           
        }
        //si los segundos son mas de 59 se suma 1 minuto y segundos a cero
        if (s > 59){
            m += 1;
            s = 0;
        }
        //si los minutos son mas de 59 se suma una hora y minutos a cero
        if (m > 59){
            h += 1;
            m = 0;
        }
    //se pasan estas variables a la funcion que va a mantener el tiempo dentro de un objeto
        setTime({ms:ms, s:s, m:m, h:h})
        }

        //funcion reset que establece el tiempo del cronometro a ceros y limpia al arreglo de vueltas volviendolo vacio
        const reset = ()=> {
            setTime({ms: 0, s: 0, m: 0, h: 0});
            setVueltas([])
        }

        //funcion que va a tomar la impresión del tiempo en el momento en que se haga clic en el boton vuelta
        const vuelta = () => {
            //se agrega al arreglo vueltas el arreglo que ya esta y un objeto que ontiene el id y el tiempo en ese momento
            setVueltas([
                ...vueltas,//esto es el arreglo que ya trae adentro
                {
                    id: vueltas.length,//numero
                    time: time //lo que este dentro de time
                }
    
            ]);
            // console.log(vueltas)
        
        }


    return(
       <div className = "container">
        {/* renderizamos un div que es el screen, y asignamos la clase segun el estado del cronometro */}
            <div id="screen" className = {isStop === "running"? "inactive" : "active"}>
                {/* dentro del div display llamamos el componente contador al cual le pasamos el time como prop */}
                <div id="display">
                    {/* llama al componente Contador y le pasa el props */}
                    <Contador tiempo = {time} />
                </div>
            </div>
            {/* llamamos el componente buttons y le pasamos sus props */}
            <Buttons handleStatus = {handleStatus} isStop = {isStop} reset= {reset} vuelta= {vuelta} vueltas = {vueltas}/>
        </div>    
    )
}

export default Cronometro;