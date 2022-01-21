import { useState, useEffect } from "react";
import Flip from "./flip";

function Countdown({ launchTime }) {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDown = new Date(launchTime).getTime();

  useEffect(() => {
    let interval = () => {
      setInterval(function () {
        const now = new Date().getTime();
        let distance = countDown - now;

        setDays(Math.floor(distance / day));
        setHours(
          Math.floor((distance % day) / hour).toLocaleString(undefined, {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setMinutes(
          Math.floor((distance % hour) / minute).toLocaleString(undefined, {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setSeconds(
          Math.floor((distance % minute) / second).toLocaleString(undefined, {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );

        //   do something later when date is reached
        if (distance < 0) {
          clearInterval(interval);
        }
      }, 0);
    };

    interval();
  }, []);

  return (
    <div className="container-countdown">
      <div className="counter-item-container">
        <div className="flip-number">
          <div className="days">
            <Flip value={days} />
          </div>
          <h2> DAYS</h2>
        </div>
        <div className="flip-number">
          <div className="hours">
            <Flip value={hours} />
          </div>
          <h2> HOURS</h2>
        </div>
        <div className="flip-number">
          <div className="minutes">
            <Flip value={minutes} />
          </div>
          <h2> MINUTES</h2>
        </div>
        <div className="flip-number">
          <div className="seconds">
            <Flip value={seconds} />
          </div>
          <h2> SECONDS</h2>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
