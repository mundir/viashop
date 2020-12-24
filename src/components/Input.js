import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { warna } from '../utils'

const Input = ({placeholder}) => {
    return (
       <TextInput style={styles.input} placeholder={placeholder}/>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        padding:11,
        width:262,
        borderBottomWidth:1,
        borderRadius:8,
        borderBottomColor:warna.default,
        fontSize:18,
        color:warna.default
    }
})
