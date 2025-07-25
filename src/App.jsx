import React from "react";
import AddMoneyForm from "./components/AddMoneyForm";
import BalanceDisplay from "./components/BalanceDisplay";
import TransactionList from "./components/TransactionList";
import BreakPiggyBankButton from "./components/BreakPiggyBankButton";
import RestartPiggyBankButton from "./components/RestartPiggyBankButton";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="piggy-card">
        <h1>🐷 Online Piggy Bank</h1>
        <BalanceDisplay />
        <AddMoneyForm />
        <div className="action-buttons">
          <BreakPiggyBankButton />
          <RestartPiggyBankButton />
        </div>
        <div className="transaction-list">
          <h3 style={{ textAlign: "center" }}>Transaction History</h3>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default App;
