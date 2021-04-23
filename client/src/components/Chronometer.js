/* eslint-disable no-unused-expressions*/
import { useState } from "react";
const Chronometer = (props) => {
  const modes = {
    pomodoro: {
      type:"pomodoro",
      time:{
        minute:'25',
        second:'00'
      }
    },
    shortBreak: {
      type:"shortBreak",
      time:{
        minute:'05',
        second:'00'
      }
    },
    longBreak: {
      type:"longBreak",
      time:{
        minute:'10',
        second:'00'
      }
    },
  };

  const [time, setTime] = useState(modes.pomodoro.time);
  const [intervalId, setIntervalId] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [currentMode, setCurrentMode] = useState(modes.pomodoro);

  const handleStartCount = () => {
    let { minute, second } = time;
    setDisableButton(true);

    if (!intervalId) {
      setIntervalId(
        setInterval(() => {
          minute == 0
            ? second == 0
              ? handlePauseTime()
              : second--
            : second == 0
            ? (minute--, (second = "59"))
            : second--;

          setTime({
            minute:
              minute < 10 && typeof minute === "number" ? "0" + minute : minute,
            second:
              second < 10 && typeof second === "number" ? "0" + second : second,
          });
        }, 100)
      );
    }
  };

  const handlePauseTime = () => {
    console.log(intervalId);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setDisableButton(false);
    }
  };

  const handleModeTimer = (mode)=>{
    handlePauseTime()
    setCurrentMode(mode)
    setTime(mode.time)
  }


  return (
    <div className="pomodoro-container">
      <div className="pomodoro-options">
        <button id="pomodoro-mode" onClick={()=>handleModeTimer(modes.pomodoro)}>Pomodoro</button>
        <button id="pausa-curta-mode" onClick={()=>handleModeTimer(modes.shortBreak)}>Pausa curta</button>
        <button id="pausa-longa-mode" onClick={()=>handleModeTimer(modes.longBreak)}>Pausa longa</button>
      </div>
      <div className="pomodoro-time" id="pomodoro-time">
        {`${time.minute} : ${time.second}`}
      </div>
      <div className="pomodoro-tasks">Trabalho</div>
      <div className="pomodoro-buttons">
        <button id="start-button" onClick={handleStartCount}>
          Começar
        </button>

        {disableButton ? (
          <button id="pause-button" onClick={handlePauseTime}>
            {" "}
            Pausar
          </button>
        ) : (
          <button id="pause-button" disabled className="btnpause">
            {" "}
            Pausar
          </button>
        )}
      </div>
    </div>
  );
};

export default Chronometer;
