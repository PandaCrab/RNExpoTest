import React from 'react';
import { Text, Pressable, FlatList, SafeAreaView } from "react-native";

import { styles } from '@/styles/UnorderedListStyles';

type Props = {
    data: [{
        code: string;
        name: string;
    }];
    onPress: (arg1: { name?: string, code: string }) => void;
}

const UnorderedList: React.FC<Props> = ({ data, onPress }) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={data}
                renderItem={({item}) => (
                    <Pressable 
                        style={({pressed}) => [{
                            backgroundColor: pressed ? 'lightgray' : 'white'
                        }, styles.item]} 
                        onPress={() => onPress(item)}
                    >
                        <Text style={styles.text} >{item.name}</Text>
                    </Pressable>
                )}
                keyExtractor={item => item.code}
            />
        </SafeAreaView>
    );
};

export default UnorderedList;
