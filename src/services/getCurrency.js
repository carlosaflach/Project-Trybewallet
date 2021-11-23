const getCurrency = async () => {
  const responseRaw = await fetch('https://economia.awesomeapi.com.br/json/all');
  return responseRaw;
};

export default getCurrency;
