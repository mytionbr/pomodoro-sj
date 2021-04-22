/* eslint-disable no-unused-expressions*/
import { useState } from "react";
const Chronometer = (props) => {
  const [time, setTime] = useState(props.time);
  const [intervalId, setIntervalId] = useState(null);

  const handleStartCount = () => {
    let { minute, second } = time;
    console.log(intervalId);

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
              second < 10 && typeof minute === "number" ? "0" + second : second,
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
    }
  };

  const disableButton  = () =>{
      
  }

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-options">
        <button id="pomodoro-mode">Pomodoro</button>
        <button id="pausa-curta-mode">Pausa curta</button>
        <button id="pausa-longa-mode">Pausa longa</button>
      </div>
      <div className="pomodoro-time" id="pomodoro-time">
        {`${time.minute} : ${time.second}`}
      </div>
      <div className="pomodoro-tasks">Trabalho</div>
      <div className="pomodoro-buttons">
        <button id="start-button" onClick={handleStartCount}>
          Começar
        </button>
        <button id="pause-button" onClick={handlePauseTime}>
          Pausar
        </button>
      </div>
    </div>
  );
};

export default Chronometer;
