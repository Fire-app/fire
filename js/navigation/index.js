import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import React from 'react';
import MainTabs from './MainTabs';
import OnboardingStack from './OnboardingStack';

const Navigation = () => {
  const { complete: onboardingComplete } = useSelector(
    (state) => state.onboarding
  );
  return (
    <NavigationContainer>
      {onboardingComplete ? <MainTabs /> : <OnboardingStack />}
    </NavigationContainer>
  );
};

export default Navigation;
