import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView,
     Image, ScrollView, Alert } from "react-native";
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
    componentDidMount() {
        this.setState({
            nik: this.props.navigation.state.params.nik,
            nama: this.props.navigation.state.params.nama,
            alamat: this.props.navigation.state.params.alamat,
            noHp: this.props.navigation.state.params.noHp,
            tglLahir: this.props.navigation.state.params.tglLahir,
            jenisKelamin: this.props.navigation.state.params.jenisKelamin,

        })

    }
   
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
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
                <ScrollView style={{flex: 1,}}>
                    <View style={{ width: '100%', height: 30, backgroundColor: 'rgba(255,255,255, .5)'}}>
                        <Text style={styles.tulis}>NIK Nasabah : {this.state.nik}</Text>
                    </View>
                    <View style={{ width: '100%', height: 30, backgroundColor: 'rgba(255,255,255, .5)' }}>
                        <Text style={styles.tulis}>Nama Nasabah : {this.state.nama}</Text>
                    </View>
                    <View style={{ width: '100%', height: 30, backgroundColor: 'rgba(255,255,255, .5)' }}>
                        <Text style={styles.tulis}>Alamat Nasabah : {this.state.alamat}</Text>
                    </View>
                    <View style={{ width: '100%', height: 30, backgroundColor: 'rgba(255,255,255, .5)' }}>
                        <Text style={styles.tulis}>Tanggal Lahir : {this.state.tglLahir}</Text>
                    </View>
                    <View style={{ width: '100%', height: 30, backgroundColor: 'rgba(255,255,255, .5)' }}>
                        <Text style={styles.tulis}>No Telpn : {this.state.noHp}</Text>
                    </View>
                    <View style={{ width: '100%', height: 30, backgroundColor: 'rgba(255,255,255, .5)' }}>
                        <Text style={styles.tulis}>Jenis Kelamin : {this.state.jenisKelamin}</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={this.DeleteRecord}>
                    <Text style={styles.buttonText}>Hapus Nasabah</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
  button:{
    marginTop: 10,
    backgroundColor: '#00BCD4',
    marginBottom: 40,
    borderRadius: 7,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  tulis: {
      fontSize: 20,
      color: '#000'
  }
});