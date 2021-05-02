/* eslint-disable no-unused-expressions*/
import { useState, useEffect, useRef, useCallback } from "react";
import ColorManager from "../util/ColorManager";

const Chronometer = ({ settings, dispatch }) => {
  const [pomodoro, setPomodoro] = useState(settings.pomodoro);
  const [shortBreak, setShortBreak] = useState(settings.shortBreak);
  const [longBreak, setLongBreak] = useState(settings.longBreak);

  const colorManager = new ColorManager();

  const [currentMode, setCurrentMode] = useState(pomodoro);
  const [time, setTime] = useState(currentMode.time);
  const [disableButton, setDisableButton] = useState(false);

  const intervalId = useRef(null);

  const handleStartCount = () => {
    let minute = Number(time.minute);
    let second = Number(time.second);

    setDisableButton(true);

    console.log(intervalId);

    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        console.log(intervalId);
        minute === 0
          ? second === 0
            ? handlePauseTime()
            : second--
          : second === 0
          ? (minute--, (second = 59))
          : second--;

        // document.title =  `${minute} : ${second} | pomodoro-js`

        setTime({
          minute:
            minute < 10 && typeof minute === "number" ? "0" + minute : minute,
          second:
            second < 10 && typeof second === "number" ? "0" + second : second,
        });
      }, 100);
    }
  };

  const handlePauseTime = function () {
    console.log(intervalId);
    if (intervalId) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      setDisableButton(false);
    }
  };

  const handleModeTimer = (mode) => {
    handlePauseTime();
    setCurrentMode(mode);
    dispatch({
      type: "updateSessions",
      payload: { currentSession: mode.type },
    });
    colorManager.changeBackground(mode.type);
    setTime(mode.time);
  };

  const timeValidation = () => {
    const { minute } = time;

    if (time.minute === "" || time.minute === "0") {
      setTime({
        ...time,
        minute: "00",
      });
    }

    if (Number(minute) < 10 && minute.length < 2) {
      setTime({
        ...time,
        minute: "0" + minute,
      });
    }
  };

  const handleChangeMode = ()=>{
    console.log(settings.sessions.currentSession)
    switch(settings.sessions.currentSession){
      case 'pomomodoro':
        setTime(pomodoro.time)
        break
      case 'shortBreak':
        setTime(shortBreak.time)
        break
      case 'longBreak':
        setTime(longBreak.time)
        break
      default:
        break
    }
  } 

  useEffect(() => {
    timeValidation();
  });

  useEffect(()=>{
    handleChangeMode()
  },[])

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-options">
        <button id="pomodoro-mode" onClick={() => handleModeTimer(pomodoro)}>
          Pomodoro
        </button>
        <button
          id="pausa-curta-mode"
          onClick={() => handleModeTimer(shortBreak)}
        >
          Pausa curta
        </button>
        <button
          id="pausa-longa-mode"
          onClick={() => handleModeTimer(longBreak)}
        >
          Pausa longa
        </button>
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
