import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";

// types
export type UserType = {
  _id: string; // need to fix any
  name: string; // need to fix any
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<UserType[]>([]); // need to fix any

  console.log(users);
  const addUserCallback = (newName: string) => {
    // need to fix any
    let newUser = { _id: v1(), name: newName };
    setUsers([newUser, ...users]); // need to fix
  };

  return (
    <div className="inner">
      <h2 className="title"> homeworks 3</h2>

      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
    </div>
  );
}

export default HW3;
