import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, 
    ActivityIndicator, KeyboardAvoidingView, Image, ScrollView, Alert } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae, Fumi, Kaede } from 'react-native-textinput-effects';

class TambahNasabahScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           nik: '',
           nama: '',
           alamat: '',
           tglLahir: '',
           noHp: '',
           jenisKelamin: '',
           ActivityIndicator_Loading: false,
        }
    }
    submitData = () => {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            fetch('http://api.wahanawar.com/add_data.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            nik: this.state.nik,
                            nama: this.state.nama,
                            alamat: this.state.alamat,
                            tglLahir: this.state.tglLahir,
                            noHp: this.state.noHp,
                            jenisKelamin: this.state.jenisKelamin,
                        })

                }).then((response) => response.json()).then((responseJsonFromServer) => {
                    Alert.alert(responseJsonFromServer);
                    this.setState(
                        {
                            nik: '',
                            nama: '',
                            alamat: '',
                            tglLahir: '',
                            noHp: '',
                            jenisKelamin: '',
                            ActivityIndicator_Loading: false
                        });

                }).catch((error) => {
                    console.error(error);

                    this.setState({ ActivityIndicator_Loading: false });
                });
        });
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={require('./img/logo.png')}
                            style={{width: 50, height: 50}}
                        />
                    </View>
                    <View style={styles.judul}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000'}}>
                        WAHANA KOPERASI</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#000'}}>
                        TAMBAH NASABAH</Text>
                    </View>
                </View>
                
                <ScrollView style={{flex: 1}}>
                    <KeyboardAvoidingView>
                    <Kaede
                        label={'NIK Nasabah'}
                        underlineColorAndroid="transparent"
                        returnKeyType="done"
                        labelStyle={{ color: '#000' }}
                        inputStyle={{ backgroundColor: '#FFFFFF', color: '#000' }}
                        placeholderTextColor='#FFFFFF'
                        selectionColor='#FFFFFF'
                        onChangeText={(TextInputText) => this.setState({ nik: TextInputText })}
                        value={this.state.nik}
                        style={{ marginBottom: 5 }}
                    />
                    <Kaede
                        label={'Nama Nasabah'}
                        underlineColorAndroid="transparent"
                        returnKeyType="done"
                        labelStyle={{ color: '#000' }}
                        inputStyle={{ backgroundColor: '#FFFFFF', color: '#000' }}
                        placeholderTextColor='#FFFFFF'
                        selectionColor='#FFFFFF'
                        onChangeText={(TextInputText) => this.setState({ nama: TextInputText })}
                        value={this.state.nama}
                        style={{ marginBottom: 5 }}
                    />
                    <Kaede
                        label={'Alamat Nasabah'}
                        underlineColorAndroid="transparent"
                        returnKeyType="done"
                        multiline={true}
                        labelStyle={{ color: '#000' }}
                        inputStyle={{ backgroundColor: '#FFFFFF', color: '#000' }}
                        placeholderTextColor='#FFFFFF'
                        selectionColor='#FFFFFF'
                        style={{ marginBottom: 5 }}
                        onChangeText={(TextInputText) => this.setState({ alamat: TextInputText })}
                        value={this.state.alamat}
                    />
                    <Kaede
                        label={'Tanggal Lahir'}
                        underlineColorAndroid="transparent"
                        returnKeyType="done"
                        labelStyle={{ color: '#000' }}
                        inputStyle={{ backgroundColor: '#FFFFFF', color: '#000' }}
                        placeholderTextColor='#FFFFFF'
                        selectionColor='#FFFFFF'
                        onChangeText={(TextInputText) => this.setState({ tglLahir: TextInputText })}
                        value={this.state.tglLahir}
                        style={{ marginBottom: 5 }}
                    />
                    <Kaede
                        label={'Nomor  Telpon'}
                        underlineColorAndroid="transparent"
                        returnKeyType="done"
                        labelStyle={{ color: '#000' }}
                        inputStyle={{ backgroundColor: '#FFFFFF', color: '#000' }}
                        placeholderTextColor='#FFFFFF'
                        selectionColor='#FFFFFF'
                        onChangeText={(TextInputText) => this.setState({ noHp: TextInputText })}
                        value={this.state.noHp}
                        style={{ marginBottom: 5 }}
                    />
                    <Kaede
                        label={'Jenis Kelamin'}
                        underlineColorAndroid="transparent"
                        returnKeyType="done"
                        labelStyle={{ color: '#000' }}
                        inputStyle={{ backgroundColor: '#FFFFFF', color: '#000' }}
                        placeholderTextColor='#FFFFFF'
                        selectionColor='#FFFFFF'
                        onChangeText={(TextInputText) => this.setState({ jenisKelamin: TextInputText })}
                        value={this.state.jenisKelamin}
                        style={{ marginBottom: 5 }}
                    />
                    </KeyboardAvoidingView>
                </ScrollView>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={this.submitData}>
                    <Text style={styles.buttonText}>Tambah Nasabah</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default TambahNasabahScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#388e3c"
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "rgba(255,202,40, .9)",
    marginBottom:10,
  },
  logo: {
    flex: 0.15
  },
  judul: {
    flex: 0.85,
    justifyContent: "center",
    alignContent: "center"
  },
    button:
        {
            marginTop: 10,
            backgroundColor: '#00BCD4',
            marginBottom: 40,
            borderRadius: 7,
            paddingVertical: 10,
            marginHorizontal: 20,
        },

    buttonText:
        {
            color: '#fff',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold'
        },
});