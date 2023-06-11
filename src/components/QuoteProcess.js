import { useState, useEffect, useCallback } from "react";
// import Advice from "./Advice";
import axios from "axios";

export default function QuoteProcess() {
  const [quote, setQuote] = useState({});

  const generateAdvice = useCallback(() => {
    axios
      .get("https://quotes.rest/quote/random")
      .then((res) => {
        setQuote(res.data);
        // console.log(quote);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    generateAdvice();
  }, [generateAdvice]);

//   return (
//     <div>
//       {quote.slip && quote.slip.advice && <Advice content={quote.slip.advice} generateAdvice={generateAdvice}/>}
//     </div>
//   );
}