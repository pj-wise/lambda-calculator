import React, { useState } from "react";
//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [opp, setOpp] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {opp.map((char, i) => {
        return (
          <OperatorButton
            char={char.char}
            key={i}
            value={char.value}
            addOperator={props.addOperator}
          />
        );
      })}
    </div>
  );
};

export default Operators;
