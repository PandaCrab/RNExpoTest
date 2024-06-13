import { View, Text, StyleSheet } from "react-native";

import CustomButton from "@/components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={ styles.container }>
            <Text style={styles.text}>Welcome to the test project.</Text>
            <Text>In this test project, You can investigate some small information about countries of our planet.</Text>
            <CustomButton title="Lets start!" onPress={() => navigation.navigate('Globe')} />
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
        fontSize: 14,
    } 
});

export default HomeScreen;
