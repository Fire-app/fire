import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../styles';
import textStyles from '../styles/textStyles';

import Card from './Card';
import FireIcon, { ICON_NAMES, IconNamePropType } from './FireIcon';

export default function NotificationCard({
  title,
  description,
  smallMode,
}) {
  return (
    <Card
      style={smallMode ? { padding: 10, paddingLeft: 16 } : { padding: 24 }}
    >
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1, paddingLeft: 12 }}>
          <Text style={smallMode ? textStyles.h3 : textStyles.h2}>{title}</Text>
          {description && (
            <Text style={[textStyles.body2, { paddingTop: 4 }]}>
              {description}
            </Text>
          )}
        </View>
        <FireIcon
          color={colors.primary}
          name={ICON_NAMES.CHEVRON_RIGHT}
          size={34}
        />
      </View>
    </Card>
  );
}

NavCard.propTypes = {
  description: PropTypes.string,
  iconName: IconNamePropType,
  image: Image.propTypes.source,
  smallMode: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
