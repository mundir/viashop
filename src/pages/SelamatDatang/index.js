import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { warna } from '../../utils'
import Tombol from './Tombol'
import { Bg1, Logo, Welcome1, Welcome2 } from '../../assets'

const SelamatDatang = ({ navigation }) => {
    const kePage = pagex => {
        navigation.navigate(pagex)
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={Bg1} style={styles.image}>
                <View style={styles.flex1}>
                    <View style={{ padding: 20 }}>
                        <Logo />
                    </View>
                    <View style={{alignItems:'center'}}>
                        <View style={{ marginVertical: 45 }}>
                            <Welcome2 width={272} height={45} />
                        </View>
                        <Image source={Welcome1} style={styles.img} />
                    </View>
                    <View style={{ marginTop: 60 }}>
                        <Text style={styles.tag}>Belanja online harga grosir</Text>
                        <Text style={styles.tag}>Mudah Murah Anti Ribet</Text>
                    </View>
                </View>
                <View style={styles.flex2}>
                    <Tombol caption="Login Boss" proses={() => kePage('Login')} />
                </View>
            </ImageBackground>
        </View >

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        //alignItems: "center"
    },
    img: {
        width: 246,
        height: 182
    },
    flex1: {
        flex: 3,
    },
    flex2: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    tag: {
        fontFamily: 'roboto',
        textAlign: 'center',
        fontSize: 16,
        color: warna.default
    }

})

export default SelamatDatang



