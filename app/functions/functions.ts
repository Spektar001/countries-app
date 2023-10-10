export const printLanguages = (obj: Languages): string =>
  Object.values(obj).join(", ");

export const formatPopulation = (population: number): string =>
  population.toLocaleString("en-US");

export const formatArea = (area: number): string =>
  area.toLocaleString("en-US");

export const formatCurrencies = (currencies: Currencies): string => {
  const currencyKeys = Object.keys(currencies);

  if (currencyKeys.length === 1) {
    const currency = currencies[currencyKeys[0]];
    return `${currency.name}(${currency.symbol})`;
  }

  const formattedCurrencies = currencyKeys.map((key) => {
    const currency = currencies[key];
    return `${currency.name}(${currency.symbol})`;
  });

  return formattedCurrencies.join(", ");
};
