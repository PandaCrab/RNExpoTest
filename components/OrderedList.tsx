import React from 'react';
import { Pressable, Text, SectionList, SafeAreaView } from 'react-native';

interface Props {
    data: [{
        code: string;
        name: string;
    }];
    onPress?: (arg1: { code: string }) => void
};

const OrderedList: React.FC<Props> = ({data, onPress}) => {

    const orderedByFirstLetter = (data) => {
        const ordered = data.reduce((acc, cur) => {
            acc[cur[0]] ? acc[cur[0]].push(cur) : acc[cur[0]] = [ cur ];
            return acc
        }, []);

        console.log(ordered)
    return [{title: 'a'}, {title: 'a'}];
    };

    return (
        <SafeAreaView>
            {orderedByFirstLetter(data).map((el, index) => (<Text key={index}>{el.title}</Text>))}
        </SafeAreaView>
    );
};

export default OrderedList;
