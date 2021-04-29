import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import ChronometerSetting from '../components/ChronometerSetting'
import ApplicationSetting from '../components/ApplicationSetting'
import NotificationsSetting from '../components/NotificationsSetting'

const SettingsScreen = (props) => {
    
    const initialSetting = "cronometro"
    
    const [currentSetting,setCurrentSetting] = useState(initialSetting)

    useEffect(()=>{
       setCurrentSetting(props.match.params.setting)
    })

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
        <div class="container-config">
        <div class="menu-config">
            <div class="menu-section" id="option_chronometer"><Link to="/configuracoes/cronometro"> <i class="fas fa-stopwatch"></i> Cronômetro</Link></div>
            <div class="menu-section" id="option_aplication"><Link to="/configuracoes/aplicacao"><i class="fas fa-desktop"></i> Aplicação</Link></div>
            <div class="menu-section" id="option_motifications"><Link to="/configuracoes/notificacao"><i class="far fa-bell"></i> Notificações</Link></div>
        </div>
       
        <div id="setting_main"></div>
            {getSetting(currentSetting)}
        </div>
    )
}

export default SettingsScreen
