const KEY_MAPPER = {
  codeTutorial: 'code-tutorial',
  codeTutorialJs: 'code-tutorial-js',
  quizQuestionLookup: 'quiz-question-lookup',
  cookiesAcknowledged: 'cookies-acknowledged',
  firstPromoSticker: 'first-promo-sticker',
};

export const getItem = (key) =>
  typeof window !== 'undefined'
    ? localStorage.getItem(KEY_MAPPER[key])
    : undefined;
export const setItem = (key, value) =>
  typeof window !== 'undefined'
    ? localStorage.setItem(KEY_MAPPER[key], value)
    : () => {};

export const initializeStorageData = () => {
  const isEmpty = getItem('codeTutorial') === null;

  if (isEmpty) {
    setItem('codeTutorial', false);
    setItem('codeTutorialJs', false);
    setItem('quizQuestionLookup', false);
    setItem('cookiesAcknowledged', false);
    setItem('firstPromoSticker', false);
  }
};
