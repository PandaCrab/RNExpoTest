import { View, Text, StyleSheet } from 'react-native';

import CustomButton from '@/components/CustomButton';

const AboutScreen = ({ navigation }: any) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                This is a test project  created for learning React Native and GraphQL.
                For this used Apollo Client with the free graphql API
            </Text>
            <Text>You can investigate some small information about countries of our planet</Text>
            <Text style={styles.text} >(continents, langueges, code of the countrie, currency, phones, and more)</Text>
            <CustomButton title="Home page" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
    }
});

export default AboutScreen;
