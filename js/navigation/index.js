/* eslint-disable no-nested-ternary */
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import ExampleTab from '../screens/example/ExampleTabScreen';
import ExampleOnboarding from '../screens/example/ExampleOnboardingScreen';

import Alerts from '../screens/AlertsScreen';
import KnowYourRights from '../screens/KnowYourRightsScreen';
import Resources from '../screens/ResourcesScreen';

import InsideHome from '../screens/knowyourrights/InsideHomeScreen';
import OutsideHome from '../screens/knowyourrights/OutsideHomeScreen';
import HomeArrest from '../screens/knowyourrights/HomeArrestScreen';
import Driving from '../screens/knowyourrights/DrivingScreen';
import PublicTransport from '../screens/knowyourrights/PublicTransportScreen';
import Work from '../screens/knowyourrights/WorkScreen';
import OnStreet from '../screens/knowyourrights/OnStreetScreen';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const Onboarding = () => (
  <Stack.Navigator name="MainApp">
    <Tabs.Screen name="Onboarding 1" component={ExampleOnboarding} />
  </Stack.Navigator>
);

const RightsTabNavigation = () => (
  <Stack.Navigator
    name="RightsTabNavigation"
    initialRouteName="Know Your Rights"
    screenOptions={{
      headerRight: () => (
        <Button
          onPress={() => alert('Emergency button pressed')}
          buttonStyle={styles.emergencyButton}
          title="Emergency"
          color="#2F4555"
        />
      ),
      headerLeft: () => (
        <Button
          onPress={() => alert('Settings pressed')}
          title="Settings"
          // color='#fff'
        />
      ),
    }}
  >
    <Stack.Screen name="Know Your Rights" component={KnowYourRights} />
    <Stack.Screen name="Inside Home" component={InsideHome} />
    <Stack.Screen name="Outside Home" component={OutsideHome} />
    <Stack.Screen name="Home Arrest" component={HomeArrest} />
    <Stack.Screen name="Driving" component={Driving} />
    <Stack.Screen name="Public Transport" component={PublicTransport} />
    <Stack.Screen name="On Street" component={OnStreet} />
    <Stack.Screen name="Work" component={Work} />
  </Stack.Navigator>
);

const MainApp = () => (
  <Tabs.Navigator
    name="MainApp"
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#fb5600',
      inactiveTintColor: '#373643',
      style: styles.tabBar,
      labelStyle: styles.tabLabel,
      tabStyle: styles.tabs,
    }}
  >
    <Tabs.Screen
      name="Alerts"
      component={Alerts}
      options={{
        tabBarLabel: 'Alerts',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="bell-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="Home"
      component={RightsTabNavigation}
      options={{
        tabBarLabel: 'Know Your Rights',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="shield-half-full"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="Resources"
      component={Resources}
      options={{
        tabBarLabel: 'Resources',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="file-document-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);

const Navigation = () => {
  const { complete: onboardingComplete } = useSelector(
    (state) => state.onboarding
  );
  return (
    <NavigationContainer>
      {onboardingComplete ? <MainApp /> : <Onboarding />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  tabLabel: {
    fontSize: 14,
  },
  tabs: {
    height: 55,
  },
  emergencyButton: {
    backgroundColor: '#373643',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
  },
});

export default Navigation;
