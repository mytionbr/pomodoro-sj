import ApplicationSetting from "../components/ApplicationSetting.js";
import ChronometerSetting from "../components/ChronometerSetting.js";
import NotificationsSetting from "../components/NotificationsSetting.js";
import { parseRequestUrl } from "../utils.js";

const SettingsView = class {
  constructor() {
    this.state = {
      component: null,
    };
    this.btnOptions = {};
  }

  afterRender = ()=>{
      this.btnOptions = {
        option_chronometer: document.querySelector("#option_chronometer"),
        option_aplication: document.querySelector("#option_aplication"),
        option_notifications: document.querySelector("#option_motifications"),
      }

      document.querySelector('#setting_main').innerHTML = this.renderComponent()
  }

  

  removeSelectorStyle =()=>{
      for (let prop in this.btnOptions) {
            console.log(this.btnOptions[prop])
            this.btnOptions[prop].classList.remove('menu-section-selector')
      }
  }

  renderChonometerSetting = ()=>{
      this.removeSelectorStyle()
      this.btnOptions.option_chronometer.classList.add('menu-section-selector')
      return ChronometerSetting.render()
  } 

  renderApplicationSetting = ()=>{
    this.removeSelectorStyle()
    this.btnOptions.option_aplication.classList.add('menu-section-selector')
    return ApplicationSetting.render()
  }

  renderNotificationsSetting = ()=>{
    this.removeSelectorStyle()
    this.btnOptions.option_notifications.classList.add('menu-section-selector')
    return NotificationsSetting.render()
  }

  renderComponent = () => {
    switch (this.state.component) {
      case "cronometro":
        return this.renderChonometerSetting();
      case "aplicacao":
        return this.renderApplicationSetting();
      case "notificacao":
        return this.renderNotificationsSetting();
    }
  };

  render = () => {
    const request = parseRequestUrl();
    this.state.component = request.action;

    return `
        <div class="container-config">
        <div class="menu-config">
            <div class="menu-section" id="option_chronometer"><a href="/#/configuracoes/cronometro"> <i class="fas fa-stopwatch"></i> Cronômetro</a></div>
            <div class="menu-section" id="option_aplication"><a href="/#/configuracoes/aplicacao"><i class="fas fa-desktop"></i> Aplicação</a></div>
            <div class="menu-section" id="option_motifications"><a href="/#/configuracoes/notificacao"><i class="far fa-bell"></i> Notificações</a></div>
        </div>
       
        <div id="setting_main"></div>
       
        </div>
        `;
  };
};
export default SettingsView;
