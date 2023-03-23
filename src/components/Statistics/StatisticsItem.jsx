import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const StatisticsItem = ({ label, percentage, colorItem }) => {
  return (
    <li className={s.item} style={{ backgroundColor: colorItem }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.prototype = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default StatisticsItem;
