import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import ChronometerSetting from '../components/ChronometerSetting'
import ApplicationSetting from '../components/ApplicationSetting'
import NotificationsSetting from '../components/NotificationsSetting'

const SettingsScreen = (props) => {
    
    const initialSetting = "cronometro"
    
    const [currentSetting,setCurrentSetting] = useState(initialSetting)
    const [currentBtnOption,setCurrentBtnOption] = useState(null)
    let btnsOptions = null

    useEffect(()=>{
       setCurrentSetting(props.match.params.setting)
       btnsOptions = document.querySelectorAll(".menu-section")
       console.log(btnsOptions)
    })
    
    const handleSelectOption = async (e)=>{
        e.target.classList.add('menu-section-selector')
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
