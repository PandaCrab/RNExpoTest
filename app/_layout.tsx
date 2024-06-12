import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import {
  HomeScreen,
  AboutScreen,
} from './screens';
import ContinentsTabNav from "./navigators/ContinentsTabNav";

const Tab = createBottomTabNavigator();
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

export default function RootLayout() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer independent>
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Globe" component={ContinentsTabNav} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
