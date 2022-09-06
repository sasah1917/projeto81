import React, { Component } from "react";
import {
    View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

export default class Feed extends Component{
    render(){
        return(
            <View style={StyleSheet.texto}>
                <Text>
                    Tela de feed
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})

