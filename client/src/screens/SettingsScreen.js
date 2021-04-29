import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import ChronometerSetting from '../components/ChronometerSetting'
import ApplicationSetting from '../components/ApplicationSetting'
import NotificationsSetting from '../components/NotificationsSetting'

const SettingsScreen = (props) => {
    
    const initialSetting = "cronometro"
    
    const [currentSetting,setCurrentSetting] = useState(initialSetting)
    let btnsOptions = {
            option_chronometer: '',
            option_aplication: '',
            option_notifications: '',
    }

    useEffect(()=>{
       setCurrentSetting(props.match.params.setting)

       btnsOptions.option_chronometer = document.querySelector("#option_chronometer")
       btnsOptions.option_aplication = document.querySelector("#option_aplication")
       btnsOptions.option_notifications = document.querySelector("#option_motifications")
    })

    const removeSelectorStyle = ()=>{
       for (let prop in btnsOptions) {
              console.log(btnsOptions[prop])
              btnsOptions[prop].classList.remove('menu-section-selector')
        }
    }
    
    const handleSelectOption = (e)=>{
        removeSelectorStyle()
        e.target.parentNode.classList.add('menu-section-selector')
    }

    const getSetting = current =>{
        switch(current){
            case 'cronometro':
                return <ChronometerSetting/>
            case 'aplicacao':
                return <ApplicationSetting/>
            case 'notificacao':
                return <NotificationsSetting/>
            default:
                return <ChronometerSetting/>
                
        }
    }

    return (
        <div className="container-config">
        <div className="menu-config">
            <div onClick={handleSelectOption} className="menu-section" id="option_chronometer"><Link to="/configuracoes/cronometro"> <i className="fas fa-stopwatch"></i> Cronômetro</Link></div>
            <div onClick={handleSelectOption} className="menu-section" id="option_aplication"><Link to="/configuracoes/aplicacao"><i className="fas fa-desktop"></i> Aplicação</Link></div>
            <div onClick={handleSelectOption} className="menu-section" id="option_motifications"><Link to="/configuracoes/notificacao"><i className="far fa-bell"></i> Notificações</Link></div>
        </div>
       
        <div id="setting_main"></div>
            {getSetting(currentSetting)}
        </div>
    )
}

export default SettingsScreen
