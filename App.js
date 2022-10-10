import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=> Tab.Navigator('About')}>
        <Text>Go to About</Text>
      </TouchableOpacity>
    </View>

  );
}


function AboutScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>About</Text>
    </View>

  );
} 

function PortifolioScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Portifolio</Text>
    </View>

  );
} 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name == 'About') {
            iconName = focused ? 'ios-information-circle-outline' : 'ios-information-circle-outline';
          } else if (route.name == 'Portifolio'){
            iconName = focused ? 'md-list' : 'md-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Portifolio" component={PortifolioScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
