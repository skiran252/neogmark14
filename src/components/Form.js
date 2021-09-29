import React, { useState } from "react";

export default function Form() {
  const [initialprice, setInitialPrice] = useState(0);
  const [currentprice, setCurrentPrice] = useState(0);
  const [totalUnits, setTotalUnits] = useState(0);
  const [message, setMessage] = useState("");

  const CalculateProfirOrLoss = (initialPrice, units, currentPrice) => {
    initialPrice = parseInt(initialPrice);
    units = parseInt(units);
    currentPrice = parseInt(currentPrice);

    const profitOrLoss = (currentPrice - initialPrice) * units;
    const profitOrLossPercentage = ((currentPrice - initialPrice) / initialPrice) * 100;
    console.log(profitOrLossPercentage)
    if (profitOrLoss >= 0) {
      return setMessage(
        <div className="alert alert-success text-success" style={{fontSize:"larger"}}>
          <div>You made: {profitOrLoss} </div>
          <div>
            Percentage:
            {Math.abs(profitOrLossPercentage).toFixed(2)})%
          </div>
        </div>
      );
    } else {
      return setMessage(
        <div className="alert alert-danger">
          <h3>
            You lose {Math.abs(profitOrLoss)} Percentage:{" "}
            {Math.abs(profitOrLossPercentage).toFixed(2)}%
          </h3>
        </div>
      );
    }
  };

  return (
    <div className="col-md-3">
      <div style={{ paddingTop: "10vh" }}>
        <div className="form-group">
          <label>Initial Price of the Stock</label>
          <input
            type="text"
            className="form-control"
            id="initialprice"
            value={initialprice}
            onChange={(e) => setInitialPrice(e.target.value)}
            placeholder="Enter initial price"
          />
        </div>
        <div className="form-group mt-3">
          <label>Total Stock brought</label>
          <input
            type="text"
            className="form-control"
            id="totalstocks"
            value={totalUnits}
            onChange={(e) => setTotalUnits(e.target.value)}
            placeholder="Enter initial price"
          />
        </div>
        <div className="form-group  mt-3">
          <label>current Price of the Stock</label>
          <input
            type="text"
            className="form-control"
            id="currentprice"
            value={currentprice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            placeholder="Enter initial price"
          />
        </div>

        <button
          className="btn btn-success mt-2"
          onClick={() => {
            CalculateProfirOrLoss(initialprice, totalUnits, currentprice);
          }}
        >
          CHECK PROFIT/LOSS
        </button>

        <div className="text-center" style={{marginBottom:"20vh"}}>{message}</div>
      </div>
    </div>
  );
}
