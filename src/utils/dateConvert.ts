const dateConvert = (dateUCF: string) => {
  const date = new Date(dateUCF);
  const time = date.toLocaleTimeString().split(':');
  time.pop();
  return `${time.join(':')} ${date.toLocaleDateString('en-GB')}`;
};

export default dateConvert;
