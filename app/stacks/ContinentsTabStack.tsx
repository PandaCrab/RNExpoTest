import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { 
    ContinentsScreen,
    CountriesScreen,
    CountryScreen
} from "../screens";

const ContinentsStack = createNativeStackNavigator();

const ContinentsTabNav = () => {
    return (
        <ContinentsStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
            <ContinentsStack.Screen name="Continents" component={ContinentsScreen} />
            <ContinentsStack.Screen name="Countries" component={CountriesScreen} />
            <ContinentsStack.Screen name="Country" component={CountryScreen} />
        </ContinentsStack.Navigator>
    );
};

export default ContinentsTabNav;
