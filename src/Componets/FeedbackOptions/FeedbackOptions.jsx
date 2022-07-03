import PropTypes from 'prop-types';
import { ActionButton, ActionsWraper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ActionsWraper>
      {Object.keys(options).map(stateName => (
        <ActionButton
          type="Button"
          key={stateName}
          onClick={() => onLeaveFeedback(stateName)}
        >
          {stateName}
        </ActionButton>
      ))}
    </ActionsWraper>
  );
};
FeedbackOptions.prototype = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};
export { FeedbackOptions };
