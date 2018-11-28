import React from 'react';
import {  Button, DatePickerAndroid, Text, View} from 'react-native';

class DatePickerAndroidDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            day: 0,
            month: 0,
            year: 0
        }
        this.openDatePicker = this.openDatePicker.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async openDatePicker(){
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.handleChange(day, month, year)
            } else {
                return
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    handleChange(day, month, year) {
        this.setState({ day: day, month: month, year: year })
    }

    render() {
        return (
            <View>
                <Text>
                    {"\n"}
                    {"\n"}
                    {"The date is: " + this.state.day + "/" + this.state.month + "/" + this.state.year}
                </Text>
                <Button
                    title="Select a date"
                    onPress={this.openDatePicker}
                />
            </View>
        )
    }

}
export default DatePickerAndroidDemo