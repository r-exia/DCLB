import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const SuKienScreen = () => {
    return (
        <View style={{ width: windowWidht, height: windowHeight, backgroundColor: 'white' }}>

        </View>
    )
}

export default SuKienScreen

const styles = StyleSheet.create({})