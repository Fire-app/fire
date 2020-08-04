/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import routes from '../../navigation/routes';
import { colors, textStyles } from '../../styles';
import OnboardingTemplate from './Template';

const onboardingRoutes = routes.onboarding;

const InfoSection = ({ title, subtitle, iconName }) => {
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
      <Feather name={iconName} style={styles.icon} />
      <View style={{ width: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={[textStyles.h1, { paddingBottom: 5 }]}>{title}</Text>
        <Text style={[textStyles.body1, { color: colors.textLight }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const IntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OnboardingTemplate
      step={1}
      primaryButton={{
        title: t('continue'),
        onPress: () => navigation.navigate(onboardingRoutes.toolkitIntro),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
          paddingTop: 50,
        }}
      >
        <InfoSection
          title={t('know_your_rights')}
          subtitle={t('know_your_rights_sub')}
          iconName="shield"
        />
        <View style={{ height: 40 }} />
        <InfoSection
          title={t('protect_yourself')}
          subtitle={t('protect_yourself_sub')}
          iconName="alert-triangle"
        />
        <View style={{ height: 40 }} />
        <InfoSection
          title={t('connect_with_orgs')}
          subtitle={t('connect_with_orgs_sub')}
          iconName="users"
        />
      </ScrollView>
    </OnboardingTemplate>
  );
};

IntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default IntroScreen;

const styles = StyleSheet.create({
  icon: {
    color: colors.primary,
    fontSize: 40,
    paddingTop: 5,
  },
});
