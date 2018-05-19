import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Image, ScrollView } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae, Hoshi } from 'react-native-textinput-effects';

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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>WAHANA KOPERASI</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>Tambah Data Peminjaman</Text>
                    </View>
                </View>
                <ScrollView style={{backgroundColor: 'rgba(255,255,255, .4)', marginTop: 20}}>
                    <Hoshi
                        label={'NIK Nasabah'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{marginBottom: 5}}
                        onChangeText={(TextInputText) => this.setState({ nik: TextInputText })}
                        value={this.state.nik}
                    />
                    <Hoshi
                        label={'Tanggal Peminjaman'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ tglPinjam: TextInputText })}
                        value={this.state.tglPinjam}
                    />
                    <Hoshi
                        label={'Jumlah Peminjaman'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ jumlah: TextInputText })}
                        value={this.state.jumlah}
                    />
                    <Hoshi
                        label={'Bunga Yang Didapat'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ bunga: TextInputText })}
                        value={this.state.bunga}
                    />
                    <Hoshi
                        label={'Total Angsuran'}
                        borderColor={'#fff'}
                        inputStyle={{ color: '#000' }}
                        labelStyle={{ color: '#000' }}
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ totalAngsur: TextInputText })}
                        value={this.state.totalAngsur}
                    />
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={this.submitData}>
                    <Text style={styles.buttonText}>Tambah Nasabah</Text>
                </TouchableOpacity>
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
  },
  button: {
    marginTop: 10,
    backgroundColor: "#00BCD4",
    marginBottom: 40,
    borderRadius: 7,
    paddingVertical: 10,
    marginHorizontal: 20
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold"
  }
});