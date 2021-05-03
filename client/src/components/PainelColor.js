import { useState } from "react";

import ThemeOption from "./ThemeOption";

function PainelColor({ settings,loading, dispatch, colorManager, close, mode }) {
  
  const [colors,setColors] = useState(settings.colorOptions);

  const activeLoading = ()=>{
    return loading 
  }

  return (
    <div className={"container-background" }>
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
              close={close}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PainelColor;
