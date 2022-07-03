import PropTypes from 'prop-types';
import { Notification } from './StatisticList.styled';

const Statistic = ({ title, children, total }) => {
  return (
    <>
      <h2>{title}</h2>
      {total !== 0 ? children : <Notification>No feedback given</Notification>}
    </>
  );
};

Statistic.prototype = {
  title: PropTypes.string,
  total: PropTypes.number,
  children: PropTypes.string,
};

export { Statistic };
