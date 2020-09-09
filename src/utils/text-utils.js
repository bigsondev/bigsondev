const MAX_LENGTH = 150;

export const truncate = (text) => {
  if (text.length > MAX_LENGTH) {
    return text.substring(0, MAX_LENGTH) + '...';
  }
  return text;
};
