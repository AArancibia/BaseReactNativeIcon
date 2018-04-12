import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    PixelRatio,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export class Header extends Component {
    render () {
        const { header } = styles;
        return (
            <View style={header}>
                <Text style={{fontSize: 30}}>
                    {this.props.headerText}
                    <Icon name="logo-angular" style={{fontSize: 40}}></Icon>
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {

        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#47315a',
        borderBottomWidth: 1 / PixelRatio.get(),
    }
});