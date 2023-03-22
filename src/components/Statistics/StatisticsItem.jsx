import PropTypes from 'prop-types';
const StatisticsItem = ({ label, percentage, colorItem }) => {
  return (
    <li className="statistics__item" style={{ backgroundColor: colorItem }}>
      <span className="statistics__label">{label}</span>
      <span className="statistics__percentage">{percentage}%</span>
    </li>
  );
};

StatisticsItem.prototype = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatisticsItem;
