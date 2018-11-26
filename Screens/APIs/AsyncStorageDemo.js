import React from 'react';
import { AsyncStorage, Button, View } from 'react-native';

class AsyncStorageDemo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    storeData = async () => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
            console.log(error)
        }
    }

    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                console.log(value);
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