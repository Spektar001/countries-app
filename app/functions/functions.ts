export const printLanguages = (obj: Languages): string =>
  Object.values(obj).join(", ");

export const formatArea = (area: number): string =>
  area.toLocaleString("en-US");

export const formatPopulation = (population: number): string =>
  population.toLocaleString("en-US");
