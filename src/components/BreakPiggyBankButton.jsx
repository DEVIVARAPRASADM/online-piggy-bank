import React from "react";
import { usePiggyBank } from "../hooks/usePiggyBank";

const BreakPiggyBankButton = () => {
  const { breakPiggyBank, isBroken } = usePiggyBank();

  return (
    <button onClick={breakPiggyBank} disabled={isBroken}>
      Break Piggy Bank
    </button>
  );
};

export default BreakPiggyBankButton;
