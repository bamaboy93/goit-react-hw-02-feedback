import React, { Component } from 'react';
import Section from './Components/Section/Section';
import Stats from './Components/Stats/Stats';
import Feedback from './Components/Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnCLick = name => () => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage = Math.round(
      (good / (good + neutral + bad)) * 100,
    );
    const countTotalFeedback = good + neutral + bad;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <Feedback
            onGood={this.onBtnCLick('good')}
            onNeutral={this.onBtnCLick('neutral')}
            onBad={this.onBtnCLick('bad')}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback > 0 ? (
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <h3>Feedback not given!</h3>
          )}
        </Section>
      </>
    );
  }
}

export default App;
