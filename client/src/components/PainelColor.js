import { useState } from "react";

import ThemeOption from "./ThemeOption";

function PainelColor({ settings, dispatch, colorManager, close, mode }) {
  const [colors,setColors] = useState(settings.colorOptions);

  

  return (
    <div className={"container-background"}>
      <div className="close-panel-button" onClick={close}>
        X
      </div>
      <div className={"container-painel-color"}>
        {colors.map((element) => {
          return (
            <ThemeOption
              key={element}
              color={element}
              colorManager={colorManager}
              mode={mode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PainelColor;
