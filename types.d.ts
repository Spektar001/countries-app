interface Countries {
  name: Name;
  cca2: string;
  ccn3: string;
  cca3: string;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  borders?: string[];
  area: number;
  flag: string;
  maps: Maps;
  population: number;
  flags: Flags;
  coatOfArms: CoatOfArms;
}

interface Name {
  common: string;
  official: string;
}

interface Fra {
  official: string;
  common: string;
}

interface Currencies {
  [key: string]: Currency;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Xpf {
  name: string;
  symbol: string;
}

interface Languages {
  [key: string]: string;
}

interface Translations {
  rus: {
    common: string;
    official: string;
  };
}

interface Rus {
  official: string;
  common: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Flags {
  alt?: string;
  png: string;
  svg: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}
