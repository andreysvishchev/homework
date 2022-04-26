import React, { MouseEvent, useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    // stop
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {}, 1000);
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

  const stringTime = date.toLocaleString(); // fix with date
  const stringDate = new Date().toLocaleString("en-US", { year: "numeric", month: "long", day: "2-digit" }); // fix with date

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
    </div>
  );
}

export default Clock;
