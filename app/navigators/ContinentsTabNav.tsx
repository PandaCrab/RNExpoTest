import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { 
    ContinentsScreen,
    CountriesScreen,
    CountryScreen
} from "../screens";

const Stack = createNativeStackNavigator();

const ContinentsTabNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name="Continents" component={ContinentsScreen} />
            <Stack.Screen name="Countries" component={CountriesScreen} />
            <Stack.Screen name="Country" component={CountryScreen} />
        </Stack.Navigator>
    );
};

export default ContinentsTabNav;
