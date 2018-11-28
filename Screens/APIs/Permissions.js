import { PermissionsAndroid } from 'react-native';

class Permissions {
    check(name) {
        switch (name) {
            case 'camera':
                return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
            case 'photos':
                return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            case 'storage':
                return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
            case 'location':
                return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            default:
                return Promise.resolve(false)
        }
    }
    request(name){
        switch (name) {
            case 'camera':
                return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA).then(result => {
                    return Promise.resolve(result === PermissionsAndroid.RESULTS.GRANTED)
                })
            case 'photos':
                return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then(result => {
                    return Promise.resolve(result === PermissionsAndroid.RESULTS.GRANTED)
                })
            case 'storage':
                return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then(result => {
                    return Promise.resolve(result === PermissionsAndroid.RESULTS.GRANTED)
                })
            case 'location':
                return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(result => {
                    return Promise.resolve(result === PermissionsAndroid.RESULTS.GRANTED)
                })
            default:
                return Promise.resolve(false)
        }
    }
    
}
export default new Permissions()