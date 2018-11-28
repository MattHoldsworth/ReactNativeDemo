import React from 'react';
import { Button, CameraRoll, Image, ScrollView, Text, View } from 'react-native';
import Permissions from './Permissions';

class CameraRollDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isCameraLoaded: false
        };
    }

    checkCameraPermission = async () => {
        try {
            const alreadyGranted = await Permissions.check('camera');
            if (alreadyGranted) {
                return alreadyGranted
            } else {
                const justGranted = await Permissions.request('camera');
                return justGranted 
            }
        } catch (err) {
            console.log(err)
        }
    }

    checkPhotoPermission = async () => {
        try {
            const alreadyGranted = await Permissions.check('photos');
            if (alreadyGranted) {
                return alreadyGranted
            } else {
                const justGranted = await Permissions.request('photos');
                return justGranted 
            }
        } catch (err) {
            console.log(err)
        }
    }

    getPhotos = async () => {
        if (await this.checkCameraPermission()) {
            if (await this.checkPhotoPermission()) {
                CameraRoll.getPhotos({first: 5}).then(
                    (data) => {
                        const assets = data.edges;
                        const images = assets.map((asset) => asset.node.image);
                        this.setState({
                            isCameraLoaded: true,
                            images: images
                        })
                    },
                (error) => {
                    console.warn(error);
                })
            }
        }
    }
  
    render() {
        if (!this.state.isCameraLoaded) {
            return (
                <View>
                    <Text>Loading ...</Text>
                    <View>
                    <Button 
                        title="Press to view camera roll"
                        onPress={this.getPhotos}
                        />
                    </View>
                </View>
            );
        }
        return (
          <ScrollView>
                <View>
                    { this.state.images.map((image) => <Image key={image.uri} source={{ height:200, width:200, uri: image.uri }} />) }
                </View>          
          </ScrollView>
        );
    }

  };
  export default CameraRollDemo;