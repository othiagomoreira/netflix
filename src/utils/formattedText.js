export const formattedText = (string, n) => {
  if (!string) {
    return 'Movie synopsis has not been defined';
  } else if (string.length > n) {
    return string?.substr(0, n) + '...';
  } else {
    return string;
  }
};
