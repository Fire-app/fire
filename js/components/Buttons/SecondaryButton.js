import { Button } from 'react-native-elements';
import { StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../../styles';

const SecondaryButton = ({ title, onPress, alignRight, containerStyle }) => (
  <Button
    buttonStyle={StyleSheet.flatten([
      { backgroundColor: colors.white, borderRadius: 3, padding: 16 },
      alignRight && { padding: 6 },
      containerStyle,
    ])}
    containerStyle={({ flexGrow: 1 }, alignRight && { alignSelf: 'flex-end' })}
    onPress={onPress}
    title={title}
    titleStyle={StyleSheet.flatten([
      textStyles.h2,
      alignRight && textStyles.h3,
      { color: colors.primary },
    ])}
  />
);

SecondaryButton.propTypes = {
  alignRight: PropTypes.bool,

  containerStyle: ViewPropTypes.style,

  onPress: PropTypes.func.isRequired,

  title: PropTypes.string.isRequired,
};

export default SecondaryButton;
