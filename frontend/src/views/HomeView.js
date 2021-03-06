import data from '../data.js'




const pausePomodoro = (btn,timeout)=>{
    btn.addEventListener('click',()=>{
        clearInterval(timeout)
        btn.classList.add('btnpause')
    })
}

const startPomodoro  = ()=>{
    
    let time = document.querySelector('.pomodoro-time')
    let btnStart = document.querySelector('#start-button')
    let btnPause = document.querySelector('#pause-button')
    time.innerHTML = `${data.pomodoro.min} : ${data.pomodoro.second}`

    btnPause.disabled = true
    btnPause.classList.add('btnpause')

    btnStart.addEventListener('click',()=>{
        
        btnPause.disabled = false
        btnPause.classList.remove('btnpause')

        
       
        
        let timePomodoro = time.textContent
            timePomodoro = timePomodoro.split(':')
        let minute,second
        
        (timePomodoro[0] != 0 && timePomodoro[0] != 0)
            ? (minute = timePomodoro[0], second = timePomodoro[1])
            : (minute = data.pomodoro.min, second = data.pomodoro.second)
        
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
            <button id='pomodoro-mode'>Pomodoro</button>
            <button id='pausa-curta-mode'>Pausa curta</button>
            <button id='pausa-longa-mode'>Pausa longa</button>
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
        startPomodoro()
    }
}
export default HomeView