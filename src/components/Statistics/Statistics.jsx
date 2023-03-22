import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import './Statistics.css';
import getRandomHexColor from './getRandomHexColor';

const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className="statistics__title">Upload stats</h2>

      <ul className="statistics__list">
        {stats.map(el => {
          return (
            <StatisticsItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
              colorItem={getRandomHexColor()}
            />
          );
        })}
      </ul>
    </section>
  );
};
Statistics.prototype = {
  stats: PropTypes.objectOf({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
export default Statistics;
