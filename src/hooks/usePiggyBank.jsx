import { createContext, useContext, useEffect, useState } from "react";

const PiggyBankContext = createContext();

export const PiggyBankProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [isBroken, setIsBroken] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("piggyBankData"));
    if (savedData) {
      setBalance(savedData.balance || 0);
      setTransactions(savedData.transactions || []);
      setIsBroken(savedData.isBroken || false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "piggyBankData",
      JSON.stringify({ balance, transactions, isBroken })
    );
  }, [balance, transactions, isBroken]);

  const addMoney = (amount) => {
    const newTransaction = {
      id: Date.now(),
      amount,
      type: "deposit",
      timestamp: new Date().toISOString(),
    };
    setBalance((prev) => prev + amount);
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const breakPiggyBank = () => {
    if (balance === 0 || isBroken) return;
    const newTransaction = {
      id: Date.now(),
      amount: -balance,
      type: "break",
      timestamp: new Date().toISOString(),
    };
    setTransactions((prev) => [newTransaction, ...prev]);
    setBalance(0);
    setIsBroken(true);
  };

  const restartPiggyBank = () => {
    setBalance(0);
    setTransactions([]);
    setIsBroken(false);
    localStorage.removeItem("piggyBankData");
  };

  return (
    <PiggyBankContext.Provider
      value={{ balance, transactions, addMoney, breakPiggyBank, restartPiggyBank, isBroken }}
    >
      {children}
    </PiggyBankContext.Provider>
  );
};

export const usePiggyBank = () => useContext(PiggyBankContext);
