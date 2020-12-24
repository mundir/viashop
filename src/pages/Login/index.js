import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { LogoDark, ImgLogin } from '../../assets'
import { Buttonx, Input } from '../../components'
import { warna } from '../../utils'

const Login = () => {
    return (
        <View  style={styles.container}>
        <ScrollView>
            <View style={{ margin: 30 }} >
                <LogoDark width={196} height={24} />
            </View>
            <View style={{ margin: 30 }} >
                <ImgLogin />
            </View>
            <Text style={{ margin: 10, fontSize: 32, color: warna.default, fontWeight: 'bold' }} >
                Login
            </Text>
            <Input placeholder='Nomor Whatsapp' />
            <View style={styles.space(20)} ></View>
            <Input placeholder='Password' />
            <Buttonx caption='Login' />
        </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    space: value => {
        return {
            height: value
        }
    }

})