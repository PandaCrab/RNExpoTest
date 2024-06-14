import React from 'react';
import { Pressable, Text, SectionList, SafeAreaView } from 'react-native';

import type { Data, SectionedCountries } from '@/Types/types';

import { styles } from '@/styles/ListStyles';

interface Props {
    data: Data;
    onPress: (arg: { code: string, name: string }) => void
};

const OrderedList: React.FC<Props> = ({data, onPress}) => {

    const orderedByFirstLetter: (arg: Data) => SectionedCountries = (data) => {
        const ordered = data.reduce((acc: any, cur: any) => {
            acc[cur.name[0]] ? acc[cur.name[0]].push(cur) : acc[cur.name[0]] = [cur];
            
            return acc;
        }, {});

        const results: SectionedCountries = Object.keys(ordered)
            .map((key) => ({title: key, data: ordered[key]}))
            .sort((a, b) => (a.title > b.title) ? 1 : -1);

        return results;
    };

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={orderedByFirstLetter(data)}
                keyExtractor={(item, index) => item.code + index}
                renderItem={({ item }) => (
                    <Pressable 
                        style={({pressed}) => [{
                            backgroundColor: pressed ? 'lightgray' : 'white'
                        }, styles.item]} 
                        onPress={() => onPress({code: item.code, name: item.name})}
                    >
                        <Text style={styles.text}>{item.name}</Text>
                    </Pressable>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.title}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
};

export default OrderedList;
