import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

class IveyGram extends Component  {

    render() {
        return (
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.tempNav}>
                    <Text>IveyGram</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection:"row", alignItems: "center" }}>
                        <Image
                        style={ styles.userPic } 
                        source={{
                            uri:"https://lh3.googleusercontent.com/tT3y9MD2W_UxBlK81lAnlaDY1Ju-M_cR7APjm6ZP4y6BV-Q1ihRzCizQxSOWB7MoDXAmhvV95fZWyZ5Y0rAqtfEr3Q"}} />
                        <Text style={{ marginLeft: 10 }}>Zarek Ivey</Text>
                    </View>
                    <View />               
                </View>
                <Image 
                style={{ width: 100 + "%", height: 100}}
                source={{
                    uri:
                    "https://lh3.googleusercontent.com/PjP3LAeq5Lw63pRMvBWDlMbG9SUlZ_ucsQLx-kRfnNU15A2D3f8Vo_Pck5NT1UA9B4u179GvjdkxbbjRMRq9bTTlOA" }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width:100 + "%", 
        height: 50,
        marginTop: 20,  
        backgroundColor: "rgb(250,250,250)",
        // for that thin grey line at the bottom of the navbar
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },

    userBar: {
        width: 100+'%',
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        marginHorizontal: 10
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
});

export default IveyGram;