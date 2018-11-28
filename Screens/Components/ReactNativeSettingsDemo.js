import React from 'react';
import { Button, Text, View } from 'react-native';
import RNSettings from 'react-native-settings'

class ReactNativeSettingsDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locationSetting: false,
            airplaneModeSetting: false
        }
        this.checkLocationSetting = this.checkLocationSetting.bind(this)
        this.checkAirplaneModeSetting = this.checkAirplaneModeSetting.bind(this)
    }

    checkLocationSetting() {
        RNSettings.getSetting(RNSettings.LOCATION_SETTING).then(result => {
            if (result == RNSettings.ENABLED) {
                this.setState({locationSetting: true})
            } else {
                this.setState({locationSetting: false})
            }
        }).catch(error => {
            console.log(error);
        })
    }

    checkAirplaneModeSetting(){
        RNSettings.getSetting(RNSettings.AIRPLANE_MODE_SETTING).then(result => {
            if (result == RNSettings.ENABLED) {
                this.setState({airplaneModeSetting: true})
            } else {
                this.setState({airplaneModeSetting: false})
            }
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <View>
                <Button 
                    title="Check location setting"
                    onPress={this.checkLocationSetting}
                />
                <Text>
`                   {"\n"}
                    {"\n"}
                    Location is{' '}
                    {this.state.locationSetting ? 'enabled' : 'disabled'}.`
                </Text>
                <Button 
                    title="Check location setting"
                    onPress={this.checkAirplaneModeSetting}
                />
                <Text>
                    {"\n"}
                    {"\n"}
                    Airplane mode is{' '}
                    {this.state.airplaneModeSetting ? 'enabled' : 'disabled'}.
                </Text>
            </View>
        )
    }

}
export default ReactNativeSettingsDemo