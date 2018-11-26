import React from 'react';
import { Vibration, Button, Text, View } from 'react-native';

const DURATION = 10000
const PATTERN = [1000, 2000, 3000]

class VibrationDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    vibrate() {
        Vibration.vibrate(DURATION)
        // Android: vibrate for 10s
        // iOS: duration is not configurable, vibrate for fixed time (about 500ms)
    }

    patternVibrate() {
        Vibration.vibrate(PATTERN)
        // Android: wait 1s -> vibrate 2s -> wait 3s
        // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate
    }

    continuousVibrate() {
        Vibration.vibrate(PATTERN, true)
        // Android: wait 1s -> vibrate 2s -> wait 3s -> wait 1s -> vibrate 2s -> wait 3s -> ...
        // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> ...
    }

    cancelVibrate() {
        Vibration.cancel()
        // Android: vibration stopped
        // iOS: vibration stopped
    }

    render() {
        return(
            <View>
                <Button 
                title="Vibrate"
                onPress={this.vibrate}
                />
                <Button 
                title="Pattern Vibrate"
                onPress={this.patternVibrate}
                />
                <Button 
                title="Continuous Vibrate"
                onPress={this.continuousVibrate}
                />
                <Button 
                title="Cancel Vibrate"
                onPress={this.cancelVibrate}
                />
            </View>
        )
    }
}

export default VibrationDemo