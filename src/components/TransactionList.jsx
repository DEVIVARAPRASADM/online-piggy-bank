import React from "react";
import { usePiggyBank } from "../hooks/usePiggyBank";

const TransactionList = () => {
  const { transactions } = usePiggyBank();

  if (!transactions.length) {
    return <p style={{ textAlign: "center" }}>No transactions yet.</p>;
  }

  return (
    <ul>
      {transactions.map((tx) => (
        <li key={tx.id}>
          {tx.type === "deposit" ? (
            <span>💰 Deposited ₹{tx.amount}</span>
          ) : (
            <span>🧨 Broke piggy bank! Withdrawn ₹{Math.abs(tx.amount)}</span>
          )}
          {" — "}
          <small>{new Date(tx.timestamp).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
