import React from 'react';
import { TimePickerAndroid, Button, Text, View } from 'react-native';

class TimePickerAndroidDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: 0,
            minute: 0
        }
        this.openTimePicker = this.openTimePicker.bind(this)
    }

    async openTimePicker() {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hour: false, // Will display '2 PM'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
              this.setState({hour:hour, minute:minute})
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    }

    render() {
        return(
            <View>
                <Text>
                    The time selected is {this.state.hour}:{this.state.minute}
                </Text>
                <Button
                title="Press me for the time"
                onPress={this.openTimePicker}
                />
            </View>
        )
    }

}

export default TimePickerAndroidDemo