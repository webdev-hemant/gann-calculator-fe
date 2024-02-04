import React, { useState } from "react";
import CustomTable from "./CustomTable";
import { getGannCalculation } from "../services/allEndpoints";
import { formatIndianRupees } from "../utils";

export default function MainComponent({ data }) {
  const [currentPrice, setCurrentPrice] = useState("");
  const [apiData, setApiData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handlePriceChange = (event) => {
    setCurrentPrice(event.target.value);
  };

  const handleApiCall = async () => {
    try {
      setLoading(true);
      const data = await getGannCalculation(currentPrice);
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>GNN Calculator </h1>
      <input
        value={currentPrice}
        onChange={handlePriceChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={() => handleApiCall()}>
        {isLoading ? "Loading" : "Submit"}
      </button>
      {apiData && !isLoading && (
        <>
          <div className="buysell">
            <h3 className="buy">
              Buy Above: {formatIndianRupees(data?.buyAbove)}
            </h3>
            <h3 className="sell">
              Sell Below: {formatIndianRupees(data?.sellBelow)}
            </h3>
          </div>
          <CustomTable data={data} />
        </>
      )}
      {isLoading && <h1 className="loader">Loading...</h1>}
    </div>
  );
}
