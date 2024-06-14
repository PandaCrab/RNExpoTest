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

export type Data = {
    code: string,
    name: string
}[];

export type SectionedCountries = {
    title: string,
    data: Data
}[];

export type CountryData = {
    code?: string;
    continent: {
        name: string;
    };
    currency: string;
    languages: [{
        name: string;
        native: string;
    }];
    name: string;
    native: string;
    phone: number;
    states?: [{
        name: string,
    }]
};
