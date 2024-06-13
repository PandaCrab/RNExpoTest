import {  Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faGlobe, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

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
        <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Home') {
                return (<FontAwesomeIcon icon={faHouse} />)
              } else if (route.name === 'About') {
                return (<FontAwesomeIcon icon={faCircleInfo} />)
              } else if (route.name === 'Globe') {
                return (<FontAwesomeIcon icon={faGlobe} />)
              }
  
              // You can return any component that you like here!
              return <Text>{route.name}</Text>
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
            headerTitleAlign: 'center'
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Globe" component={ContinentsTabNav} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
