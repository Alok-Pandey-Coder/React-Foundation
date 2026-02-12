import { useEffect, useState } from "react";


function useCurrencyInfo (currency) {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/d9beaa6006bc6285d71cdc4c/latest/${currency}`)
    .then((res) => res.json())
    .then((res) => setData(res["conversion_rates"]))
    console.log(data)
  }, [currency])

  return data;
}

export default useCurrencyInfo;