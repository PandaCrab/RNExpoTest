import { View, Text, StyleSheet } from "react-native";

import CustomButton from "@/components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={ styles.container }>
            <Text style={styles.header}>Welcome to the test project.</Text>
            <Text style={styles.text}>In this test project, You can investigate some small information about countries of our planet.</Text>
            <CustomButton title="Lets start!" onPress={() => navigation.navigate('Globe')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'semibold'
    },
    text: {
        marginBottom: 10,
        fontSize: 14,
        textAlign: 'center'
    } 
});

export default HomeScreen;
