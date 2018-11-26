//Class imports
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen'

//API imports
import AccessibilityInfoDemo from './Screens/APIs/AccessibilityInfoDemo'
import ActionSheetIOSDemo from './Screens/APIs/ActionSheetIOSDemo'
import AlertDemo from './Screens/APIs/AlertDemo'
import AlertIOSDemo from './Screens/APIs/AlertIOSDemo'
import AnimatedDemo from './Screens/APIs/AnimatedDemo' //export default app to render
import AppRegistryDemo from './Screens/APIs/AppRegistryDemo' //Used for ejected apps - not implemented
import AppStateDemo from './Screens/APIs/AppStateDemo'
import AsyncStorageDemo from './Screens/APIs/AsyncStorageDemo'
import BackHandlerDemo from './Screens/APIs/BackHandlerDemo'
import CameraRollDemo from './Screens/APIs/CameraRollDemo'
import ClipboardDemo from './Screens/APIs/ClipboardDemo'
import DatePickerAndroidDemo from './Screens/APIs/DatePickerAndroidDemo'
import DimensionsDemo from './Screens/APIs/DimensionsDemo'
import EasingDemo from './Screens/APIs/EasingDemo'
import GeolocationDemo from './Screens/APIs/GeolocationDemo'
import ImageEditorDemo from './Screens/APIs/ImageEditorDemo'
import ImagePickerIOSDemo from './Screens/APIs/ImagePickerIOSDemo'
import ImageStoreDemo from './Screens/APIs/ImageStoreDemo'
import InteractionManagerDemo from './Screens/APIs/InteractionManagerDemo'
import KeyboardDemo from './Screens/APIs/KeyboardDemo'
import LayoutAnimationDemo from './Screens/APIs/LayoutAnimationDemo'
import LinkingDemo from './Screens/APIs/LinkingDemo'
import NetInfoDemo from './Screens/APIs/NetInfoDemo'
import PanResponderDemo from './Screens/APIs/PanResponderDemo'
import PermissionsAndroidDemo from './Screens/APIs/PermissionsAndroidDemo'
import PixelRatioDemo from './Screens/APIs/PixelRatioDemo'
import PushNotificationsIOSDemo from './Screens/APIs/PushNotificationsIOSDemo'
import ShareDemo from './Screens/APIs/ShareDemo'
import StatusBarIOSDemo from './Screens/APIs/StatusBarIOSDemo'
import StylesheetDemo from './Screens/APIs/StylesheetDemo'
import SystraceDemo from './Screens/APIs/SystraceDemo'
import TimePickerAndroidDemo from './Screens/APIs/TimePickerAndroidDemo'
import ToastAndroidDemo from './Screens/APIs/ToastAndroidDemo'
import TransformsDemo from './Screens/APIs/TransformsDemo'
import VibrationDemo from './Screens/APIs/VibrationDemo'
import VibrationIOSDemo from './Screens/APIs/VibrationIOSDemo'

//Component imports
import ActivityIndicatorDemo from './Screens/Components/ActivityIndicatorDemo'
import ButtonDemo from './Screens/Components/ButtonDemo'
import DatePickerIOSDemo from './Screens/Components/DatePickerIOSDemo'
import DrawerLayoutAndroidDemo from './Screens/Components/DrawerLayoutAndroidDemo'
import FlatListDemo from './Screens/Components/FlatListDemo'
import ImageBackgroundDemo from './Screens/Components/ImageBackgroundDemo'
import ImageDemo from './Screens/Components/ImageDemo'
import InputAccessoryViewDemo from './Screens/Components/InputAccessoryViewDemo'
import KeyboardAvoidingViewDemo from './Screens/Components/KeyboardAvoidingViewDemo'
import ListViewDemo from './Screens/Components/ListViewDemo'
import MaskedViewIOSDemo from './Screens/Components/MaskedViewIOSDemo'
import ModalDemo from './Screens/Components/ModalDemo'
import NavigatorIOSDemo from './Screens/Components/NavigatorIOSDemo'
import ProgressBarAndroidDemo from './Screens/Components/ProgressBarAndroidDemo'
import ProgressViewIOSDemo from './Screens/Components/ProgressViewIOSDemo'
import ReactNativeDatePickerDemo from './Screens/Components/ReactNativeDatePickerDemo'
import ReactNativeFoldviewDemo from './Screens/Components/ReactNativeFoldviewDemo'
import ReactNativeNavigationDemo from './Screens/Components/ReactNativeNavigationDemo'
import ReactNativePickerDemo from './Screens/Components/ReactNativePickerDemo'
import ReactNativeSettingsDemo from './Screens/Components/ReactNativeSettingsDemo'
import ReactNativeWebviewDemo from './Screens/Components/ReactNativeWebviewDemo'
import RefreshControlDemo from './Screens/Components/RefreshControlDemo'
import SafeAreaViewDemo from './Screens/Components/SafeAreaViewDemo'
import ScrollViewDemo from './Screens/Components/ScrollViewDemo'
import SectionListDemo from './Screens/Components/SectionListDemo'
import SegmentedControlIOSDemo from './Screens/Components/SegmentedControlIOSDemo'
import SliderDemo from './Screens/Components/SliderDemo'
import SnapshotViewIOSDemo from './Screens/Components/SnapshotViewIOSDemo'
import StatusBarDemo from './Screens/Components/StatusBarDemo'
import SwitchDemo from './Screens/Components/SwitchDemo'
import TabBarIOSDemo from './Screens/Components/TabBarIOSDemo'
import TabBarIOSItemDemo from './Screens/Components/TabBarIOSItemDemo'
import TextDemo from './Screens/Components/TextDemo'
import TextInputDemo from './Screens/Components/TextInputDemo'
import ToolbarAndroidDemo from './Screens/Components/ToolbarAndroidDemo'
import TouchableHighlightDemo from './Screens/Components/TouchableHighlightDemo'
import TouchableNativeFeedbackDemo from './Screens/Components/TouchableNativeFeedbackDemo'
import TouchableOpacityDemo from './Screens/Components/TouchableOpacityDemo'
import ViewDemo from './Screens/Components/ViewDemo'
import ViewPagerAndroidDemo from './Screens/Components/ViewPagerAndroidDemo'
import VirtualizedListDemo from './Screens/Components/VirtualizedListDemo'

