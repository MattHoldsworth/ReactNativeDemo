import React from 'react';
import { PermissionsAndroid, Text, View } from 'react-native'

class GeolocationDemo extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }
    
    componentWillMount() {
        this.askPermission()
    }

    askPermission = () => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Location Permission',
                'message': 'This app needs access to your location'
            }
        ).then( granted => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.getLocation()
            } else {
                console.log("Location permission granted.")
            }
        })
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }
    
    render() {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }

}
export default GeolocationDemo