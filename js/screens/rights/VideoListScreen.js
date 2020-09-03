import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../../components/Card';
import VIDEOS from '../../../data/videos';
import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

const KNOW_YOUR_RIGHTS_IMAGE = require('../../../assets/videoCoverImages/know_your_rights.png');

const VideoCard = ({ title, time, onPress, coverImage }) => (
  <Card onPress={onPress}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          marginRight: 12,
        }}
      >
        <Image
          resizeMode="contain"
          // Need to use absolute + percent for images to contain properly
          source={coverImage}
          style={{ height: 80, width: '100%' }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text style={[textStyles.h3, { color: colors.charcoalGrey }]}>
          {title}
        </Text>
        <Text style={[textStyles.body2, { color: colors.charcoalGrey }]}>
          {time}
        </Text>
      </View>
    </View>
  </Card>
);

VideoCard.propTypes = {
  coverImage: Image.propTypes.source.isRequired,
  onPress: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const VideoListScreen = () => {
  const { t } = useTranslation();
  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 24 }}
      data={VIDEOS}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      renderItem={({ item: { title, image, time } }) => (
        <VideoCard
          coverImage={KNOW_YOUR_RIGHTS_IMAGE}
          image={image}
          // TODO: image per video, or thumbnail
          onPress={() => {}}
          time={time}
          title={t(title)}
        />
      )}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default VideoListScreen;
