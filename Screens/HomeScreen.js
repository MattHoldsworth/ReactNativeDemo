import React from 'react';
import { Button, FlatList, TouchableOpacity, TouchableHighlight, View } from 'react-native';

class HomeScreen extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={[  
                        {key:'AccessibilityInfoDemo'},
                        {key:'ActionSheetIOSDemo'},
                        {key:'AlertDemo'},
                        {key:'AlertIOSDemo'},
                        {key:'AnimatedDemo'},
                        {key:'AppRegistryDemo'},
                        {key:'AppStateDemo'},
                        {key:'AsyncStorageDemo'},
                        {key:'BackHandlerDemo'},
                        {key:'CameraRollDemo'},
                        {key:'ClipboardDemo'},
                        {key:'DatePickerAndroidDemo'},
                        {key:'DimensionsDemo'},
                        {key:'EasingDemo'},
                        {key:'GeolocationDemo'},
                        {key:'ImageEditorDemo'},
                        {key:'ImagePickerIOSDemo'},
                        {key:'ImageStoreDemo'},
                        {key:'InteractionManagerDemo'},
                        {key:'KeyboardDemo'},
                        {key:'LayoutAnimationDemo'},
                        {key:'LinkingDemo'},
                        {key:'NetInfoDemo'},
                        {key:'PanResponderDemo'},
                        {key:'PermissionsAndroidDemo'},
                        {key:'PixelRatioDemo'},
                        {key:'PushNotificationsIOSDemo'},
                        {key:'ShareDemo'},
                        {key:'StatusBarIOSDemo'},
                        {key:'StylesheetDemo'},
                        {key:'SystraceDemo'},
                        {key:'TimePickerAndroidDemo'},
                        {key:'ToastAndroidDemo'},
                        {key:'TransformsDemo'},
                        {key:'VibrationDemo'},
                        {key:'VibrationIOSDemo'},     
                        {key:'ActivityIndicatorDemo'},
                        {key:'ButtonDemo'},
                        {key:'DatePickerIOSDemo'},
                        {key:'DrawerLayoutAndroidDemo'},
                        {key:'FlatListDemo'},
                        {key:'ImageBackgroundDemo'},
                        {key:'ImageDemo'},
                        {key:'InputAccessoryViewDemo'},
                        {key:'KeyboardAvoidingViewDemo'},
                        {key:'ListViewDemo'},
                        {key:'MaskedViewIOSDemo'},
                        {key:'ModalDemo'},
                        {key:'NavigatorIOSDemo'},
                        {key:'ProgressBarAndroidDemo'},
                        {key:'ProgressViewIOSDemo'},
                        {key:'ReactNativeDatePickerDemo'},
                        {key:'ReactNativeFoldviewDemo'},
                        {key:'ReactNativeNavigationDemo'},
                        {key:'ReactNativePickerDemo'},
                        {key:'ReactNativeSettingsDemo'},
                        {key:'ReactNativeWebviewDemo'},
                        {key:'RefreshControlDemo'},
                        {key:'SafeAreaViewDemo'},
                        {key:'ScrollViewDemo'},
                        {key:'SectionListDemo'},
                        {key:'SegmentedControlIOSDemo'},
                        {key:'SliderDemo'},
                        {key:'SnapshotViewIOSDemo'},
                        {key:'StatusBarDemo'},
                        {key:'SwitchDemo'},
                        {key:'TabBarIOSDemo'},
                        {key:'TabBarIOSItemDemo'},
                        {key:'TextDemo'},
                        {key:'TextInputDemo'},
                        {key:'ToolbarAndroidDemo'},
                        {key:'TouchableHighlightDemo'},
                        {key:'TouchableNativeFeedbackDemo'},
                        {key:'TouchableOpacityDemo'},
                        {key:'ViewDemo'},
                        {key:'ViewPagerAndroidDemo'},
                        {key:'VirtualizedListDemo'},
                        {key:'ImageStyleProps'},
                        {key:'LayoutProps'},
                        {key:'ShadowProps'},
                        {key:'TextStyleProps'},
                        {key:'ViewStyleProps'},
                    ]}
                    renderItem={({item}) => {
                        return(
                            <View>
                                <TouchableHighlight>
                                    <Button
                                        title={item.key}
                                        onPress={() => navigate(item.key)}
                                    />
                                </TouchableHighlight>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

export default HomeScreen