import data from '../data.js'
const pomodoroInterface  = ()=>{
    let time = document.querySelector('.pomodoro-time')
    let btnStart = document.querySelector('#start-button')

    time.innerHTML = `${data.pomodoro.min} : ${data.pomodoro.second}`


    btnStart.addEventListener('click',()=>{
        let timePomodoro = time.textContent
            timePomodoro = timePomodoro.split(':')
        let minute,second
        
        (timePomodoro[0] != 0 && timePomodoro[0] != 0)
            ? (minute = timePomodoro[0], second = timePomodoro[1])
            : (minute = data.pomodoro.min, second = data.pomodoro.second)


        
        let i = setInterval(()=>{

                    (minute == 0) ? ((second == 0) ? clearInterval(i) : second-- ) 
                                  : (second == 0) ? (minute--,second='59') : second--
                                  
                    time.innerHTML = `${(minute < 10)? "0"+minute : minute} : ${(second < 10)? "0"+second : second}` 
                        
                },10)
        
    })
}

export default pomodoroInterface