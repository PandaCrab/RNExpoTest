import { View, Text, StyleSheet } from "react-native";

import CustomButton from "@/components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={ styles.container }>
            <Text style={styles.text}>Welcome to the Home screen</Text>
            <CustomButton title="About" onPress={() => navigation.navigate('About')} />
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
