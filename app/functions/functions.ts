export const printLanguages = (obj: Languages): string => {
  let values: string[] = Object.values(obj);
  let result = "";
  for (let i = 0; i < values.length; i++) {
    result += values[i];
    if (i !== values.length - 1) {
      result += ", ";
    }
  }
  return result;
};

export const formatArea = (area: number): string => {
  const areaInKm2 = area.toLocaleString("en-US");
  return areaInKm2;
};

export const formatPopulation = (population: number): string => {
  const populationInEnglish = population.toLocaleString("en-US");
  return populationInEnglish;
};
