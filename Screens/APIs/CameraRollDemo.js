import React from 'react';
import { Image, ScrollView, View, Text, CameraRoll, PermissionsAndroid } from 'react-native';

class CameraRollDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       images: [],
       isCameraLoaded: false
      };
    }

    componentWillMount() {
        this.askPermission()
    }

    askPermission = () => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
            'title': 'Cool Photo App Camera Permission',
            'message': 'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.'
            }
        ).then( granted => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.getPhotos()
                console.log("You can use the camera")
            } else {
                console.log("Camera permission denied")
            }
        })
    }

    getPhotos = () => {
        CameraRoll.getPhotos({first: 5}).then(
            (data) =>{
                const assets = data.edges;
                const images = assets.map((asset) => asset.node.image);
                this.setState({
                    isCameraLoaded: true,
                    images: images
                })
            },
        (error) => {
            console.warn(error);
        }
      )
    }
  
    render() {
        if (!this.state.isCameraLoaded) {
          return (
            <View>
              <Text>Loading ...</Text>
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