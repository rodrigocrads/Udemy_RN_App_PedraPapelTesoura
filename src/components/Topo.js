import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class PlayerChoice extends Component {
    render() {
        return (
            <View>
                <Image
                    source={ require("../../imgs/jankenpo.png") }
                />
            </View>
        )
    }
}