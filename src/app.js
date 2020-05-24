import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

import Topo from './components/Topo.js';
import ChoicePlayerArea from './components/ChoicePlayerArea.js';

const PEDRA = "Pedra";
const PAPEL = "Papel";
const TESOURA = "Tesoura";

const styles = StyleSheet.create({
    choiceButton: {
        width: 90,
    },
    choiceButtonsPainel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    jankenpoBoard: {
        marginTop: 25,
        flexDirection: 'column',
        alignItems: 'center'
    },
    resultText: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
        height: 60
    }
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            escolhaUsuario: "",
            escolhaComputador : "",
            resultado : ""
        };
    }

    obterResultado(escolhaUsuario, escolhaComputador) {
        if (escolhaUsuario === escolhaComputador) return "Empate!";

        if (escolhaUsuario === PEDRA && escolhaComputador === TESOURA ||
            escolhaUsuario === PAPEL && escolhaComputador === PEDRA ||
            escolhaUsuario === TESOURA && escolhaComputador === PAPEL
        ) {
            return 'Você venceu!';
        }

        return "Você perdeu!";
    }

    gerarEscolhaComputador() {
        // 0, 1 ou 2
        const numAleatorio = Math.floor(Math.random() * 3);

        switch(numAleatorio) {
            case 0: return PEDRA;
            case 1: return PAPEL;
            case 2: return TESOURA;
        }
    }

    jankenpo(escolhaUsuario) {
        const escolhaComputador = this.gerarEscolhaComputador();

        const resultado = this.obterResultado(escolhaUsuario, escolhaComputador);

        this.setState({ escolhaUsuario, escolhaComputador, resultado });
    }

    render() {
        return (
            <View>
                <Topo />

                <View style={ styles.choiceButtonsPainel }>
                    <View style={ styles.choiceButton }>
                        <Button title="Pedra" onPress={ () => this.jankenpo(PEDRA) } />
                    </View>
                    <View style={ styles.choiceButton }>
                        <Button title="Papel" onPress={ () => this.jankenpo(PAPEL) } />
                    </View>
                    <View style={ styles.choiceButton }>
                        <Button title="Tesoura" onPress={ () => this.jankenpo(TESOURA) } />
                    </View>
                </View>

                <View style={ styles.jankenpoBoard }>
                    <Text style={ styles.resultText }>{ this.state.resultado }</Text>

                    <ChoicePlayerArea
                        playerName="Jogador"
                        playerChoice={ this.state.escolhaUsuario }
                    />

                    <ChoicePlayerArea
                        playerName="Computador"
                        playerChoice={ this.state.escolhaComputador }
                    />
                </View>
            </View>
        );
    }

}