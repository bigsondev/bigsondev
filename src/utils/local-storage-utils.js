const KEY_MAPPER = {
  codeTutorial: 'code-tutorial',
  quizQuestionLookup: 'quiz-question-lookup',
  cookiesAcknowledged: 'cookies-acknowledged',
};

export const getItem = (key) =>
  JSON.parse(localStorage.getItem(KEY_MAPPER[key]));
export const setItem = (key, value) =>
  JSON.stringify(localStorage.setItem(KEY_MAPPER[key], value));

export const initializeStorageData = () => {
  const isEmpty = getItem('codeTutorial') === null;

  if (isEmpty) {
    setItem('codeTutorial', false);
    setItem('quizQuestionLookup', false);
    setItem('cookiesAcknowledged', false);
  }
};
