import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Some Name",
  message: "some text some text some text some text",
  time: "22:00",
};

function HW1() {
  return (
    <div className="inner">
      <h2 className="title">homeworks 1</h2>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
    </div>
  );
}

export default HW1;