//Props imports
import ImageStyleProps from './Screens/Props/ImageStyleProps'
import LayoutProps from './Screens/Props/LayoutProps'
import ShadowProps from './Screens/Props/ShadowProps'
import TextStyleProps from './Screens/Props/TextStyleProps'
import ViewStyleProps from './Screens/Props/ViewStyleProps'

const MainNavigator = createStackNavigator({
  HomeScreen,
  AccessibilityInfoDemo,
  ActionSheetIOSDemo,
  AlertDemo,
  AlertIOSDemo,
  AnimatedDemo,
  AppRegistryDemo,
  AppStateDemo,
  AsyncStorageDemo,
  BackHandlerDemo,
  CameraRollDemo,
  ClipboardDemo,
  DatePickerAndroidDemo,
  DimensionsDemo,
  EasingDemo,
  GeolocationDemo,
  ImageEditorDemo,
  ImagePickerIOSDemo,
  ImageStoreDemo,
  InteractionManagerDemo,
  KeyboardDemo,
  LayoutAnimationDemo,
  LinkingDemo,
  NetInfoDemo,
  PanResponderDemo,
  PermissionsAndroidDemo,
  PixelRatioDemo,
  PushNotificationsIOSDemo,
  ShareDemo,
  StatusBarIOSDemo,
  StylesheetDemo,
  SystraceDemo,
  TimePickerAndroidDemo,
  ToastAndroidDemo,
  TransformsDemo,
  VibrationDemo,
  VibrationIOSDemo,
  ActivityIndicatorDemo,
  ButtonDemo,
  DatePickerIOSDemo,
  DrawerLayoutAndroidDemo,
  FlatListDemo,
  ImageBackgroundDemo,
  ImageDemo,
  InputAccessoryViewDemo,
  KeyboardAvoidingViewDemo,
  ListViewDemo,
  MaskedViewIOSDemo,
  ModalDemo,
  NavigatorIOSDemo,
  ProgressBarAndroidDemo,
  ProgressViewIOSDemo,
  ReactNativeDatePickerDemo,
  ReactNativeFoldviewDemo,
  ReactNativeNavigationDemo,
  ReactNativePickerDemo,
  ReactNativeSettingsDemo,
  ReactNativeWebviewDemo,
  RefreshControlDemo,
  SafeAreaViewDemo,
  ScrollViewDemo,
  SectionListDemo,
  SegmentedControlIOSDemo,
  SliderDemo,
  SnapshotViewIOSDemo,
  StatusBarDemo,
  SwitchDemo,
  TabBarIOSDemo,
  TabBarIOSItemDemo,
  TextDemo,
  TextInputDemo,
  ToolbarAndroidDemo,
  TouchableHighlightDemo,
  TouchableNativeFeedbackDemo,
  TouchableOpacityDemo,
  ViewDemo,
  ViewPagerAndroidDemo,
  VirtualizedListDemo,
  ImageStyleProps,
  LayoutProps,
  ShadowProps,
  TextStyleProps,
  ViewStyleProps,
})

const App = createAppContainer(MainNavigator)

export default App


    /*<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedDemo style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </AnimatedDemo>
    </View>*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/