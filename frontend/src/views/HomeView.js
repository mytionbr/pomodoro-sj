import data from '../data.js'

const Pomodoros = class{
    constructor(){
        this.modes = ['pomodoro','shortBreak','longBreak']
        this.currentMode = this.modes[0]
        this.timesForLongBreak = 4
        this.times = 0
    }
   setTime(){
        ((this.times % this.timesForLongBreak) != 0) 
        ? (this.currentMode === this.modes[0]) ? (times++,this.currentMode = this.modes[1]) : this.currentMode = this.modes[0] 
        : this.currentMode = this.modes[2]
    }
}

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
  
    console.log(time)
    let pomodoros = new Pomodoros()
    switch (pomodoros.currentMode) {
        case 'pomodoro': 
                startPomodoro(time)
                pomodoros.setTime()
            break;
        case 'shortBreak': 
                shortBreak(time)
                pomodoros.setTime()
        break;
        case 'longBreak': 
                longBreak(time)
                pomodoros.setTime()
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
    
    modesController(time)
    
    btnStart.addEventListener('click',()=>{
        
        btnPause.disabled = false
        btnPause.classList.remove('btnpause')       
       
        let timePomodoro = time.textContent
         console.log(timePomodoro)
            timePomodoro = timePomodoro.split(':')
        let minute,second
        let pomodoros = new Pomodoros();
        console.log((Number(timePomodoro[0]) == 0 && Number(timePomodoro[1] == 0))? true : false);
        (timePomodoro[0] != 0 && timePomodoro[1] == 0)
            ? (minute = timePomodoro[0], second = timePomodoro[1])
            : (pomodoros.setTime(),modesController(time))
        
         let timeout = setInterval(()=>{

                    (minute == 0) ? ((second == 0) ? clearInterval(timeout) : second-- ) 
                                  : (second == 0) ? (minute--,second='59') : second--
                                  
                    time.innerHTML = `${(minute < 10)? "0"+minute : minute} : ${(second < 10)? "0"+second : second}` 
                        
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