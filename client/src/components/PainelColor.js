import React from "react";

function PainelColor(props) {
  return (
    <div className={"container-background"}>
      <div className="close-panel-button" onClick={props.close}>
         X
      </div>
      <div className={"container-painel-color"}>
        <div className="theme_option" id="theme_pomodoro">
          <div className="theme_color"></div>
        </div>
      </div>
    </div>
  );
}

export default PainelColor;
