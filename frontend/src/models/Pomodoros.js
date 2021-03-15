class Pomodoros{
    constructor(){
        this.modes = ['pomodoro','shortBreak','longBreak']
        this.currentMode = this.modes[0]
        this.timesForLongBreak = 4
        this.times = 0
    }
   setTime(){
        
        if(this.times % this.longBreak != 0){
            if(this.currentMode === this.modes[0]){
                console.log('not workins')
                this.times++
                this.currentMode = this.modes[1]
            } else{
                console.log('workins')
                this.currentMode = this.modes[0]
            }
        }else{
            this.currentMode = this.modes[2]
        }
        console.log('o times atual é '+ this.times) 
    }

}

export default Pomodoros