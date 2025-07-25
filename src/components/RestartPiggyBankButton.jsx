import React from "react";
import { usePiggyBank } from "../hooks/usePiggyBank";

const RestartPiggyBankButton = () => {
  const { restartPiggyBank } = usePiggyBank();
  return <button onClick={restartPiggyBank}>Restart</button>;
};

export default RestartPiggyBankButton;
