import React from 'react';
import { View, Button, Text, ImageEditor } from 'react-native';

class ImageEditorDemo extends React.Component {

    getCroppedImage() {
    }

    render() {
        return (
            <View>
                <Button 
                title="Crop Image"
                onPress={this.getCroppedImage}
                
                />

            </View>
        )
    }
}

export default ImageEditorDemo