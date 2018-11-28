import React from 'react';
import { Alert, AsyncStorage, Button, View } from 'react-native';

class AsyncStorageDemo extends React.Component {

    storeData = async () => {
        try {
            await AsyncStorage.setItem('userName', 'John Doe');
        } catch (error) {
            console.log(error)
        }
    }

    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userName');
            if (value !== null) {
                Alert.alert(
                    'Retrieved Data',
                    value,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return(
            <View>
                <Button
                    title="Store Data"
                    onPress={this.storeData}
                />
                <Button
                    title="Retrieve Data"
                    onPress={this.retrieveData}
                />
            </View>
        )
    }

}
export default AsyncStorageDemo