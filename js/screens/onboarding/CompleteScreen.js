/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import completeOnboardingAction from '../../store/actions/completeOnboarding';
import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingTemplate from './Template';

const IMAGE = require('../../../assets/completedImage.png');

const CompleteScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const exitOnboarding = () => dispatch(completeOnboardingAction());

  return (
    <OnboardingTemplate
      primaryButton={{
        title: t('continue'),
        onPress: exitOnboarding,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ paddingHorizontal: 30 }}>
          <OnboardingTitle title={t('completed_title')} alignCenter />
        </View>
        <View style={{ height: 40 }} />
        <Image
          style={styles.image}
          source={IMAGE}
          accessibilityLabel="Illustration of a man sitting"
        />
      </View>
    </OnboardingTemplate>
  );
};

CompleteScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default CompleteScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingBottom: 5,
  },
  image: {
    height: 200,
    width: 380,
    backgroundColor: 'white',
    padding: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
