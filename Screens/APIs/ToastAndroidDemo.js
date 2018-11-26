import React from 'react';
import { ToastAndroid, Button, View } from 'react-native';

class ToastAndroidDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    showToast(){
        ToastAndroid.show('A pikachu appeared nearby!', ToastAndroid.SHORT)

    }

    showWithGravityToast() {
        ToastAndroid.showWithGravity(
            'All Your Base Are Belong To Us',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        )
    }

    showWithGravityAndOffsetToast() {
        ToastAndroid.showWithGravityAndOffset(
            'A wild toast appeared!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
            );
    }

    render() {
        return(
            <View>
                <Button
                title="Press for toast"
                onPress={this.showToast}
                />
                <Button
                title="Press for gravity toast"
                onPress={this.showWithGravityToast}
                />
                <Button
                title="Press for offset toast"
                onPress={this.showWithGravityAndOffsetToast}
                />

            </View>
        )

    }
}

export default ToastAndroidDemo