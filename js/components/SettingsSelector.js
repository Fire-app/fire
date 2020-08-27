import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, textStyles } from '../styles';
import FireIcon, { IconNamePropType, ICON_NAMES } from './FireIcon';

const SettingsIcon = ({ iconName }) => (
  <View
    style={{
      alignItems: 'center',
      backgroundColor: colors.primaryLight,
      borderRadius: 34,
      height: 34,
      justifyContent: 'center',
      marginRight: 8,
      width: 34,
    }}
  >
    <FireIcon color={colors.primary} name={iconName} size={24} />
  </View>
);

SettingsIcon.propTypes = {
  iconName: IconNamePropType.isRequired,
};

export const Divider = () => (
  <View
    style={{
      borderColor: colors.border,
      borderWidth: StyleSheet.hairlineWidth,
    }}
  />
);

export const Row = ({ iconName, title, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={colors.primaryLight}>
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 14,
      }}
    >
      <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
        {iconName && <SettingsIcon iconName={iconName} />}
        <Text style={[textStyles.h5, { flex: 1 }]}>{title}</Text>
      </View>
      <FireIcon
        color={colors.primary}
        name={ICON_NAMES.CHEVRON_RIGHT}
        size={34}
      />
    </View>
  </TouchableHighlight>
);

Row.propTypes = {
  iconName: IconNamePropType,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
