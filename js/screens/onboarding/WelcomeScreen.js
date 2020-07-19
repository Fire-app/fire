/* eslint-disable global-require */
import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, screenStyles } from '../../styles';
import NavigationButtons from '../../components/NavigationButtons';

const onboardingRoutes = routes.onboarding;

const WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyles.h2}>{'Welcome to Fire!'}</Text>
        </View>
      </View>
      <NavigationButtons
        // TODO: figure out what to display for not over 13
        onRightPress={() => console.log('Not over 13?')}
        onLeftPress={() => navigation.navigate(onboardingRoutes.intro)}
        rightTitle={t('not_over_13')}
        leftTitle={t('continue')}
        nextIsDisabled={false}
        hasLongTitle
      />
    </View>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;
