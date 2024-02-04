import React, { useState } from "react";
import CustomTable from "./CustomTable";
import { getGannCalculation } from "../services/allEndpoints";

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
      {apiData && (
        <>
          <h3>BuyAbove: {data?.buyAbove}</h3>
          <h3>SellBelow: {data?.sellBelow}</h3>
          <CustomTable data={data} />
        </>
      )}
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}
