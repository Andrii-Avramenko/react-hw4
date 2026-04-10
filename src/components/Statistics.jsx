import PropTypes from 'prop-types';
import css from './Statistics.module.css'

console.log(css)

export const Statistics = props => {
  function bgColor() {
    return `rgb(${Math.floor(Math.random() * 192)}, ${Math.floor(Math.random() * 192)}, ${Math.floor(Math.random() * 192)})`;
  }

  return (
    <section className="statistics">
      {props.title && <h2 className={css.title}>Upload stats</h2>}

      <ul className={css.statList}>
        {props.stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={css.item}
              style={{backgroundColor: bgColor()}}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}> {stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );    
};

Statistics.propTypes = {
    username: PropTypes.string,
    stats: PropTypes.array.isRequired
} 