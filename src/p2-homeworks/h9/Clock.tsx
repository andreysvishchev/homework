import React, {MouseEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
<<<<<<< HEAD
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
    };
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);

    };

    const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        setShow(true);
        // show
    };
    const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        // close
        setShow(false);
    };

    const stringTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    }) // fix with date
    const stringDate = date.toLocaleString("en-US", {year: "numeric", month: "long", day: "2-digit"}); // fix with date

    return (
        <div>
            <div className="hwInner">
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {stringTime}
                </div>
                {show && <div>{stringDate}</div>}
            </div>

            <div className="buttonInner">
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
=======
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
  };

  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setShow(true);
    // show
  };
  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    // close
    setShow(false);
  };

  const stringTime = date.toLocaleTimeString(); // fix with date
  const stringDate = date.toLocaleDateString(); // fix with date

  return (
    <div>
      <div className="hwInner">
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {stringTime}
>>>>>>> a2d076c395a5dc4ada24d54e3107fbfe83c8e623
        </div>
    );
}

export default Clock;
