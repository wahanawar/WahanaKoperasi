import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, 
    KeyboardAvoidingView, Image, FlatList, RefreshControl } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Sae } from 'react-native-textinput-effects';

class NasabahScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
            ActivityIndicator_Loading: false,
        };
    }

    componentDidMount() {
        this.setState({ ActivityIndicator_Loading: true }, () => {
            this.setState({ refreshing: true });
            const url = "http://api.wahanawar.com/get_data.php";
            //this.setState({ loading: true });
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("comp");
                    console.log(responseJson);
                    this.setState({
                        data: responseJson,
                        error: responseJson.error || null,
                        loading: false,
                        refreshing: false,
                        ActivityIndicator_Loading: false,

                    });
                }
                );
        });
    }
    _keyExtractor = (item, index) => item.id;

    GetIDFunction = (nik, nama, alamat, tglLahir, noHp, jenisKelamin) => {

        this.props.navigation.navigate('Details', {

            nik: nik,
            nama: nama,
            alamat: alamat,
            tglLahir: tglLahir,
            noHp: noHp,
            jenisKelamin: jenisKelamin,
           

        });
    }
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
                        NASABAH</Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) =>

                        <TouchableOpacity activeOpacity={0.7} style={styles.row}
                            onPress={this.GetIDFunction.bind(this, item.nik, item.nama, item.alamat, 
                            item.tglLahir, item.noHp, item.jenis_kelamin,)} >

                            <View style={styles.iconContainer}>
                                <Image
                                    style={{ flex: 1, height: 60, width: 60, borderRadius: 6 }}
                                    resizeMode="contain"
                                />
                            </View>

                            <View style={styles.info}>
                                <Text style={styles.songTitle}>Nama Nasabah : {item.nama}</Text>
                                <Text style={styles.songDetails}>Alamat Nasabah : {item.alamat}</Text>
                                <Text style={styles.songDetails}>No Tlpn Nasabah : {item.noHp}</Text>
                            </View>

                        </TouchableOpacity>

                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.componentDidMount.bind(this)}
                        />
                    }
                />
            </KeyboardAvoidingView>
        );
    }
}
export default NasabahScreen;

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
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
    },
    icon: {
        color: '#fff',
        height: 30,
        width: 30,
        textAlign: 'center'
    },
    info: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 5,

    },
    songTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        color: '#000'
    },
    songDetails: {
        color: '#000',
        fontSize: 16,
    },
    row: {
        marginTop: 5,
        borderColor: 'rgba(0,0,0, .5)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: 'rgba(255,255,255, .5)'
    },
});