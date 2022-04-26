import React, { useState } from "react";
import { homeWorkReducer } from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { log } from "util";

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople); // need to fix any

  const style = {
    marginRight: "10px",
    marginLeft: "10px",
    display: "inline-block",
    fontWeight: 500,
  };
  // need to fix any
  const finalPeople = people.map((p: UserType) => (
    <div key={p._id}>
      <span style={style}>{p.name}</span>
      <span>{p.age}</span>
    </div>
  ));

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: "sort", payload: "up" }));
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, { type: "sort", payload: "down" }));
  const checkAge = () => setPeople(homeWorkReducer(initialPeople, { type: "check", payload: 18 }));

  return (
    <div className="inner">
      <h2 className="title"> homeworks 8</h2>

      <div className="hwInner">{finalPeople}</div>
      <div className="buttonInner">
        <SuperButton onClick={sortUp}>sort up</SuperButton>

        <SuperButton onClick={sortDown}>sort down</SuperButton>

        <SuperButton onClick={checkAge}>check 18</SuperButton>
      </div>
    </div>
  );
}

export default HW8;
