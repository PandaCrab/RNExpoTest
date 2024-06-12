import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';

import { COUNTRIES_QUERY } from '../api/api';
import UnorderedList from '@/components/UnorderedList';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CountriesStackParamsList } from '@/Types/types';

// type Props = NativeStackScreenProps<CountriesStackParamsList, 'Countries'>


const CountriesScreen= ({navigation, route}: any) => {
    const { code } = route.params;
    const { data, loading } = useQuery(COUNTRIES_QUERY, {
        variables: {
            code: code
        }
    });

    const handleNavigation: (arg1: {code: string, name?: string}) => void = ({ code, name }) => {
        navigation.navigate('Country', { code });
    }

    if (loading) {
        return (<Text>Countries are loading...</Text>)
    }

    return (
        <UnorderedList data={data.continent.countries}  onPress={handleNavigation} />
    );
};

export default CountriesScreen;
