import data from '../data.js'
import Pomodoros from '../models/Pomodoros'


const referencesElements = ()=> {
    return ({
        time: document.querySelector('.pomodoro-time'),
        btnStart: document.querySelector('#start-button'),
        btnPause: document.querySelector('#pause-button')
    })
    
}

const pausePomodoro = (btn,timeout)=>{
    btn.addEventListener('click',()=>{
        clearInterval(timeout)
        btn.classList.add('btnpause')
    })
}

const longBreak = (time)=>{
   time.innerHTML = `${data.pausaLonga.min} : ${data.pausaLonga.second}`
}

const shortBreak = (time)=>{
    time.innerHTML = `${data.pausaCurta.min} : ${data.pausaCurta.second}`
}

const startPomodoro  = (time)=>{
    time.innerHTML = `${data.pomodoro.min} : ${data.pomodoro.second}`
   
}

const modesController = (time,pomodoros)=>{
  
    console.log(time)
    console.log(pomodoros.currentMode)
    console.log(pomodoros)
    
    switch (pomodoros.currentMode) {
        case 'pomodoro': 
                startPomodoro(time)
              
            break;
        case 'shortBreak': 
                shortBreak(time)
              
        break;
        case 'longBreak': 
                longBreak(time)
                
            break;
        default:
            break;
    } 

    addListeners(time)

}

const addListeners = (time)=>{
    let btnPomodoro = document.querySelector('#pomodoro-mode')
    let btnShortBreack = document.querySelector('#pausa-curta-mode')
    let btnLongBreack = document.querySelector('#pausa-longa-mode')

    btnPomodoro.addEventListener('click',()=>{
        startPomodoro(time)
    })
    btnShortBreack.addEventListener('click',()=>{
        shortBreak(time)
    })
    btnLongBreack.addEventListener('click',()=>{
        longBreak(time)
    })
}




const timePomodoro = ({time,btnPause,btnStart})=>{
    btnPause.disabled = true
    btnPause.classList.add('btnpause')
    let pomodoros = new Pomodoros
    modesController(time,pomodoros)
    
    btnStart.addEventListener('click',()=>{
        
        btnPause.disabled = false
        btnPause.classList.remove('btnpause')       
       
        let timePomodoro = time.textContent
         console.log(timePomodoro)
            timePomodoro = timePomodoro.split(':')
        let minute,second
       
        (timePomodoro[0] == 0 && timePomodoro[1] == 0)
            ? (modesController(time,pomodoros))
            : (minute = timePomodoro[0], second = timePomodoro[1])
        
         let timeout = setInterval(()=>{

                    (minute == 0) ? ((second == 0) ? clearInterval(timeout) : second-- ) 
                                  : (second == 0) ? (minute--,second='59') : second--
                                  
                    time.innerHTML = `${(minute < 10)? "0"+minute : minute} : ${(second < 10)? "0"+second : second}` 
                    if(minute == '00' && second == '00') {pomodoros.setTime(),modesController(time,pomodoros)} 
                },10) 
                pausePomodoro(btnPause,timeout)             
    })
}



const HomeView = {
    
    render: () => {
       
        return `
        <div class="pomodoro-container">
        <div class="pomodoro-options">
            <button id='pomodoro-mode' data-active="true">Pomodoro</button>
            <button id='pausa-curta-mode'  data-active="false">Pausa curta</button>
            <button id='pausa-longa-mode' data-active="false">Pausa longa</button>
        </div>
        <div class="pomodoro-time">
            60 : 00
        </div>
        <div class="pomodoro-tasks">Trabalho</div>
        <div class="pomodoro-buttons">
            <button id="start-button">Começar</button>
            <button id="pause-button">Pausar</button>
        </div>
        </div>
        `
    },

    afterRender: ()=>{
        let elements = referencesElements()
        timePomodoro(elements)
        

    }
}
export default HomeView