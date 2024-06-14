import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';

import { CONTINENTS_QUERY } from '../api/api';

import UnorderedList from '@/components/UnorderedList';

const ContinentsScreen: React.FC<any> = ({ navigation }) => {
    const { data, loading } = useQuery(CONTINENTS_QUERY);

    const handleNavigation: (arg: {code: string}) => void = ({ code }) => {
        navigation.navigate('Countries', { code });
    };
    
    if (loading) {
        return (<Text>Loading ...</Text>);
    }

    return (
        <UnorderedList data={data.continents} onPress={handleNavigation} />
    );
};

export default ContinentsScreen;
