import { message } from 'antd';

export const quizResultsSavedMessage = () =>
  message.success('Quiz results has been saved');

export const testsFailedMessage = () => {
  message.error(`Some of the tests didn't pass, fix your code and try again`);
};
