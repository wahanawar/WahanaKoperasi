import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Image } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';

class HomeScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={require('./img/logo.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </View>
                    <View style={styles.judul}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                        WAHANA KOPERASI</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                        HOME</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#388e3c"
  },
    header: {
        flex: 0.1,
        flexDirection: "row",
        backgroundColor: "rgba(255,202,40, .9)"
    },
    logo: {
        flex: 0.15
    },
    judul: {
        flex: 0.85,
        justifyContent: "center",
        alignContent: "center"
    }
});