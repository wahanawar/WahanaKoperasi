import React, { Component } from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import Icon from "react-native-ionicons";

import LoginScreen from "./src/login";
import HomeScreen from "./src/home";
import NasabahScreen from "./src/nasabah";
import TambahNasabahScreen from "./src/tambahUser";
import TambahTransaksiScreen from "./src/TambahTransaksi";
import DetailScreen from "./src/DetailNasabah";
import PeminjamanScreen from "./src/addDataPeminjaman";

export default class APP extends React.Component {
  render() {
    return (
       <AppRouter />
    )
  }
}

const LoginStack = StackNavigator({
  LoginScreen: {screen: LoginScreen},
},{
  navigationOptions: {
    header: null,
  }
});

const HomeStack = StackNavigator({
  HomeScreen: {screen: HomeScreen},
}, {
  navigationOptions: {
    header: null,
  }
});

const NasabahStack = StackNavigator({
  NasabahScreen: {screen: NasabahScreen},
  Details: {screen: DetailScreen},
},{
  navigationOptions:{
    header: null,
  }
});
const TambahNasabahStack = StackNavigator({
  TambahNasabahScreen: { screen: TambahNasabahScreen },
}, {
    navigationOptions: {
      header: null,
    }
  });
const TambahTransaksiStack = StackNavigator({
  TambahTransaksiScreen: { screen: TambahTransaksiScreen },
  addPeminjamanScreen : {screen: PeminjamanScreen},

}, {
    navigationOptions: {
      header: null,
    }
  });

const ScreenTabs = TabNavigator(
  {
    Home: { screen: HomeStack },
    Nasabah: { screen: NasabahStack },
    Transaksi : {screen: TambahTransaksiStack},
    Baru : {screen: TambahNasabahStack},
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "md-home";
        } else if (routeName === "Nasabah") {
          iconName = "md-people";
        } else if (routeName === "Transaksi") {
          iconName = "md-add";
        } else if (routeName === "Baru") {
          iconName = "md-person-add";
        }
        return <Icon android={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#00BCD4"
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);

  export const AppRouter = StackNavigator(
    {
      Login : {screen: LoginStack},
      Tabs : {screen: ScreenTabs},
    },
    {
      navigationOptions: 
      {
        header: null,
        gesturesEnabled: false
      }
    }
  );