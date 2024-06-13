import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useQuery } from '@apollo/client';

import { COUNTRIES_QUERY } from '../api/api';
import UnorderedList from '@/components/UnorderedList';
import OrderedList from '@/components/OrderedList';

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
        <SafeAreaView>
            {/* <OrderedList data={data.continent.countries} /> */}
            <UnorderedList data={data.continent.countries}  onPress={handleNavigation} />
        </SafeAreaView>
    );
};

export default CountriesScreen;
