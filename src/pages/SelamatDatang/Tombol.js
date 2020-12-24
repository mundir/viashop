import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { warna } from '../../utils'

const Tombol = ({ caption, proses }) => {
    return (
            <TouchableOpacity style={styles.default} onPress={proses} >
                <Text style={{ color: 'white', textAlign: 'center' }}>{caption}</Text>
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    default: {
        width:225,
        backgroundColor: warna.default,
        paddingVertical: 11,
        backgroundColor: '#01A3A4',
        borderRadius: 8,
    }
})

export default Tombol