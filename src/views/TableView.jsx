import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import TableContainer from '../containers/TableContainer';

export default class TableView extends Component {
    static navigationOptions = {
        title: "Tabuleiro",
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <TableContainer />
            </View>
        )
    }
}