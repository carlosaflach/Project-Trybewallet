const getCurrency = async () => {
  const responseRaw = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJson = await responseRaw.json();
  console.log(responseJson);
  return responseJson;
};

export default getCurrency;
