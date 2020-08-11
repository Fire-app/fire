/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
  ViewPropTypes,
} from 'react-native';
import { ButtonProp, PrimarySecondaryOptions } from './Buttons';

const CustomModal = ({
  children,
  isVisible,
  primaryButton,
  secondaryButton,
  contentContainerStyle,
}) => (
  <Modal transparent animationType="fade" visible={isVisible}>
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            alwaysBounceVertical={false}
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={styles.modalContainer}>
              <View style={[styles.contentContainer, contentContainerStyle]}>
                {children}
                <PrimarySecondaryOptions
                  primaryButton={primaryButton}
                  secondaryButton={secondaryButton}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </Modal>
);

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  /* eslint-disable react/require-default-props */
  primaryButton: ButtonProp,
  secondaryButton: ButtonProp,
  contentContainerStyle: ViewPropTypes.style,
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 28,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
    // explicitly defined to be full screen without flex
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    position: 'absolute',
  },
});
