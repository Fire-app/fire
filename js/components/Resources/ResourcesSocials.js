/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';

export default function ResourcesSocials({
  facebookUrl,
  instagramUrl,
  twitterUrl,
  youtubeUrl,
}) {
  // returns null instead of padding space if no props passed
  if (!(facebookUrl || instagramUrl || twitterUrl || youtubeUrl)) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 38,
        paddingBottom: 58,
      }}
    >
      {facebookUrl ? (
        <SocialIcon
          type="facebook"
          onPress={() => WebBrowser.openBrowserAsync(facebookUrl)}
        />
      ) : null}
      {instagramUrl ? (
        <SocialIcon
          type="instagram"
          onPress={() => WebBrowser.openBrowserAsync(instagramUrl)}
        />
      ) : null}
      {twitterUrl ? (
        <SocialIcon
          type="twitter"
          onPress={() => WebBrowser.openBrowserAsync(twitterUrl)}
        />
      ) : null}
      {youtubeUrl ? (
        <SocialIcon
          type="youtube"
          onPress={() => WebBrowser.openBrowserAsync(youtubeUrl)}
        />
      ) : null}
    </View>
  );
}

ResourcesSocials.propTypes = {
  facebookUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  youtubeUrl: PropTypes.string,
};