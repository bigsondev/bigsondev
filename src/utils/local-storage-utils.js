const KEY_MAPPER = {
  codeTutorial: 'code-tutorial',
  quizQuestionLookup: 'quiz-question-lookup',
  cookiesAcknowledged: 'cookies-acknowledged',
};

export const getItem = (key) =>
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem(KEY_MAPPER[key]))
    : undefined;
export const setItem = (key, value) =>
  typeof window !== 'undefined'
    ? JSON.stringify(localStorage.setItem(KEY_MAPPER[key], value))
    : () => {};

export const initializeStorageData = () => {
  const isEmpty = getItem('codeTutorial') === null;

  if (isEmpty) {
    setItem('codeTutorial', false);
    setItem('quizQuestionLookup', false);
    setItem('cookiesAcknowledged', false);
  }
};
