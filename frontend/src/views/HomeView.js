import data from '../data.js'
import MainController from '../models/MainController.js'
import Chronometer from '../models/Chronometer.js'
import Pomodoro from '../models/Pomodoro.js'
import ModeManager from '../models/ModeManager.js'


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
        let mainController = new MainController(data,Pomodoro,ModeManager,Chronometer)
        

    }
}
export default HomeView