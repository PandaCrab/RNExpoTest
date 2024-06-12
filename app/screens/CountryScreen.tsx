import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { useQuery } from '@apollo/client';

import { COUNTRY_QUERY } from '../api/api';

import { styles } from '@/styles/CountryScreenStyles';

type Data = {
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

const CountryScreen: React.FC<any> = ({ navigation, route }) => {
    const [country, setCountry] = useState<Data>();

    const { code } = route.params;
    const {data, loading} = useQuery(COUNTRY_QUERY, {
        variables: {
            code
        }
    });
console.log(country?.languages)
    const dataCatcher: (arg1: Data) => void = async (data) => {
        if (data) {
            await setCountry(data)
        }
    };

    useEffect(() => {
        if (!loading && data) {
            dataCatcher(data.country);
        }
    }, [data]);

    if (loading) {
        return (<Text>Loading</Text>)
    } else {
        navigation.setOptions({
            title: data.country.name
        })
    }

    return (
        <View>
            <Text>Here You can see some information about country</Text>
            <Text><Text>Country Name: </Text>{country?.name}</Text>
            <Text><Text>Country code: </Text>{country?.code}</Text>
            <Text><Text>Stay on the continent: </Text>{country?.continent.name}</Text>
            <Text><Text>Currancy: </Text>{country?.currency}</Text>
            <Text> <Text>Country languages: </Text> {country?.languages[0].name}</Text>
        </View>
    );
};

export default CountryScreen;
