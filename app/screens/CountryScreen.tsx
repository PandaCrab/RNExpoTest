import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { useQuery } from '@apollo/client';

import { COUNTRY_QUERY } from '../api/api';

import type { CountryData } from '@/Types/types';

import { styles } from '@/styles/CountryScreenStyles';

const CountryScreen = ({ navigation, route }: any) => {
    const [country, setCountry] = useState<CountryData>();

    const { code } = route.params;
    const {data, loading} = useQuery(COUNTRY_QUERY, {
        variables: {
            code
        }
    });

    const dataCatcher: (arg: CountryData) => void = async (data) => {
        if (data) {
            await setCountry(data);
        }
    };

    useEffect(() => {
        if (!loading && data) {
            dataCatcher(data.country);
        }
    }, [data]);

    if (loading) {
        return (<Text>Loading</Text>);
    } else {
        navigation.setOptions({
            title: data.country.name
        });
    }

    return (
        <View style={ styles.container }>
            <Text style={styles.text}>Here You can see some information about country</Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Country Name: </Text>
                {country?.name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Country name on native language: </Text>
                {country?.native}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Country code: </Text>
                {country?.code}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Stay on the continent: </Text>
                {country?.continent.name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Currancy: </Text>
                {country?.currency}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Country languages: </Text>
                {country?.languages.map(({name}, index) => 
                    index === (country?.languages.length - 1) 
                    ? `${name}` : `${name}, ` )}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>In the language of this country: </Text>
                {country?.languages.map(({native}, index) => 
                    index === (country?.languages.length - 1) 
                    ? `${native}` : `${native}, ` )}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Country phone code: </Text>
                {country?.phone}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.themedText}>Country states: </Text>
                {country?.states?.map(({name}, index) => 
                    index === (country?.states && country?.states?.length - 1) 
                    ? `${name}` : `${name}, ` )}
            </Text>
        </View>
    );
};

export default CountryScreen;
