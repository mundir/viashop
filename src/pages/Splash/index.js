import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SelamatDatang');
        }, 2000)
    });
    return (
        <View>
            <Text>Ini Halaman Splash Screen Boss</Text>
        </View>
    )
}

export default Splash

