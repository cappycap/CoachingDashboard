import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { homeLight, colorsLight, innerDrawerLight } from '../Scripts/Styles.js';
import { homeDark, colorsDark, innerDrawerDark } from '../Scripts/Styles.js';
import { useLinkTo } from '@react-navigation/native';
import LoadingScreen from '../Scripts/LoadingScreen.js';
import { Helmet } from "react-helmet";

export default function BrandDesign() {
  const linkTo = useLinkTo();
  const [refreshing, setRefreshing] = useState(true);
  const [styles, setStyles] = useState(homeLight);

  useEffect(() => {
    console.log('Welcome to brand design.')
  },[])

  return (<ScrollView contentContainerStyle={{borderWidth:0,flex:1}}>
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.body}>
          <Text style={styles.h1}>Brand</Text>
        </View>
      </View>
    </View>
  </ScrollView>)

}
