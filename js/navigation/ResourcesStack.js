import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import routes from './routes';
import ResourcesList from '../screens/resources/ResourcesListScreen';
import AAAJScreen from '../screens/resources/orgPageScreens/AAAJScreen';
import CARECENScreen from '../screens/resources/orgPageScreens/CARECENScreen';
import CHIRLAScreen from '../screens/resources/orgPageScreens/CHIRLAScreen';
import textStyles from '../styles/textStyles';

const Stack = createStackNavigator();

const ResourcesStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      name={routes.resourcesStack}
      initialRouteName={routes.resources.overviewList}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: textStyles.h2,
      }}
    >
      <Stack.Screen
        name={routes.resources.overviewList}
        component={ResourcesList}
        options={{ title: t('header_resources') }}
      />
      <Stack.Screen
        name={routes.resources.cases.AAAJ}
        component={AAAJScreen}
        options={{ title: t('header_AAAJ'), headerTitle: false }}
      />
      <Stack.Screen
        name={routes.resources.cases.CARECEN}
        component={CARECENScreen}
        options={{ title: t('header_CARECEN'), headerTitle: false }}
      />
      <Stack.Screen
        name={routes.resources.cases.CHIRLA}
        component={CHIRLAScreen}
        options={{ title: t('header_CHIRLA'), headerTitle: false }}
      />
    </Stack.Navigator>
  );
};

export default ResourcesStack;