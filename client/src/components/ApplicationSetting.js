import PainelColor from "./PainelColor";

import { useState } from "react";
import { render } from "react-dom";

const ApplicationSetting = ({ settings, dispatch, colorManager }) => {
  const [state, setState] = useState(false);
  const [mode, setMode] = useState(false);

  const pomodoroBackgroundTheme = {backgroundColor:settings.pomodoro.background.primary}
  const shortBreakBackgroundTheme = {backgroundColor:settings.shortBreak.background.primary}
  const longBreakBackgroundTheme = {backgroundColor:settings.longBreak.background.primary}

  const activateColorPainel = (mode) => {
    setState(!state);
    setMode(mode);
  };

  return (
    <>
      <div className="container_setting_aplication">
        <h2>Cor do tema:</h2>
        <div className="container_theme_option">
          <div
            className="theme_option"
            id="theme_pomodoro"
            onClick={() => activateColorPainel(settings.pomodoro)}
          >
            <div className="theme_color" style={pomodoroBackgroundTheme}></div>
            <div className="title_option">Pomodoro</div>
          </div>
          <div
            className="theme_option"
            id="theme_short_break"
            onClick={() => activateColorPainel(settings.shortBreak)}
          >
            <div className="theme_color" style={shortBreakBackgroundTheme}></div>
            <div className="title_option">Pausa curta</div>
          </div>
          <div
            className="theme_option"
            id="theme_long_break"
            onClick={() => activateColorPainel(settings.longBreak)}
          >
            <div className="theme_color" style={longBreakBackgroundTheme}></div>
            <div className="title_option">Pausa longa</div>
          </div>
        </div>
      </div>
      {state ? (
        <PainelColor
          close={activateColorPainel}
          mode={mode}
          dispatch={dispatch}
          colorManager={colorManager}
          settings={settings}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ApplicationSetting;
