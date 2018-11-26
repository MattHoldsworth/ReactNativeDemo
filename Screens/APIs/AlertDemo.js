import React from 'react';
import { Alert, Button, View } from 'react-native';

class AlertDemo extends React.Component {

    renderAlert() {
        return (
            Alert.alert(
                'Cool title bro',
                'Rate the creativity',
                [
                    {text: 'Pretty average', onPress: () => console.log('Pretty average creativity bro.')},
                    {text: 'Shit', onPress: () => console.log('Shit creativity bro.')},
                    {text: 'Nice', onPress: () => console.log('Nice creativity bro.')},
                ],
                { cancelable: false }
            )
        )
    }


    render() {
        return (
            <View>
                <Button
                    title="Press for alert"
                    onPress={this.renderAlert}
                />
            </View>
        )
    }
}

export default AlertDemo;