import React from 'react';
import { AccessibilityInfo, Alert, Button, View, } from 'react-native';

class AccessibilityInfoDemo extends React.Component {

    constructor(props) {
        super(props)
            this.state = {
              screenReaderEnabled: false,
            }
        this.screenReaderAlert = this.screenReaderAlert.bind(this)
    }
  
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
            this.handleScreenReaderToggled,
        );
    }
  
    handleScreenReaderToggled = (isEnabled) => {
        this.setState({
            screenReaderEnabled: isEnabled,
        });
    };

    screenReaderAlert() {
        return(
            Alert.alert(
            'Notice',
            this.state.screenReaderEnabled ? 'The screen reader is enabled.' : 'The screen reader is disabled.',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
            )
        )
    }
    
    render() {
        return (
            <View>
                <Button 
                    title="Check screenreader"
                    onPress={this.screenReaderAlert}
                />
            </View>
        );
    }

  }
  export default AccessibilityInfoDemo;