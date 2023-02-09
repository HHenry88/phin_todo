const secondsToLocaleDateTime = (seconds: number) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleString();
};

export default secondsToLocaleDateTime;
