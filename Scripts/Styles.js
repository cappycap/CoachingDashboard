import { Dimensions, Appearance, StyleSheet } from 'react-native';
import { set, get, getTTL, ttl } from '../Scripts/Storage.js'

// Unchanging stylesheets and elements.
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const navLogo = require('../assets/nav-logo.png');

export const bold = {
  fontFamily:'PoppinsSemiBold'
}

export const btnColors = {
  primary:'#3498db',
  caution:'#f1c40f',
  danger:'#e74c3c',
  success:'#2ecc71',
  info:'#41C3E0',
}

export const boxColors = {
  primary:'#38A2E8',
  caution:'#FFCF0F',
  danger: '#F55240',
  success:'#32D977',
  info:'#48dbfb',
}

var coach = get('Coach')
if (coach == null) {
  coach = {}
  coach.PrimaryHighlight = '#2ecc71'
  coach.SecondaryHighlight = '#27ae60'
}

export const colorsLight = {
  primaryHighlight: coach.PrimaryHighlight,
  secondaryHighlight: coach.SecondaryHighlight,
  secondaryBackground: '#ecf0f1', // clouds
  mainTextColor: '#23272a', // darkGray
  secondaryTextColor: '#344150', // blueGray
  mainBackground: '#ffffff', // white
}

export const messageBox = StyleSheet.create({
  errorBox: {
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:boxColors.danger,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    borderRadius:10,
  },
  icon: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    flex:6,
    fontSize:14,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  }
});
// Dynamic spreadsheets and elements.

export const logoLight = require('../assets/coachsync-logo-light.png');

export const overviewLight = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsLight.mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color:colorsLight.darkGray
  }
});

export const welcomeLight = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderLeftWidth:10,
    borderLeftColor:colorsLight.secondaryHighlight,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  login: {
    flex:1,
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:10,
    paddingTop:10,
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colorsLight.mainBackground
  },
  features: {
    flex:2,
    height:'100%',
    backgroundColor:colorsLight.secondaryBackground
  },
  logoContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  logo: {
    width:120,
    height:60
  },
  form: {
    flex:1000,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  title: {
    color:colorsLight.mainTextColor,
    fontSize:40,
    width:'100%',
    fontFamily:'Poppins'
  },
  subtitle: {
    color:colorsLight.mainTextColor,
    fontSize:18,
    width:'100%',
    marginBottom:25,
  },
  link: {
    color:btnColors.primary,
    fontSize:18,
    textDecorationLine: 'underline',
  },
  linkBlend: {
    color:colorsLight.mainTextColor,
    fontSize:14,
    textDecorationLine: 'underline',
  },
  inputLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    width:'100%',
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    height:38,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  submitButton: {
    fontFamily:'Poppins'
  },
  submitButtonContainer: {
    marginTop:20,
    width:'100%',
    backgroundColor:btnColors.primary,
    borderRadius:10,
  }
});

export const signUpLight = StyleSheet.create({
  container: {
    backgroundColor:colorsLight.secondaryBackground,
    alignItems:'center',
    borderLeftWidth:20,
    borderLeftColor:colorsLight.secondaryHighlight,
    borderRightColor:colorsLight.secondaryHighlight,
    borderRightWidth:20,
  },
  main: {
    flexDirection:'row',
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:10,
    paddingTop:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  logoContainer: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  pricingTitle: {
    fontSize:40,
    textAlign:'center',
    fontFamily:'Poppins',
    flex: 1, flexWrap: 'wrap'
  },
  pricingIntro: {
    fontSize:20,
    marginBottom:5,
    textAlign:'center',
    fontFamily:'Poppins',
    flex: 1,
    flexWrap: 'wrap'
  },
  pricingCards: {
    flex:1,
    marginTop:5,
    justifyContent:'center',
    alignItems:'center'
  },
  pricingCardContainer: {
    width:350,

    justifyContent:'center'
  },
  pricingHighlight: {
    textAlign:'center',
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
    color:colorsLight.secondaryTextColor
  },
  pricingCardContainerMiddle: {
    width:400,
    marginTop:0,
    padding:50
  },
  logo: {
    width:280,
    marginTop:15,
    height:140
  },
  form: {
    flex:1000,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  title: {
    color:colorsLight.mainTextColor,
    fontSize:40,
    textAlign:'center',
    width:'100%',
    fontFamily:'Poppins'
  },
  subtitle: {
    color:colorsLight.mainTextColor,
    fontSize:18,
    textAlign:'center',
    width:'100%',
    marginBottom:25,
  },
  link: {
    color:btnColors.primary,
    fontSize:18,
    textDecorationLine: 'underline',
  },
  linkBlend: {
    color:colorsLight.mainTextColor,
    fontSize:14,
    textDecorationLine: 'underline',
  },
  formRow: {
    alignItems:'center',
    justifyContent:'center'
  },
  inputLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    width:'100%',
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:10,
    height:46,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  formColumn: {
    margin:10,
    width:350,
  },
  submitButton: {
    fontFamily:'Poppins'
  },
  submitButtonContainer: {
    marginTop:20,
    width:400,
    backgroundColor:btnColors.primary,
    borderRadius:10,
  },
  backContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:20
  },
  iconStyle: {
    flex:1
  },
  backText: {
    fontSize:20,
    textAlign:'center',
    fontFamily:'Poppins',
    width:100,
    flexWrap: 'wrap'
  },
});
