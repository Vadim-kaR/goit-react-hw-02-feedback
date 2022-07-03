import PropTypes from 'prop-types';
import { ListInfo, StatisticItem, Info } from './StatisticList.styled';

const StatisticList = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ListInfo>
        <StatisticItem>
          Good: <Info>{good}</Info>
        </StatisticItem>
        <StatisticItem>
          Neutral: <Info>{neutral}</Info>
        </StatisticItem>
        <StatisticItem>
          Bad: <Info>{bad}</Info>
        </StatisticItem>
        <StatisticItem>
          Total: <Info>{total}</Info>
        </StatisticItem>
        <StatisticItem>
          Positive feedbeck:<Info>{positivePercentage()}</Info>%{' '}
        </StatisticItem>
      </ListInfo>
    </>
  );
};

StatisticList.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.func,
};
export { StatisticList };
