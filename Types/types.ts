export type CountriesStackParamsList = {
    Home: undefined;
    Countries: { code: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

export type CountryStackParamList = {
    Home: undefined;
    Country: { code: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };


