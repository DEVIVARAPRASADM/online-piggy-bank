import React, { useState } from "react";
import { usePiggyBank } from "../hooks/usePiggyBank";

const AddMoneyForm = () => {
  const { addMoney, isBroken } = usePiggyBank();
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      addMoney(value);
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
        disabled={isBroken}
      />
      <button type="submit" disabled={isBroken}>Deposit</button>
    </form>
  );
};

export default AddMoneyForm;
