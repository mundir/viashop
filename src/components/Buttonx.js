import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { warna } from '../utils'

const Buttonx = ({ caption }) => {
    return (
        <TouchableOpacity>
            <View style={styles.default}>
                <Text style={{ color: 'white', textAlign:'center' }}>{caption}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Buttonx

const styles = StyleSheet.create({
    default: {
        color: 'white',
        marginTop: 30,
        backgroundColor: warna.default,
        borderRadius: 10,
        paddingVertical: 11,
        width: 274,
        height: 39
    }
})
