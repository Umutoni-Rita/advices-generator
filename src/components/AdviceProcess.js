import React, { useState, useEffect, useCallback } from "react";
import Advice from "./Advice";
import axios from "axios";

export default function Process() {
  const [advice, setAdvice] = useState({});

  const generateAdvice = useCallback(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    generateAdvice();
  }, [generateAdvice]);

  return (
    <div>
      {advice.slip && advice.slip.advice && <Advice content={advice.slip.advice} generateAdvice={generateAdvice}/>}
    </div>
  );
}

