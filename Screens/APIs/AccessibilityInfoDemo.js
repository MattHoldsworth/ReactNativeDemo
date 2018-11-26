import React from 'react';
import { View, Text, AccessibilityInfo } from 'react-native';

class AccessibilityInfoDemo extends React.Component {
    state = {
      screenReaderEnabled: false,
    };
  
    componentDidMount() {
      AccessibilityInfo.addEventListener(
        'change',
        this._handleScreenReaderToggled,
      );
      AccessibilityInfo.fetch().then((isEnabled) => {
        this.setState({
          screenReaderEnabled: isEnabled,
        });
      });
    }
  
    componentWillUnmount() {
      AccessibilityInfo.removeEventListener(
        'change',
        this._handleScreenReaderToggled,
      );
    }
  
    _handleScreenReaderToggled = (isEnabled) => {
      this.setState({
        screenReaderEnabled: isEnabled,
      });
    };
  
    render() {
      return (
        <View>
          <Text>
            {"\n"}
            {"\n"}
            The screen reader is{' '}
            {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
          </Text>
        </View>
      );
    }

  }
  export default AccessibilityInfoDemo;