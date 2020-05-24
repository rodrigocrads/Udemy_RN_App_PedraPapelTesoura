import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    area: {
        marginBottom: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 19,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default class ChoicePlayerArea extends Component {

    getChoiceImage() {
        if (this.props.playerChoice === 'Pedra') {
            return require('../../imgs/PEDRA.png');
        } else if (this.props.playerChoice === 'Papel') {
            return require('../../imgs/PAPEL.png');
        } else {
            return require('../../imgs/TESOURA.png');
        }
    }

    render() {
        if (this.props.playerName && this.props.playerName !== '' &&
            this.props.playerChoice && this.props.playerChoice !== ''
        ) {
            const image = this.getChoiceImage();

            return (
                <View style={styles.area}>
                    <Text style={styles.text}>{this.props.playerName}</Text>
                    <Image source={image} />
                </View>
            );
        } else {
            return false;
        }
    }
}