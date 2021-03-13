export default  class{
    constructor(){
        this.modes = ['pomodoro','shortBreak','longBreak']
        this.currentMode = this.modes[0]
        this.timesForLongBreak = 4
        this.times = 0
    }
   setTime(){
        (this.times % this.longBreak != 0) 
        ? (this.currentMode == this.modes[0]) ? (alert('sffa'),this.times++,this.currentMode = this.modes[1]) : (this.currentMode = this.modes[0],alert('10101010'))
        : this.currentMode = this.modes[2]
        
    }
}