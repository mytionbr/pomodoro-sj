import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDesktop,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

import ChronometerSetting from "../components/ChronometerSetting";
import ApplicationSetting from "../components/ApplicationSetting";
import NotificationsSetting from "../components/NotificationsSetting";

const SettingsScreen = (props) => {
  const initialSetting = "cronometro";

  const [currentSetting, setCurrentSetting] = useState(initialSetting);

  useEffect(() => {
    setCurrentSetting(props.match.params.setting);
  });

  

  const getSetting = (current) => {
    switch (current) {
      case "cronometro":
        return <ChronometerSetting />;
      case "aplicacao":
        return <ApplicationSetting />;
      case "notificacao":
        return <NotificationsSetting />;
      default:
        return <ChronometerSetting />;
    }
  };

  return (
    <div className="container-config">
      <div className="menu-config">
        <div className={
          currentSetting === 'cronometro' 
          ?'menu-section menu-section-selector' 
          :'menu-section'  
          } id="option_chronometer">
          <Link to="/configuracoes/cronometro">
            {" "}
            <i>
              <FontAwesomeIcon icon={faStopwatch} />
            </i>{" "}
            Cronômetro
          </Link>
        </div>
        <div className={
          currentSetting === 'aplicacao' 
          ?'menu-section menu-section-selector' 
          :'menu-section'  
          } id="option_aplication">
          <Link to="/configuracoes/aplicacao">
            <i>
              <FontAwesomeIcon icon={faDesktop} />
            </i>{" "}
            Aplicação
          </Link>
        </div>
        <div className={
          currentSetting === 'notificacao' 
          ?'menu-section menu-section-selector' 
          :'menu-section'  
          } id="option_motifications">
          <Link to="/configuracoes/notificacao">
            <i>
              <FontAwesomeIcon icon={faBell} />
            </i>{" "}
            Notificações
          </Link>
        </div>
      </div>

      <div id="setting_main">{getSetting(currentSetting)}</div>
    </div>
  );
};

export default SettingsScreen;
