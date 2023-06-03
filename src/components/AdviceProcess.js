import React, { useState, useEffect, useCallback } from "react";
import Advice from "./Advice";
import axios from "axios";

export default function Process() {
  const [quote, setQuote] = useState({});

  const generateAdvice = useCallback(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    generateAdvice();
  }, [generateAdvice]);

  return (
    <div>
      {quote.slip && quote.slip.advice && <Advice content={quote.slip.advice} generateAdvice={generateAdvice}/>}
    </div>
  );
}
