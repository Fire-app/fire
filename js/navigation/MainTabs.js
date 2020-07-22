/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTranslation } from 'react-i18next';

import Resources from '../screens/ResourcesScreen';
import Emergency from '../screens/EmergencyScreen';
import { textStyles, colors } from '../styles';

import routes from './routes';
import RightsStack from './RightsStack';
import SettingsStack from './SettingsStack';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const { t } = useTranslation();
  return (
    <Tabs.Navigator
      name={routes.mainTabs}
      initialRouteName={routes.main.rights}
      tabBarOptions={{
        activeTintColor: colors.charcoalGrey,
        inactiveTintColor: colors.warmGrey,
        style: styles.tabBar,
        labelStyle: textStyles.tabLabel,
        tabStyle: styles.tabs,
      }}
    >
      <Tabs.Screen
        name={routes.main.rights}
        component={RightsStack}
        options={{
          tabBarLabel: t('tab_rights'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shield-half-full"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.main.resources}
        component={Resources}
        options={{
          tabBarLabel: t('tab_resources'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.main.settings}
        component={SettingsStack}
        options={{
          tabBarLabel: t('settings'),
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.main.emergency}
        component={Emergency}
        options={{
          tabBarLabel: '',
          // eslint-disable-next-line no-unused-vars
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 2, // space from bottombar
                height: 64,
                width: 64,
                borderRadius: 100,
                backgroundColor: colors.primaryLight,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'black',
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowOpacity: 0.3,
                shadowRadius: 7,
              }}
            >
              <MaterialCommunityIcons
                name="alert-outline"
                color={colors.primary}
                size={40}
                style={{
                  top: 8,
                  left: 10,
                  width: 60,
                  height: 60,
                  alignContent: 'center',
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
    paddingHorizontal: 30,
  },
  tabs: {
    height: 55,
  },
  icon: {
    marginTop: 11,
  },
});

export default MainTabs;
