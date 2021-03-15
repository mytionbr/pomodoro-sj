import data from '../data.js'
import Pomodoros from '../models/Pomodoros.js'


let pomodoros = new Pomodoros()
let timeout

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

const modesController = (time)=>{
  
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

    

}

const addListeners = ({time})=>{
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

const handleStopTime = (timeout)=>{
    console.log('mais de uma vez')
    pomodoros.setTime()
    modesController(time)
    clearInterval(timeout)   
}

const handleStartTime = (time,btnPause,minute,second)=>{
    let timeout = setInterval(()=>{
        (minute == 0) ? ((second == 0) ? (handleStopTime(timeout)) : second-- ) 
                        : (second == 0) ? (minute--,second='59') : second--
                        
        time.innerHTML = `${(minute < 10)? "0"+minute : minute} : ${(second < 10)? "0"+second : second}` 
    
    },100) 
    pausePomodoro(btnPause,timeout)
}


const timePomodoro = ({time,btnPause,btnStart})=>{
    btnPause.disabled = true
    btnPause.classList.add('btnpause')
    
    modesController(time)
    
    btnStart.addEventListener('click',()=>{
        
        btnPause.disabled = false
        btnPause.classList.remove('btnpause')       
       
        let timePomodoro = time.textContent

        timePomodoro = timePomodoro.split(':')

        let minute = Number(timePomodoro[0])
        let second = Number(timePomodoro[1])
              
        handleStartTime(time,btnPause,minute,second)
              
    })
}



const HomeView = {
    
    render: () => {
       
        return `
        <div class="pomodoro-container">
        <div class="pomodoro-options">
            <button id='pomodoro-mode'>Pomodoro</button>
            <button id='pausa-curta-mode'>Pausa curta</button>
            <button id='pausa-longa-mode'>Pausa longa</button>
        </div>
        <div class="pomodoro-time" id="pomodoro-time">
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
        addListeners(elements)

    }
}
export default HomeView