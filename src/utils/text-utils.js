const MAX_LENGTH = 150;

export const truncate = (text, maxLength = MAX_LENGTH) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const copyToClipboard = (textToCopy) => {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('style', 'position: absolute; left: -2000px');
  textArea.textContent = textToCopy;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');
  const parent = textArea.parentElement;
  parent && parent.removeChild(textArea);
};
