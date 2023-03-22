import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import './TransactionsHistory.css';
const TransactionsHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionsHistory.prototype = {
  items: PropTypes.objectOf({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};

export default TransactionsHistory;
