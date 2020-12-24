import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Akun, Home, Keranjang, Login, Pesanan, Regist, SelamatDatang, Splash } from "../pages";

const Stack = createStackNavigator()
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen
                name="SelamatDatang"
                component={SelamatDatang}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Regist" component={Regist} />
        </Stack.Navigator>
    )
}

export default Router