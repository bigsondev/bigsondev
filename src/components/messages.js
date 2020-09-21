import { message } from 'antd';

export const quizResultsSaveMessage = () =>
  message.success('Quiz results has been saved');

export const testsFailMessage = () => {
  message.error(`Some of the tests didn't pass, fix your code and try again`);
};

export const failMessage = () => {
  message.error(`Woops, something went wrong, please try again later`);
};

export const linkCopiedMessage = () =>
  message.success('Link copied to clipboard');

export const solutionLoadedMessage = () =>
  message.success('Solution from the URL has been loaded in the editor');
