import { message } from 'antd';

export const quizResultsSaveMessage = () =>
  message.success('Quiz results has been saved');

export const testsFailMessage = () => {
  message.error(`Some of the tests didn't pass, fix your code and try again`);
};

export const reachOutFailMessage = () => {
  message.error(`Woops, something went wrong, please try again later.`);
};
