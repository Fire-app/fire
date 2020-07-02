/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import routes from '../../navigation/routes';
import { onboardingStyles } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingButtons from '../../components/OnboardingButtons';

const onBoardingRoutes = routes.onboarding;

const HotlineScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={onboardingStyles.container}>
      <View style={onboardingStyles.contentContainer}>
        <OnboardingTitle
          title={t('select_hotline')}
          subtitle={t('select_hotline_subtitle')}
        />
      </View>
      <View style={onboardingStyles.buttonContainer}>
        <OnboardingButtons
          onBackPress={() => navigation.pop()}
          onNextPress={() => navigation.navigate(onBoardingRoutes.attorney)}
        />
      </View>
    </View>
  );
};

HotlineScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default HotlineScreen;
