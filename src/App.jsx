import { Component } from 'react';
import { FeedbackOptions } from 'Componets/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'Componets/Statistic/Statistic';
import { StatisticList } from 'Componets/Statistic/StatisticList';
import { MainTitle } from 'Componets/MainTitle/MainTitle';
import { Container } from 'Componets/MainContainer/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  togleStatisticButton = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Container>
          <MainTitle />
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.togleStatisticButton}
          />
          <Statistic title="Statistics" total={this.countTotalFeedback()}>
            <StatisticList
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Statistic>
        </Container>
      </>
    );
  }
}

export { App };
