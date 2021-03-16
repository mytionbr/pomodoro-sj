import ApplicationSetting from '../components/ApplicationSetting.js'
import ChronometerSetting from '../components/ChronometerSetting.js'
import NotificationsSetting from '../components/NotificationsSetting.js'
import {parseRequestUrl} from '../utils.js'


const SettingsView = class {
    
    constructor(){
        this.state = {
            component: null
                }
        }

     afterRender = ()=>{  
       
    }

    renderComponent =()=>{
        switch (this.state.component) {
            case "cronometro": return ChronometerSetting.render()
            case "aplicacao": return ApplicationSetting.render()
            case "notificacao": return NotificationsSetting.render()
        }
    }

    render =  () => {
        const request = parseRequestUrl()
        this.state.component = request.action
       

        return `
        <div class="container-config">
        <div class="menu-config">
            <div class="menu-section" id="option-chronometer"><a href="/#/configuracoes/cronometro"> <i class="fas fa-stopwatch"></i> Cronômetro</a></div>
            <div class="menu-section" id="option-aplication"><a href="/#/configuracoes/aplicacao"><i class="fas fa-desktop"></i> Aplicação</a></div>
            <div class="menu-section" id="option-motifications"><a href="/#/configuracoes/notificacao"><i class="far fa-bell"></i> Notificações</a></div>
        </div>
       
        ${this.renderComponent()}
       
        </div>
        `
    }
}
export default SettingsView