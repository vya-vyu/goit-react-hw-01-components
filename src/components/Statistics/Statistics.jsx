import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './Statistics.module.css';
import getRandomHexColor from './getRandomHexColor';

const Statistics = ({ stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.list}>
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
