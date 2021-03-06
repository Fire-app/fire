import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { textStyles } from '../../../styles';

const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      {/* TODO: */}
      <Text style={[textStyles.h1, { textAlign: 'center' }]}>
        {'This is the Privacy Policy screen!'}
      </Text>
    </View>
  );
};

PrivacyPolicyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
