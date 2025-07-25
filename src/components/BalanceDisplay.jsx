import { usePiggyBank } from "../hooks/usePiggyBank";

const BalanceDisplay = () => {
  const { transactions } = usePiggyBank();

  const balance = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div className="balance">
      <h2>Total Balance: ₹{balance.toFixed(2)}</h2>
    </div>
  );
};

export default BalanceDisplay;
