import data from '../data.js'
const pomodoroInterface  = ()=>{
    let time = document.querySelector('.pomodoro-time')
    let btnStart = document.querySelector('#start-button')

    time.innerHTML = `${data.pomodoro.min} : ${data.pomodoro.second}`


    btnStart.addEventListener('click',()=>{
        setTimeout(()=>{
            let timePomodoro = time.textContent
            timePomodoro = timePomodoro.split(':')
            time.innerHTML = `${timePomodoro[0] - 1 } : ${timePomodoro[1] - 1}`
        },1000)
    })
}

export default pomodoroInterface