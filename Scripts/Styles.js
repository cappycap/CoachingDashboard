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
  lightBackground: '#FAFAFA',
}

export const messageColorsLight = {
  me:'#3498db',
  them:'#ffffff'
}

export const boxColors = {
  primary:'#38A2E8',
  caution:'#FFCF0F',
  danger: '#fb7161',
  success:'#27ae60',
  info:'#48dbfb',
  default:'#FAFAFA'
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
  secondaryBackground: '#ebeef6', // clouds
  mainTextColor: '#23272a', // darkGray
  secondaryTextColor: '#344150', // blueGray
  mainBackground: '#ffffff', // white
  header: '#FAFAFA',
  headerDarker: '#EDEDED',
  headerBorder: '#ebeef6',
}

export const messageBox = StyleSheet.create({
  errorBox: {
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:boxColors.danger,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    borderRadius:10,
  },
  box: {
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    flex:1,
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
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  }
});


export const logoLight = require('../assets/coachsync-logo-light.png');

// Dynamic spreadsheets and elements.

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
  mainContainer: {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    width:'100%',
    borderLeftWidth:10,
    borderLeftColor:colorsLight.secondaryHighlight,
    borderRightColor:colorsLight.secondaryHighlight,
    borderRightWidth:10,
  },
  container: {
    backgroundColor:colorsLight.secondaryBackground,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    width:'100%',
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
    fontSize:18,
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
    height:440,
    justifyContent:'center'
  },
  prevPriceHeight: {
    height:55
  },
  pricingHighlight: {
    textAlign:'center',
    fontFamily:'PoppinsSemiBold',
    fontSize:30,
    color:colorsLight.secondaryTextColor,
  },
  pricingCardContainerMiddle: {
    width:400,
    marginTop:0,
    padding:20
  },
  logo: {
    width:120,
    marginTop:10,
    height:60
  },
  form: {
    flex:1000,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginBottom:20,
    flexShrink:1
  },
  title: {
    color:colorsLight.mainTextColor,
    fontSize:35,
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
  formColumn: {
    margin:10,
    width:350,
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
  submitButton: {
    fontFamily:'Poppins'
  },
  submitButtonContainer: {
    marginTop:20,
    width:400,
    backgroundColor:btnColors.primary,
    borderRadius:10,
  },
  paymentFormContainer: {
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
  },
  backContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
  },
  iconStyle: {
    marginRight:5,
  },
  backText: {
    fontSize:20,
    textAlign:'left',
    flex:1,
    fontFamily:'Poppins',
    width:100,
    flexWrap: 'wrap'
  },
  paymentForm: {
    width:'100%',
    backgroundColor:colorsLight.mainBackground,
    flexDirection:'row'
  },
  paymentInfo: {
    flex:7,
    padding:20,
    backgroundColor:colorsLight.secondaryHighlight
  },
  paymentMain: {
    flex:6,
    padding:50,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  previousPriceContainer: {
    backgroundColor:boxColors.danger,
    width:200,
    marginLeft:15,
    borderRadius:10,
    padding:5,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  previousPriceInner: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  discountDesc: {
    color:'#ffffff',
    fontSize:20,
  },
  previousPrice: {
    fontSize:26,
    color:'#ffffff',
    textDecorationLine:'line-through'
  },
  previousPriceDiscount: {
    fontSize:20,
    marginLeft:5,
    color:'#ffffff'
  },
  activeDiscountDesc: {
    textAlign:'center',
    marginTop:5,
    fontSize:16,
    color:colorsLight.secondaryTextColor
  },
  timeLeft: {
    fontSize:22,
    marginBottom:5,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  countdown: {
    fontSize:22,
    fontFamily:'Poppins',
    color:btnColors.danger
  },
  priceBottomText: {
    fontSize:20,
    textAlign:'center',
    color:colorsLight.secondaryTextColor,
    marginBottom:10
  },
  toggleAnnual: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  groupButton: {
    width:200,
    height:40
  },
  paymentSubmitButton: {
    margin:0,
    backgroundColor:btnColors.primary,
  },
  paymentSubmitButtonContainer: {
    margin:10,
    paddingLeft:0,
    paddingRight:0,
  },
  paymentItem: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  paymentItemTitle: {
    color:'#fff',
    fontFamily:'PoppinsSemiBold',
    fontSize:24
  },
  paymentItemMemo: {
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:14
  },
  paymentItemAmount: {
    justifyContent:'center',
    alignItems:'center'
  },
  paymentDiscountAmount: {
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:14,
    textDecorationLine:'line-through'
  },
  paymentPrimaryAmount: {
    color:'#fff',
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  paymentIcon: {
    alignItems:'flex-start',
    justifyContent:'center'
  },
  paymentEnterInfo: {
    marginTop:30,
    marginBottom:30
  },
  paymentCardBack: {
    flexDirection:'row'
  },
  paymentStripe: {
    width:150,
    height:34,
    alignSelf:'flex-end'
  },
  stripeSection: {
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  inputCardName: {
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderWidth:1,
    fontSize:16,
    color:colorsLight.mainTextColor,
    borderColor:colorsLight.secondaryBackground,
    padding:15,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    fontWeight:'1000',
  },
  cardWrapper: {
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:colorsLight.secondaryBackground,
    padding:15,
    marginLeft:10,
    marginRight:10,
    marginBottom:10
  },
  paymentBottomText: {
    textAlign:'center',
    color:colorsLight.mainTextColor,
    fontSize:12
  },
  congratsContainer: {
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    width:400
  },
  congratsHeader: {
    backgroundColor:colorsLight.secondaryHighlight,
    height:80,
  },
  congratsBody: {
    padding:20
  },
  congratsIcon: {
    width:100,
    height:100,
    position:'absolute',
    top:-50,
    left:150,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:colorsLight.mainBackground,
    borderWidth:2,
    borderRadius:100,
    borderColor:colorsLight.secondaryBackground
  },
  congratsTitle: {
    marginTop:40,
    fontFamily:'Poppins',
    fontSize:26,
    textAlign:'center',
    color:colorsLight.mainTextColor
  },
  congratsText: {
    fontFamily:'Poppins',
    fontSize:14,
    textAlign:'center',
    color:colorsLight.mainTextColor
  },
  congratsButton: {
    borderRadius:100,
    backgroundColor:colorsLight.secondaryHighlight,
  },
  congratsButtonContainer: {
    width:'50%',
    marginTop:20,
    marginLeft:'25%'
  },
  popup: {
    width:300,
    height:150,
    padding:10,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    borderWidth:2,
    borderColor:colorsLight.headerBorder,
    justifyContent:'center'
  },
  popupText: {
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    fontSize:18,
    textAlign:'center'
  },
  popupButtons: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  popupConfirm: {
    backgroundColor:btnColors.success,
    padding:5,
    borderRadius:10,
    marginRight:10,
  },
  popupCancel: {
    backgroundColor:colorsLight.secondaryBackground,
    padding:5,
    borderRadius:10,
    marginLeft:10
  },
  popupButtonTitle: {
    color:'#fff',
    fontSize:18,
    fontFamily:'Poppins'
  },
  popupButtonContainer: {
    flex:1
  }
});

export const drawerLight = StyleSheet.create({
  drawer: {
    backgroundColor:colorsLight.secondaryHighlight,
    padding:0,
    margin:0,
    width:80,
    borderWidth:0,
  },
  drawerItem: {
    padding:0,
    margin:0,
    backgroundColor:'',
    borderWidth:0,
  },
  header: {
    width:'100%',
    flexDirection:'row',
    backgroundColor:colorsLight.mainBackground
  },
  headerLogoContainer: {
    width:80,
    borderRightColor:colorsLight.mainBackground,
    borderRightWidth:1,
    backgroundColor:colorsLight.secondaryHighlight,
  },
  headerLogo: {
    width:80,
    height:80,
    tintColor:colorsLight.mainBackground,
  },
  headerTextContainer: {
    width:200,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  headerText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:19,
    textAlign:'center',
    lineHeight:25,
    marginRight:3,
  },
  headerBeta: {
    fontFamily:'PoppinsSemiBold',
    color:'#fff',
    backgroundColor:btnColors.danger,
    borderRadius:10,
    paddingTop:1,
    paddingBottom:1,
    paddingLeft:5,
    paddingRight:5,
    fontSize:16
  },
  headerMain: {
    flex:1,
    backgroundColor:colorsLight.header,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  headerUser: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    height:80
  },
  headerIcon: {
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    padding:5,
    width:40,
    height:40,
    borderRadius:10,
    backgroundColor:colorsLight.secondaryBackground
  },
  headerUserBox: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    paddingRight:10,
    width:200,
  },
  headerUserBoxText: {
    justifyContent:'center',
    alignItems:'left',
    height:40
  },
  headerUserName: {
    fontSize:14,
    lineHeight:14,
    fontFamily:'PoppinsSemiBold'
  },
  headerPlan: {
    fontSize:12,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  headerAvatar: {
    width:40,
    height:40,
    borderRadius:10,
    backgroundColor:colorsLight.secondaryBackground,
    marginRight:10,
  },
  messagesContainer: {
    width:80,
    height:80,
    backgroundColor:colorsLight.header,
    borderLeftColor:colorsLight.headerBorder,
    borderLeftWidth:1,
    justifyContent:'center',
    alignItems:'center'
  },
  dropdownBox: {
    padding:15,
    position:'absolute',
    right:20,
    top:70,
    width:200,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    borderWidth:1,
    borderColor:colorsLight.headerBorder
  },
  dropdownBoxText: {
    fontFamily:'Poppins',
    fontSize:14,
    paddingBottom:4,
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1,
    color:colorsLight.mainTextColor
  },
  dropdownBoxLogoutContainer: {
    paddingTop:4,
    flexDirection:'row',
    alignItems:'center'
  },
  dropdownBoxLogout: {
    fontFamily:'Poppins',
    fontSize:14,
    color:btnColors.danger,
    marginLeft:3
  },
})

export const innerDrawerLight = StyleSheet.create({
  drawer: {
    backgroundColor:colorsLight.mainBackground,
    height:'100%',
    width:200,
  },
  drawerTop: {
    backgroundColor:colorsLight.mainBackground,
    width:200,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:23,
    height:60,
    paddingBottom:0,
  },
  drawerTopTitle: {
    fontSize:22,
    fontFamily:'PoppinsSemiBold',
    borderBottomWidth:2,
    color:colorsLight.mainTextColor,
    borderBottomColor:colorsLight.mainTextColor
  },
  pageInfo: {
    width:200,
    borderTopWidth:2,
    borderTopColor:colorsLight.headerBorder,
    marginTop:'auto',
    padding:10,
  },
  pageInfoHeader: {
    flexDirection:'row',
    alignItems:'center',
  },
  pageInfoHeaderText: {
    fontFamily:'Poppins',
    fontSize:18,
    marginLeft:6,
    color:colorsLight.mainTextColor
  },
  pageInfoBody: {
    padding:3,
  },
  pageInfoBodyText: {
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor
  }

})

export const homeLight = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:0,
  },
  main: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:0,
  },
  body: {
    flex:4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:0,
  },
  h1: {
    color:colorsLight.darkGray
  },

});

export const promptsLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyHeaderNav: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  bodyHeaderNavLink: {
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Poppins',
    fontSize:14
  },
  promptListContainer: {
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  promptHeader: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingBottom:5
  },
  promptHeaderTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
    paddingLeft:5,
    paddingRight:10,
  },
  promptHeaderCount: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16
  },
  promptsRow: {
    paddingTop:10,
    flexDirection:'row'
  },
  addPromptContainer: {
    width:200,
    height:200,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    backgroundColor:colorsLight.header,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },
  promptAddButtonTitle: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  promptAddButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  promptAddButtonContainer: {
    width:'70%'
  },
  innerRow: {
    flexDirection:'row',
    marginBottom:10
  },
  taskBox: {
    width:200,
    height:200,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    borderRadius:10,
    overflow:'hidden',
    marginRight:10
  },
  taskPreview: {
    flex:1,
  },
  taskPreviewHeader: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  taskPreviewHeaderIcon: {
    padding:10,
    borderRightColor:colorsLight.headerBorder,
    borderRightWidth:1
  },
  taskPreviewTitle: {
    flex:1,
    marginLeft:10,
    fontSize:13,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold'
  },
  taskPreviewText: {
    fontSize:14,
    padding:10,
    color:colorsLight.mainTextColor,
    textAlign:'left',
    fontFamily:'Poppins'
  },
  taskWarningText: {
    fontSize:14,
    padding:10,
    color:btnColors.danger,
    textAlign:'center',
    fontFamily:'Poppins'
  },
  taskButtons: {
    flexDirection:'row'
  },
  taskButtonTop: {
    width:'100%',
    borderTopWidth:1,
    borderTopColor:colorsLight.headerBorder,
    padding:1,
    backgroundColor:colorsLight.header
  },
  taskButtonLeft: {
    flex:1,
    borderTopWidth:1,
    borderRightWidth:0.5,
    borderTopColor:colorsLight.headerBorder,
    borderRightColor:colorsLight.headerBorder,
    padding:10,
    backgroundColor:btnColors.info
  },
  taskButtonRight: {
    flex:1,
    borderTopWidth:1,
    borderLeftWidth:0.5,
    borderTopColor:colorsLight.headerBorder,
    borderLeftColor:colorsLight.headerBorder,
    padding:10,
    backgroundColor:btnColors.danger
  },
  taskButtonText: {
    color:'#ffffff',
    fontSize:14,
    fontFamily:'Poppins',
    textAlign:'center'
  },
  helpBox: {
    width:400,
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  helpBoxText: {
    fontFamily:'Poppins',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  helpBoxError: {
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  standardPlanText: {
    color:btnColors.success,
  },
  proPlanText: {
    color:btnColors.danger
  },
  newPromptContainer: {
    padding:20,
    borderRadius:10,
    marginBottom:20,
    backgroundColor:colorsLight.mainBackground,
  },
  newPromptHeader: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder
  },
  newPromptDescTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
    paddingLeft:5,
    paddingRight:10,
  },
  newPromptBody: {
    padding:10,
  },
  newPromptForm: {
    flex:3,
  },
  newPromptVideoSection: {
    flex:2,
    paddingLeft:10,
    paddingRight:10,
    marginLeft:10,
  },
  newPromptTitleLabel: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  newPromptVideoEmpty: {
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  newPromptVideoEmptyText: {
    fontSize:16,
    fontFamily:'Poppins',
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  newPromptFooter: {
    flex:1,
  },
  newPromptAddButtonTitle: {
    fontSize:16,
    fontFamily:'Poppins'
  },
  newPromptAddButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  newPromptAddButtonContainer: {
    width:'60%',
    paddingLeft:10,
    paddingRight:20
  },
  showVideoOptions: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  showVideoOptionsChooseUpload: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    width:'40%',
    height:200,
    marginRight:10
  },
  showVideoOptionsChooseUploadTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showVideoOptionsChooseUploadTypes: {
    fontFamily:'Poppins',
    fontSize:14,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showVideoOptionsChooseUploadSize: {
    fontFamily:'Poppins',
    fontSize:14,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showVideoOptionsChooseYouTube: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    width:'40%',
    height:200,
    marginLeft:10
  },
  selectUploadContainer: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  uploadProgressTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor,
    textAlign:'center',
    marginBottom:10,
    marginTop:20
  },
  uploadInputStyle: {
    marginBottom:10
  },
  uploadFileTitle: {
    fontSize:16,
    fontFamily:'Poppins',
  },
  uploadFileTitleButton: {
    marginTop:10,
    backgroundColor:btnColors.success,
    borderRadius:50,
    padding:10,
  },
  uploadFileTitleButtonContainer: {
    padding:5,
  },
  videoError: {
    fontSize:14,
    fontFamily:'Poppins',
    color:btnColors.danger,
    textAlign:'center'
  },
  reactPlayerContainer: {
    width:500,
    height:280,
    aspectRatio:16/9,
  },
  viewPromptBodyText: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  newPromptBodyLeft: {
    flex:1,
  },
  videoGoBack: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    marginTop:10
  },
  videoGoBackText: {
    fontFamily:'Poppins',
    fontSize:20,
    color:colorsLight.mainTextColor
  },
  youTubeSection: {
  },
  noPromptResponses: {
    fontFamily:'Poppins',
    fontSize:18,
    color:colorsLight.mainTextColor,
    marginTop:10,
    marginLeft:5
  },
  addSurveyBody: {
    flexDirection:'row',
    marginBottom:20,
    borderLeftColor:colorsLight.headerBorder,
    borderRightColor:colorsLight.headerBorder,
    borderBottomColor:colorsLight.headerBorder,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1
  },
  addSurveyListContainer: {
    flex:2,
    backgroundColor:colorsLight.header,
    borderRightWidth:1,
    borderRightColor:colorsLight.headerBorder,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  addSurveyListButton: {
    borderRadius:50
  },
  addSurveyListButtonContainer: {
    padding:20,
  },
  addSurveyListDropdown: {
    position:'absolute',
    width:'80%',
    backgroundColor:colorsLight.mainBackground,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    borderRadius:10,
    padding:10,
    left:'10%',
    top:60,
  },
  addSurveyListDropdownTouch: {
    paddingLeft:10,
    paddingTop:4,
    paddingBottom:4,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    cursor:'pointer'
  },
  addSurveyListDropdownTouchBottom: {
    paddingLeft:10,
    paddingTop:4,
    paddingBottom:4,
    cursor:'pointer'
  },
  addSurveyListDropdownText: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  addSurveyList: {
    justifyContent:'flex-start',
    flex:5,
  },
  programTask: {
    backgroundColor:colorsLight.mainBackground,
    flexDirection:'row',
    marginBottom:10,
    borderTopColor:colorsLight.headerBorder,
    borderBottomColor:colorsLight.headerBorder,
    borderTopWidth:2,
    borderBottomWidth:2
  },
  programTaskMain: {
    flex:1,
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    cursor:'pointer'
  },
  programTaskIcon: {
    marginRight:15,
  },
  programTaskTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  programTaskNav: {
    width:40,
    justifyContent:'space-between',
    paddingTop:4,
    paddingBottom:4
  },
  planRequiredText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:12,
    color:colorsLight.mainTextColor,
  },
  addSurveyMainContainer: {
    flex:3,
    minHeight:300,
    alignItems:'center',
    justifyContent:'center',
  },
  addSurveyMainHelpText: {
    fontSize:16,
    fontFamily:'Poppins',
    textAlign:'center',
    color:colorsLight.mainTextColor
  },
  addSurveyMain: {
    flex:1,
    width:'100%',
    padding:20,
  },
  addSurveyMainHeader: {
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1,
    paddingBottom:10,
    paddingLeft:5,
    paddingRight:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  addSurveyMainHeaderLeft: {
    flexDirection:'row',
    flex:3,
    alignItems:'center'
  },
  addSurveyMainHeaderRight: {
    justifyContent:'center',
    flex:1,
    cursor:'pointer'
  },
  addSurveyMainHeaderDelete: {
    color:btnColors.danger,
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'right',
  },
  addSurveyMainHeaderTaskText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    textAlign:'left',
    marginRight:10,
  },
  addSurveyMainHeaderTitle: {
    fontFamily:'Poppins',
    fontSize:22,
    textAlign:'left'
  },
  addSurveyMainBody: {
    paddingTop:15,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  addSurveyMainSearch: {
    zIndex:999
  },
  chosenTask: {
    flex:1,
    marginLeft:20,
  },
  chosenTaskTitle: {
    fontSize:22,
    marginTop:10,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor
  },
  chosenTaskText: {
    fontSize:16,
    fontFamily:'Poppins',
    marginTop:5,
    color:colorsLight.mainTextColor
  },
  searchTaskText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    color:colorsLight.mainTextColor,
  },
  addSurveyFooter: {
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:colorsLight.headerBorder,
  },
  surveyTaskQuestion: {
    fontFamily:'Poppins',
    fontSize:12,
    color:colorsLight.mainTextColor
  },
  inputSliderInfoRange: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
  },
  inputSliderInfoRangeSpacer: {
    padding:10,
  },
  dropdownContainer: {
    padding:5,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10
  },
  inputSliderTextContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
  },
  inputSliderNumDisplay: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:colorsLight.mainTextColor,
    textAlign:'center',
    height:30,
    width:30,
    marginRight:10
  },
  inputSliderTextTitle: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    color:colorsLight.mainTextColor,
  },
  inputSliderTextLabel: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:14,
    borderRadius:10,
    padding:10,
    backgroundColor:colorsLight.secondaryBackground
  },
  surveyBoxes: {
    justifyContent:'flex-start',
    alignItems:'center',
    flex:1,
    marginBottom:10
  },
  boxItem: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    paddingTop:15,
    marginBottom:10,
    borderTopWidth:1,
    borderTopColor:colorsLight.headerBorder
  },
  boxItemInput: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'50%',
    fontFamily:'Poppins',
    fontSize:14,
  },
  boxItemNav: {
    backgroundColor:colorsLight.mainBackground,
    marginRight:10
  },
  responseRow: {
    flexDirection:'column',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1,
    backgroundColor:colorsLight.secondaryBackground
  },
  responseClientInfo: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    backgroundColor:colorsLight.header
  },
  responseClientInfoInner: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  responseClientText: {
    fontSize:18,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    marginLeft:10,
  },
  responseClientCreated: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
  },
  responseTextInfo: {
    padding:5
  },
  responseText: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
  },
  surveyResponseContainer: {
    padding:5,
  },
  surveyQuestion: {
    fontSize:20,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  surveyResponseText: {
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
  },
  sliderThumb: {
    width:10,
    height:10,
    backgroundColor:colorsLight.primaryHighlight
  },
  sliderRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  sliderInfo: {
    alignItems:'center',
    justifyContent:'center',
    padding:5
  },
  sliderLeftVal: {
    fontSize:18,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  sliderDesc: {
    fontSize:14,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  sliderVal: {
    fontSize:18,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  sliderResponse: {
    fontSize:14,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  surveyBoxRow: {
    flexDirection:'row',
    alignItems:'center',
    padding:5
  },
  boxText: {
    fontSize:18,
    fontFamily:'Poppins',
    marginLeft:10,
    color:colorsLight.mainTextColor,
  },
  surveyDataRow: {
    marginBottom:10
  },
  sliderOuter: {
    flex:1,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    overflow:'hidden'
  },
  sliderInner: {
    height:'100%',
    padding:10,
    justifyContent:'center',
    backgroundColor:colorsLight.secondaryHighlight
  },
  sliderInnerText: {
    fontFamily:'Poppins',
    textAlign:'right',
    fontSize:16,
    color:'#fff'
  },
  newContractContainer: {
    padding:20,
    borderRadius:10,
    marginBottom:20,
    backgroundColor:colorsLight.mainBackground,
  },
  newContractHeader: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder
  },
  newContractDescTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
    paddingLeft:5,
    paddingRight:10,
  },
  viewContractInfo: {
    width:632,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  newContractBody: {
    padding:10,
    flex:1
  },
  newContractBodyView: {
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:'25%',
    paddingRight:'25%',
    flex:1
  },
  pdfNav: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    flex:1,
    marginBottom:10
  },
  newContractBodyPDF: {
    padding:10,
    marginTop:10,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    width:632
  },
  newContractVideoSection: {
    flex:2,
    paddingLeft:10,
    paddingRight:10,
    marginLeft:10,
  },
  newContractTitleLabel: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  newContractVideoEmpty: {
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  newContractVideoEmptyText: {
    fontSize:16,
    fontFamily:'Poppins',
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  newContractFooter: {
    flex:1,
  },
  newContractAddButtonTitle: {
    fontSize:16,
    fontFamily:'Poppins'
  },
  newContractAddButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  newContractAddButtonContainer: {
    width:'60%',
    paddingLeft:10,
    paddingRight:20,
    marginTop:20
  },
  showContractOptionsChooseUpload: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    height:250,
    width:'100%',
    marginTop:10,
    marginRight:10
  },
  showContractOptionsChooseUploadTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showContractOptionsChooseUploadTypes: {
    fontFamily:'Poppins',
    fontSize:14,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showContractOptionsChooseUploadSize: {
    fontFamily:'Poppins',
    fontSize:14,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  uploadFileTitleButton: {
    backgroundColor:btnColors.success,
    borderRadius:50,
    padding:10,
  },
  uploadFileTitleButtonContainer: {
    padding:5
  }
});

export const conceptsLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyHeaderNav: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  bodyHeaderNavLink: {
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Poppins',
    fontSize:14
  },
  conceptListContainer: {
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  conceptHeader: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingBottom:5
  },
  conceptHeaderTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
    paddingLeft:5,
    paddingRight:10,
  },
  conceptHeaderCount: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16
  },
  conceptsRow: {
    paddingTop:10,
    flexDirection:'row'
  },
  addConceptContainer: {
    width:200,
    height:200,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    backgroundColor:colorsLight.header,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },
  conceptAddButtonTitle: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  conceptAddButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  conceptAddButtonContainer: {
    width:'70%'
  },
  innerRow: {
    flexDirection:'row',
    marginBottom:10
  },
  taskBox: {
    width:200,
    height:200,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    borderRadius:10,
    overflow:'hidden',
    marginRight:10
  },
  taskPreview: {
    flex:1,
  },
  taskPreviewHeader: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  taskPreviewHeaderIcon: {
    padding:10,
    borderRightColor:colorsLight.headerBorder,
    borderRightWidth:1
  },
  taskPreviewTitle: {
    flex:1,
    marginLeft:10,
    fontSize:13,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold'
  },
  taskPreviewText: {
    fontSize:14,
    padding:10,
    color:colorsLight.mainTextColor,
    textAlign:'left',
    fontFamily:'Poppins'
  },
  taskWarningText: {
    fontSize:14,
    padding:10,
    color:btnColors.danger,
    textAlign:'center',
    fontFamily:'Poppins'
  },
  taskButtons: {
    flexDirection:'row'
  },
  taskButtonTop: {
    width:'100%',
    borderTopWidth:1,
    borderTopColor:colorsLight.headerBorder,
    padding:1,
    backgroundColor:colorsLight.header
  },
  taskButtonLeft: {
    flex:1,
    borderTopWidth:1,
    borderRightWidth:0.5,
    borderTopColor:colorsLight.headerBorder,
    borderRightColor:colorsLight.headerBorder,
    padding:10,
    backgroundColor:btnColors.info
  },
  taskButtonRight: {
    flex:1,
    borderTopWidth:1,
    borderLeftWidth:0.5,
    borderTopColor:colorsLight.headerBorder,
    borderLeftColor:colorsLight.headerBorder,
    padding:10,
    backgroundColor:btnColors.danger
  },
  taskButtonText: {
    color:'#ffffff',
    fontSize:14,
    fontFamily:'Poppins',
    textAlign:'center'
  },
  helpBox: {
    width:400,
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  helpBoxText: {
    fontFamily:'Poppins',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  helpBoxError: {
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  standardPlanText: {
    color:btnColors.success,
  },
  proPlanText: {
    color:btnColors.danger
  },
  newConceptContainer: {
    padding:20,
    borderRadius:10,
    marginBottom:20,
    backgroundColor:colorsLight.mainBackground,
  },
  newConceptHeader: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom:5,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder
  },
  newConceptDescTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
    paddingLeft:5,
    paddingRight:10,
  },
  newConceptBody: {
    flexDirection:'row',
    padding:10,
  },
  newConceptForm: {
    flex:3,
  },
  newConceptVideoSection: {
    flex:2,
    paddingLeft:10,
    paddingRight:10,
    marginLeft:10,
  },
  newConceptTitleLabel: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  newConceptVideoEmpty: {
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  newConceptVideoEmptyText: {
    fontSize:16,
    fontFamily:'Poppins',
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  newConceptFooter: {
    flex:1,
  },
  newConceptAddButtonTitle: {
    fontSize:16,
    fontFamily:'Poppins'
  },
  newConceptAddButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  newConceptAddButtonContainer: {
    width:'60%',
    paddingLeft:10,
    paddingRight:20
  },
  showVideoOptions: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  showVideoOptionsChooseUpload: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    width:'40%',
    height:200,
    marginRight:10
  },
  showVideoOptionsChooseUploadTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showVideoOptionsChooseUploadTypes: {
    fontFamily:'Poppins',
    fontSize:14,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showVideoOptionsChooseUploadSize: {
    fontFamily:'Poppins',
    fontSize:14,
    textAlign:'center',
    color:colorsLight.secondaryTextColor
  },
  showVideoOptionsChooseYouTube: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    width:'40%',
    height:200,
    marginLeft:10
  },
  selectUploadContainer: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  uploadProgressTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor,
    textAlign:'center',
    marginBottom:10,
    marginTop:20
  },
  uploadInputStyle: {
    marginBottom:10
  },
  uploadFileTitle: {
    fontSize:16,
    fontFamily:'Poppins',
  },
  uploadFileTitleButton: {
    marginTop:10,
    backgroundColor:btnColors.success,
    borderRadius:50,
    padding:10,
  },
  uploadFileTitleButtonContainer: {
    padding:5,
  },
  videoError: {
    fontSize:14,
    fontFamily:'Poppins',
    color:btnColors.danger,
    textAlign:'center'
  },
  reactPlayerContainer: {
    width:500,
    height:280,
    aspectRatio:16/9,
  },
  viewConceptBodyText: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  newConceptBodyLeft: {
    flex:1,
  },
  videoGoBack: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    marginTop:10
  },
  videoGoBackText: {
    fontFamily:'Poppins',
    fontSize:20,
    color:colorsLight.mainTextColor
  },
  youTubeSection: {
  },
  noConceptResponses: {
    fontFamily:'Poppins',
    fontSize:18,
    color:colorsLight.mainTextColor,
    marginTop:10,
    marginLeft:5
  },
  addSurveyBody: {
    flexDirection:'row',
    marginBottom:20,
    borderLeftColor:colorsLight.headerBorder,
    borderRightColor:colorsLight.headerBorder,
    borderBottomColor:colorsLight.headerBorder,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1
  },
  addSurveyListContainer: {
    flex:2,
    backgroundColor:colorsLight.header,
    borderRightWidth:1,
    borderRightColor:colorsLight.headerBorder,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  addSurveyListButton: {
    borderRadius:50
  },
  addSurveyListButtonContainer: {
    padding:20,
  },
  addSurveyListDropdown: {
    position:'absolute',
    width:'80%',
    backgroundColor:colorsLight.mainBackground,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    borderRadius:10,
    padding:10,
    left:'10%',
    top:60,
  },
  addSurveyListDropdownTouch: {
    paddingLeft:10,
    paddingTop:4,
    paddingBottom:4,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    cursor:'pointer'
  },
  addSurveyListDropdownTouchBottom: {
    paddingLeft:10,
    paddingTop:4,
    paddingBottom:4,
    cursor:'pointer'
  },
  addSurveyListDropdownText: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  addSurveyList: {
    justifyContent:'flex-start',
    flex:5,
  },
  programTask: {
    backgroundColor:colorsLight.mainBackground,
    flexDirection:'row',
    marginBottom:10,
    borderTopColor:colorsLight.headerBorder,
    borderBottomColor:colorsLight.headerBorder,
    borderTopWidth:2,
    borderBottomWidth:2
  },
  programTaskMain: {
    flex:1,
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    cursor:'pointer'
  },
  programTaskIcon: {
    marginRight:15,
  },
  programTaskTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  programTaskNav: {
    width:40,
    justifyContent:'space-between',
    paddingTop:4,
    paddingBottom:4
  },
  planRequiredText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:12,
    color:colorsLight.mainTextColor,
  },
  addSurveyMainContainer: {
    flex:3,
    minHeight:300,
    alignItems:'center',
    justifyContent:'center',
  },
  addSurveyMainHelpText: {
    fontSize:16,
    fontFamily:'Poppins',
    textAlign:'center',
    color:colorsLight.mainTextColor
  },
  addSurveyMain: {
    flex:1,
    width:'100%',
    padding:20,
  },
  addSurveyMainHeader: {
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1,
    paddingBottom:10,
    paddingLeft:5,
    paddingRight:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  addSurveyMainHeaderLeft: {
    flexDirection:'row',
    flex:3,
    alignItems:'center'
  },
  addSurveyMainHeaderRight: {
    justifyContent:'center',
    flex:1,
    cursor:'pointer'
  },
  addSurveyMainHeaderDelete: {
    color:btnColors.danger,
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'right',
  },
  addSurveyMainHeaderTaskText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    textAlign:'left',
    marginRight:10,
  },
  addSurveyMainHeaderTitle: {
    fontFamily:'Poppins',
    fontSize:22,
    textAlign:'left'
  },
  addSurveyMainBody: {
    paddingTop:15,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  addSurveyMainSearch: {
    zIndex:999
  },
  chosenTask: {
    flex:1,
    marginLeft:20,
  },
  chosenTaskTitle: {
    fontSize:22,
    marginTop:10,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor
  },
  chosenTaskText: {
    fontSize:16,
    fontFamily:'Poppins',
    marginTop:5,
    color:colorsLight.mainTextColor
  },
  searchTaskText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    color:colorsLight.mainTextColor,
  },
  addSurveyFooter: {
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:colorsLight.headerBorder,
  },
  surveyTaskQuestion: {
    fontFamily:'Poppins',
    fontSize:12,
    color:colorsLight.mainTextColor
  },
  inputSliderInfo: {

  },
  inputSliderInfoRange: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
  },
  inputSliderInfoRangeSpacer: {
    padding:10,
  },
  dropdownContainer: {
    padding:5,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10
  },
  inputSliderTextContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
  },
  inputSliderNumDisplay: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:colorsLight.mainTextColor,
    textAlign:'center',
    height:30,
    width:30,
    marginRight:10
  },
  inputSliderTextTitle: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    color:colorsLight.mainTextColor,
  },
  inputSliderTextLabel: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:14,
    borderRadius:10,
    padding:10,
    backgroundColor:colorsLight.secondaryBackground
  },
  surveyBoxes: {
    justifyContent:'flex-start',
    alignItems:'center',
    flex:1,
    marginBottom:10
  },
  boxItem: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    paddingTop:15,
    marginBottom:10,
    borderTopWidth:1,
    borderTopColor:colorsLight.headerBorder
  },
  boxItemInput: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'50%',
    fontFamily:'Poppins',
    fontSize:14,
  },
  boxItemNav: {
    backgroundColor:colorsLight.mainBackground,
    marginRight:10
  },
  responseRow: {
    flexDirection:'column',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1,
    backgroundColor:colorsLight.secondaryBackground
  },
  responseClientInfo: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    backgroundColor:colorsLight.header
  },
  responseClientInfoInner: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  responseClientText: {
    fontSize:18,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    marginLeft:10,
  },
  responseClientCreated: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
  },
  responseTextInfo: {
    padding:5
  },
  responseText: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
  },
});

export const programsLight = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
  },
  main: {
    flex:1,
    flexDirection:'row',
    width:'100%'
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    width:'100%'
  },
  body: {
    flex:1,
    width:'100%',
    alignItems:'center'
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyHeaderNav: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  bodyHeaderNavLink: {
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Poppins',
    fontSize:14
  },
  promptListContainer: {
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
    width:'100%'
  },
  promptHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  promptHeaderTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
    paddingLeft:5,
    paddingRight:10,
  },
  promptHeaderCount: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16
  },
  promptsColumn: {
    paddingTop:10,
    flex:1
  },
  addPromptContainer: {
    borderWidth:1,
    flex:1,
    padding:10,
    borderColor:colorsLight.headerBorder,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  promptAddButtonTitle: {
    fontSize:16,
    lineHeight:16,
    fontFamily:'Poppins',
    color:'#fff'
  },
  promptAddButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10
  },
  promptAddButtonContainer: {
    marginRight:10
  },
  helpBox: {
    width:400,
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  helpBoxText: {
    fontFamily:'Poppins',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  helpBoxError: {
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  standardPlanText: {
    color:btnColors.success,
  },
  proPlanText: {
    color:btnColors.danger
  },
  noProgramsText: {
    textAlign:'center',
    fontFamily:'Poppins',
    fontSize:18,
    paddingTop:20,
    color:colorsLight.mainTextColor
  },
  programs: {
    width:'100%',
  },
  program: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    marginBottom:20,
    width:'100%'
  },
  programHeader: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding:20
  },
  programHeaderTitle: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:24
  },
  programHeaderDescription: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20
  },
  programHeaderCreated: {
    fontFamily:'Poppins',
    color:colorsLight.secondaryTextColor,
    fontSize:16
  },
  programStats: {
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:colorsLight.header,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flex:1,
  },
  programStatTop: {
    flex:1,
    height:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:2,
    borderRightColor:colorsLight.header,
  },
  programStatTopNumber: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:24,
    marginRight:5,
  },
  programStatTopText: {
    fontFamily:'Poppins',
    color:colorsLight.secondaryTextColor,
    fontSize:18
  },
  viewProgramButton: {
    backgroundColor:btnColors.primary,
    borderRadius:25,
    paddingLeft:15,paddingRight:15,
    marginTop:20,
    marginBottom:20,
    marginLeft:20
  },
  viewProgramButtonContainer: {
    flex:1
  },
  addProgramMemberButton: {
    backgroundColor:btnColors.success,
    borderRadius:25,
    paddingLeft:15,paddingRight:15,
    marginTop:20,
    marginBottom:20,
    marginLeft:20
  },
  addProgramMemberButtonContainer: {
    flex:1
  },
  mainProgramButton: {
    fontSize:16,
    color:'#fff',
    fontFamily:'Poppins'
  },
  viewProgramMainHeader: {
  },
  viewProgramSectionTitle: {
    fontFamily:'Poppins',
    fontSize:22,
    color:colorsLight.mainTextColor,
    marginTop:10,
    marginBottom:10
  },
  viewProgramSectionClientList: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  viewProgramSectionClientListItemContainer: {
    width:'25%',
  },
  viewProgramSectionClientListItem: {
    margin:10,
    padding:10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:colorsLight.header,
    borderRadius:10,
    borderWidth:2,
    borderColor:colorsLight.header
  },
  viewProgramSectionClientListItemSelected: {
    margin:10,
    padding:10,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:10,
    borderWidth:2,
    borderColor:btnColors.primary,
  },
  viewProgramProgressOuter: {
    flex:1,
    width:'96%',
    height:20,
    marginTop:5,
    marginBottom:10,
    borderRadius:25,
    backgroundColor:colorsLight.secondaryBackground,
  },
  viewProgramProgressInner: {
    height:20,
    borderRadius:25
  },
  viewProgramSectionClientListMemberInfo: {
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    justifyContent:'flex-start',
    marginBottom:10
  },
  viewProgramSectionClientListMemberDetails: {
    marginLeft:10
  },
  viewProgramSectionClientListAvatar: {
    width:80,
    height:80,
    borderRadius:80
  },
  viewProgramSectionClientListName: {
    fontSize:18,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    lineHeight:18
  },
  viewProgramSectionClientListJoined: {
    fontSize:14,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    lineHeight:14
  },
  viewProgramSectionHeader: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:colorsLight.secondaryBackground,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    flex:1,
  },
  viewProgramSectionClientToggle: {
    fontSize:20,
    color:btnColors.primary,
    fontFamily:'Poppins',
    textAlign:'center'
  },
  viewProgramSectionClientToggleMain: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginTop:5
  },
  addClientsEnroll: {
    padding:10,
    color:colorsLight.mainTextColor,
    fontSize:18,
    fontFamily:'Poppins',
  },
  addClientsReleaseOnAssignText: {
    paddingBottom:10,
    paddingLeft:10,
    color:colorsLight.mainTextColor,
    fontSize:14,
    fontFamily:'Poppins',
  },
  boldText: {
    fontFamily:'PoppinsSemiBold',
  },
  addClientList: {
    marginTop:10,
  },
  addClientListMember: {
    borderRadius:25,
    backgroundColor:colorsLight.header,
    padding:10,
    marginBottom:10,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  clientListInfo: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  clientListAvatar: {
    width:40,
    height:40,
    borderRadius:40,
    marginLeft:5
  },
  clientListName: {
    marginLeft:10,
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  createGroupAddInput: {
    flex:1,
    marginLeft:4,
    fontSize:16,
    color:colorsLight.mainTextColor,
    outline:'none',
    paddingLeft:5,
    paddingTop:5,
    paddingBottom:5,
    outlineWidth:0,
    width:'100%'
  },
  createGroupAddIcon: {
    width:34,
    justifyContent:'center',
    alignItems:'center'
  },
  createGroupClient: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    borderBottomWidth:2,
    borderBottomColor:colorsLight.headerBorder  
  },
  searchClientsBar: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:colorsLight.headerBorder,
    borderRadius:25,
    paddingRight:10,
    flex:1,
  },
  searchClientsBarHighlight: {
    borderWidth:2,
    borderColor:colorsLight.mainTextColor,
  },
  addClientListSubmitButton: {
    backgroundColor:btnColors.primary,
    color:colorsLight.mainTextColor,
    borderRadius:25,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    marginLeft:10,
  },
  addClientListSubmitTitle: {
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:16,
  },
  clientAddSuccessTitle: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
    fontSize:20,
  },
  clientAddSuccessDesc: {
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    textAlign:'center',
    fontSize:16,
    marginTop:10,
    marginBottom:15
  },
  viewProgramNoMembersText: {
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    fontSize:16,
  },
  tabListContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    paddingBottom:10,
    borderRadius:10,
    paddingTop:10,
    paddingLeft:5,
    paddingRight:5,
    margin:10,
    backgroundColor:colorsLight.header,
  },
  viewProgramClientListOptions: {
    margin:10,
    flexDirection:'row',
    alignItems:'center'
  },  
  clientListOptionsCount: {
    fontFamily:'Poppins',
    fontSize:20,
    marginLeft:5,
    color:colorsLight.mainTextColor,
  },
  advanceNextTaskButton: {
    borderRadius:25,
    backgroundColor:btnColors.primary,
    paddingLeft:15,
    paddingRight:15
  },
  viewProgramTabHighlighted: {
    flex:1,
    padding:5,
    marginLeft:5,
    marginLeft:5,
    borderRadius:10,
    backgroundColor:btnColors.primary,
  },
  viewProgramTabHighlightedText: {
    textAlign:'center',
    fontSize:18,
    fontFamily:'Poppins',
    color:'#fff'
  },
  viewProgramTab: {
    flex:1,
    padding:5,
    marginLeft:5,
    marginLeft:5,
    borderRadius:10,
  },
  viewProgramTabText: {
    textAlign:'center',
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  viewProgramSectionClientListButtons: {
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    marginTop:10,
    marginBottom:10
  },
  clientListSelect: {
    width:'100%',
    padding:0,
    borderRadius:25,
    backgroundColor:btnColors.success
  },
  clientListDeselect: {
    width:'100%',
    padding:0,
    borderRadius:25,
    backgroundColor:btnColors.danger
  },
  clientListViewData: {
    width:'100%',
    padding:0,
    borderRadius:25,
    backgroundColor:colorsLight.secondaryBackground
  },
  clientListViewDataTitle: {
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:16
  },
  clientListViewDataContainer: { 
    flex:1,
    margin:5
  },
  task: {
    margin:10,
    backgroundColor:colorsLight.header,
    borderRadius:10,
  },
  taskHeader: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:15,
    backgroundColor:colorsLight.headerDarker,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  taskHeaderTitleCount: {
    fontSize:20,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  taskHeaderTitleName: {
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  taskHeaderStatusCompleted: {
    fontSize:18,
    fontFamily:'Poppins',
    color:btnColors.success
  },
  taskHeaderStatus: {
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  taskData: {
    padding:15,
  },
  noResponseText: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  surveyData: {
  },
  surveyDataRow: {
    marginBottom:10,
  },
  sliderOuter: {
    flex:1,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    overflow:'hidden',
    marginTop:10
  },
  sliderInner: {
    height:'100%',
    padding:10,
    justifyContent:'center',
    backgroundColor:colorsLight.secondaryHighlight
  },
  sliderInnerText: {
    fontFamily:'Poppins',
    textAlign:'right',
    fontSize:16,
    color:'#fff'
  },
  surveyQuestion: {
    fontSize:20,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    marginBottom:10
  },
  responseClientName: {
    fontFamily:'PoppinsSemiBold',
    marginRight:8
  },
  responseClientText: {
    fontSize:18,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    marginLeft:10,
  },
  responseClientContainer: {
    borderRadius:25,
    padding:10,
    backgroundColor:colorsLight.mainBackground,
    flexDirection:'row',
    alignItems:'center'
  },
  responseClientAvatar: {
    width:30,
    height:30,
    borderRadius:25,
  },
  paymentsControls: {
    flexDirection:'row',
    alignItems:'center'
  },
  paymentsControlsText: {
    padding:10,
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    color:colorsLight.secondaryTextColor,
    width:'100%'
  },
  paymentControlsTouchIcon: {
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmount: {
    flex:12,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsNumber: {
    flex:16,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmountCurrency: {
    flex:6,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmountStatus: {
    flex:12,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchDescription: {
    flex:55,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchView: {
    flex:14,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchDate: {
    flex:19,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRow: {
    flexDirection:'row',
    alignItems:'center'
  },
  paymentRowText: {
    padding:10,
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor,
    width:'100%'
  },
  paymentRowTouchIcon: {
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmount: {
    flex:12,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowNumber: {
    flex:16,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmountCurrency: {
    flex:6,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmountStatus: {
    flex:12,
    height:40,
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchDescription: {
    flex:55,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchView: {
    flex:14,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchDate: {
    flex:19,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  viewProgramStatsRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    paddingTop:10
  },
  viewProgramSectionClientListStatColumn: {
    flex:1,
    alignItems:'center',
  },
  viewProgramSectionClientListStatNumber: {
    fontSize:20,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  viewProgramSectionClientListTasksCompleted: {
    fontSize:14,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  advanceTasksConfirmContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    padding:15,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground
  },
  advanceTasksConfirmTitle: {
    width:'100%',
    textAlign:'center',
    fontSize:18,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
  },
  advanceTasksConfirmDesc: {
    width:'100%',
    textAlign:'center',
    fontSize:16,
    lineHeight:18,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
  },
  advanceTasksConfirmRow: {
    flexDirection:'row',
    width:'100%',
    marginTop:15,
    alignItems:'center',
    justifyContent: 'space-between',
  },
  advanceTasksCancel: {
    marginRight:7,
    borderRadius:10,
    padding:10,
    backgroundColor:btnColors.danger
  },
  advanceTasksConfirm: {
    marginLeft:7,
    borderRadius:10,
    padding:10,
    backgroundColor:btnColors.success
  },
  advanceTasksButtonTitle: {
    fontSize:16,
    color:'#fff',
    fontFamily:'Poppins'
  }
});

export const addProgramLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  success: {
    fontFamily:'Poppins',
    fontSize:16,
    color:btnColors.success
  },
  error: {
    fontFamily:'Poppins',
    fontSize:16,
    color:btnColors.danger
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  header: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingBottom:5,
    paddingTop:20,
    marginLeft:20,
    marginRight:20
  },
  headerTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
    paddingLeft:5,
    paddingRight:10,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  addProgramContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    marginBottom:20,
  },
  addProgramHeader: {
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
  },
  addProgramLabel: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
  },
  addProgramBody: {
    flexDirection:'row'
  },
  addProgramListContainer: {
    flex:2,
    backgroundColor:colorsLight.header,
    borderRightWidth:1,
    borderRightColor:colorsLight.headerBorder,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  addProgramListButton: {
    borderRadius:50
  },
  addProgramListButtonContainer: {
    padding:20,
  },
  addProgramListDropdown: {
    position:'absolute',
    width:'80%',
    backgroundColor:colorsLight.mainBackground,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    borderRadius:10,
    padding:10,
    left:'10%',
    top:60,
  },
  addProgramListDropdownTouch: {
    paddingLeft:10,
    paddingTop:4,
    paddingBottom:4,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    cursor:'pointer'
  },
  addProgramListDropdownTouchBottom: {
    paddingLeft:10,
    paddingTop:4,
    paddingBottom:4,
    cursor:'pointer'
  },
  addProgramListDropdownText: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  addProgramList: {
    justifyContent:'flex-start',
    flex:5,
  },
  programTask: {
    backgroundColor:colorsLight.mainBackground,
    flexDirection:'row',
    marginBottom:10,
    borderTopColor:colorsLight.headerBorder,
    borderBottomColor:colorsLight.headerBorder,
    borderTopWidth:2,
    borderBottomWidth:2
  },
  programTaskMain: {
    flex:1,
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    cursor:'pointer'
  },
  programTaskIcon: {
    marginRight:15,
  },
  programTaskTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  programTaskNav: {
    width:40,
    justifyContent:'space-between',
    paddingTop:4,
    paddingBottom:4
  },
  planRequiredText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:12,
    color:colorsLight.mainTextColor,
  },
  addProgramMainContainer: {
    flex:3,
    minHeight:300,
    alignItems:'center',
    justifyContent:'center',
  },
  addProgramMainHelpText: {
    fontSize:16,
    fontFamily:'Poppins',
    textAlign:'center',
    color:colorsLight.mainTextColor
  },
  addProgramMain: {
    flex:1,
    width:'100%',
    padding:20,
  },
  addProgramMainHeader: {
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1,
    paddingBottom:10,
    paddingLeft:5,
    paddingRight:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  addProgramMainHeaderLeft: {
    flexDirection:'row',
    flex:3,
    alignItems:'center'
  },
  addProgramMainHeaderRight: {
    justifyContent:'center',
    flex:1,
    cursor:'pointer'
  },
  addProgramMainHeaderDelete: {
    color:btnColors.danger,
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'right',
  },
  addProgramMainHeaderTaskText: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    textAlign:'left',
    marginRight:10,
  },
  addProgramMainHeaderTitle: {
    fontFamily:'Poppins',
    fontSize:22,
    textAlign:'left'
  },
  addProgramMainBody: {
    paddingTop:15,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flex:1,
    width:'100%'
  },
  addProgramMainSearch: {
    zIndex:999,
  },
  chosenTaskContainer: {
    marginRight:20,
    flex:1,
  },
  chosenTask: {
    flex:1,
  },
  chosenTaskTitle: {
    fontSize:22,
    marginTop:0,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor
  },
  chosenTaskText: {
    fontSize:16,
    fontFamily:'Poppins',
    marginTop:5,
    color:colorsLight.mainTextColor
  },
  chosenTaskSettingsRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:10
  },
  chosenTaskSettingText: {
    fontFamily:'Poppins',
    fontSize:16,
    marginLeft:10,
    color:colorsLight.mainTextColor,
  },
  chosenTaskSettingTextDetail: {
    marginLeft:5,
    marginRight:5,
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor,
  },
  searchTaskText: {
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'center',
    paddingTop:20,
    paddingBottom:20,
    color:colorsLight.mainTextColor,
  },
  addProgramFooter: {
    flexDirection:'column',
    alignItems:'center',
    borderTopWidth:1,
    borderTopColor:colorsLight.headerBorder,
  },
  addTaskSearchList: {
    width:250,
    maxHeight:600,
    flex:1,
    height:'100%',
    backgroundColor:colorsLight.header,
  },
  addTaskSearchElements: {
    flex:1,
  },
  searchElement: {
    padding:10,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginLeft:10,
    marginRight:10,
    marginBottom:10
  },
  searchElementTitle: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center'
  },
  searchElementText: {
    fontSize:14,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    textAlign:'center'
  },
  searchHighlight: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:colorsLight.mainTextColor,
    borderRadius:25,
    paddingRight:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
  },
  searchInput: {
    flex:1,
    marginLeft:4,
    fontSize:16,
    color:colorsLight.mainTextColor,
    outline:'none',
    paddingLeft:5,
    paddingTop:5,
    paddingBottom:5,
    outlineWidth:0,
    width:'100%'
  },
  searchIcon: {
    width:34,
    justifyContent:'center',
    alignItems:'center'
  },
})

export const brandDesignLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  brandContainer: {
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  brandColoringRow: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-end',
  },
  brandColoringGroup: {
    flex:1,
    justifyContent:'center'
  },
  brandColoringGroupTitle: {
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
    color:colorsLight.mainTextColor,
    textAlign:'center',
    marginBottom:20
  },
  brandColoringTouch: {
    borderRadius:10,
    height:30,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  sectionTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:24,
  },
  sectionContent: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16,
    marginBottom:20
  },
  saveColoringText: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  saveColoringButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  saveColoringContainer: {
    width:'100%'
  },
  testAccLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    width:'100%',
    textAlign:'center',
    color:'#000'
  },
  logoUploadPreview: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    width:200,
    height:200
  },
  logoBelow: {
    fontSize:14,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  errorText: {
    fontSize:14,
    fontFamily:'Poppins',
    color:btnColors.danger,
    textAlign:'center'
  },
  resetToDefault: {
    fontSize:14,
    fontFamily:'Poppins',
    color:btnColors.primary,
    textAlign:'center'
  },
  brandHeaderRow: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerInputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    height:38,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:10,
    textAlign:'center'
  },
})

export const allClientsLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodySubtitle: {
    color:colorsLight.darkGray,
    fontSize:20,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyRow: {
    flexDirection:'row',
    alignItems:'flex-start',
  },
  bodyColumn: {
    flexDirection:'column',
    flex:1,
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20,
  },
  tag: {
    padding:5
  },
  tagContainer: {
    flex:1,
    padding:3
  },
  tagTitle: {
    fontFamily:'Poppins',
    color:'white',
    fontSize:14,
  },
  inputTitle: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:20,
    padding:10,
    fontFamily:'Poppins',
    fontSize:14,
  },
  filterTitleContainer: {
    flexDirection:'row',
    alignItems:'center'
  },
  filterTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.secondaryTextColor,
    fontSize:14
  },
  filterTitleRow: {
    flexDirection:'row',
    alignItems:'center'
  },
  filterRow: {
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  filterItem: {
    flex:1,
    padding:10,
    justifyContent:'flex-start'
  },
  filterItemHeader: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    color:colorsLight.mainTextColor
  },
  filterApplyItem: {
    flex:2,
    alignItems:'flex-end',
    justifyContent:'center',
    padding:10
  },
  filterApplyButton: {
    flex:1,
    borderRadius:10
  },
  filterResetButton: {
    flex:1,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10
  },
  filterButtonContainer: {
    flex:1,
    marginLeft:10,
  },
  filterResetButtonTitle: {
    color:colorsLight.mainTextColor
  },
  clientHeader: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  clientHeaderLeft: {
    flexDirection:'row',
    alignItems:'center',
  },
  clientBulkOptions: {
    flexDirection:'row',
    alignItems:'center',
    zIndex:1000,
    paddingTop:10,
    paddingBottom:10
  },
  clientBulkApplyButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
    padding:9,
  },
  clientBulkApplyButtonContainer: {
    marginLeft:10
  },
  clientBulkApplyButtonTitle: {
    color:'#fff',
    fontSize:16
  },
  clientsControls: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colorsLight.header,
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  clientsControlsText: {
    padding:10,
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    color:colorsLight.secondaryTextColor
  },
  clientControlsTouchIcon: {
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
  },
  clientControlsTouchClient: {
    flex:25,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  clientControlsTouchTags: {
    flex:35,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  clientControlsTouchCreated: {
    flex:20,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  clientControlsTouchControls: {
    flex:20,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  clientRow: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  clientRowText: {
    padding:10,
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor,
    width:'100%'
  },
  clientName: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    color:colorsLight.secondaryTextColor,
    lineHeight:16
  },
  clientEmail: {
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor,
    lineHeight:14,
  },
  clientAvatar: {
    width:50,
    height:50,
    borderRadius:100
  },
  clientAvatarContainer: {
    padding:10,
    flexDirection:'row',
    alignItems:'center'
  },
  clientRowTouchIcon: {
    width:40,
    alignItems:'center',
    justifyContent:'center',
  },
  clientRowTouchClient: {
    flex:25,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  clientRowTouchTags: {
    flex:35,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  clientRowTouchCreated: {
    flex:20,
    alignItems:'center',
    justifyContent:'center',
  },
  clientRowTouchControls: {
    flex:20,
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'row'
  },
  clientAssignTask: {
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:3,
    borderRadius:10,
    backgroundColor:btnColors.primary,
    marginLeft:8
  },
  clientProfileButton: {
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:3,
    borderRadius:10,
    backgroundColor:btnColors.info,
    marginLeft:10
  },
  clientRowButtonTitle: {
    color:'#fff',
    fontSize:16
  },
  noClients: {
    width:'100%',
    padding:10,
    textAlign:'center',
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  clientInfoRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  clientInfoHeaderContainer: {
    flexDirection:'row',
    alignItems:'center',
  },
  clientImage: {
    width:80,
    height:80,
    borderRadius:100,
    marginRight:10
  },
  clientInfoHeader: {
    justifyContent:'center'
  },
  clientJoinedTitle: {
    fontSize:18,
    lineHeight:18,
    paddingTop:2,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  clientButtonRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:20,
  },
  clientButton: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    borderWidth:1,
    borderColor:btnColors.primary,
    paddingTop:10,
    paddingLeft:20
  },
  clientButtonActive: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    borderWidth:1,
    borderColor:btnColors.success,
    paddingTop:10,
  },
  clientButtonInactive: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    borderWidth:1,
    borderColor:btnColors.danger,
    paddingTop:10,
  },
  clientButtonContainer: {
    flex:1,
    padding:5,
  },
  clientButtonTitle: {
    color:btnColors.primary,
    fontFamily:'Poppins'
  },
  clientButtonTitleActive: {
    color:btnColors.success,
    fontFamily:'Poppins'
  },
  clientButtonTitleInactive: {
    color:btnColors.danger,
    fontFamily:'Poppins'
  },
  clientInformation: {
    paddingTop:20,
  },
  clientInformationRow: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder
  },
  clientInformationRowTitle: {
    fontSize:18,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    marginRight:10,
    flex:1,
    borderRightWidth:1,
    borderRightColor:colorsLight.headerBorder,
    padding:3,
  },
  clientInformationRowText: {
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.secondaryTextColor,
    flex:1
  },
  clientNotesHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    paddingBottom:10
  },
  clientNotesHeaderTitle: {
    fontSize:20,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor
  },
  noteRow: {
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:10,
    paddingTop:10,
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  noteTitle: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:colorsLight.mainTextColor,
    flex:1,
  },
  noteDates: {
    justifyContent:'center',
    flex:1
  },
  noteDate: {
    fontFamily:'Poppins',
    fontSize:16,
    lineHeight:16,
    color:colorsLight.mainTextColor
  },
  notesAddNewButton: {
    backgroundColor:btnColors.primary,
    paddingLeft:7,
    paddingTop:3,
    paddingRight:3,
    paddingBottom:3,
    borderRadius:10,
  },
  notesAddNewButtonTitle: {
    fontSize:15,
    color:'#fff',
    fontFamily:'Poppins'
  },
  inputLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    width:'100%',
  },
  noteSubmitButtonRow: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  assignTaskButtonsContainer: {
    padding:10
  },
  assignTaskButtonContainer: {
    marginBottom:10
  },
  taskButtonsList: {
    padding:10
  },
  taskButton: {
    backgroundColor:btnColors.success,
    borderRadius:10
  }
})

export const inviteClientsLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodySubtitle: {
    color:colorsLight.darkGray,
    fontSize:20,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20
  },
  inputTitle: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  bodyRow: {
    flexDirection:'row',
    alignItems:'flex-start',
  },
  bodyInputContainer: {
    flex:1,
    justifyContent:'center',
    paddingRight:20
  },
  saveText: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  saveButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10
  },
  saveContainer: {
    flex:1,
  },
  saveContainerRow: {
    flexDirection:'row',
    alignItems:'flex-end'
  },
  saveContainerSpacer: {
    flex:3
  },
  coachID: {
    color:colorsLight.mainBackground,
    backgroundColor:colorsLight.mainTextColor,
    padding:10,
    borderRadius:10,
    fontSize:24,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center'
  }
})

export const integrationsLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodySubtitle: {
    color:colorsLight.darkGray,
    fontSize:20,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20
  },
  inputTitle: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  saveColoringText: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  saveColoringButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  saveColoringContainer: {
    width:'25%',
    marginLeft:'75%'
  },
  bodyRow: {
    flexDirection:'row',
    alignItems:'flex-start',
  },
  bodyInputContainer: {
    flex:1,
    justifyContent:'center',
    paddingRight:20
  },
  saveText: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  saveButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10
  },
  saveContainer: {
    flex:1,
  },
  saveContainerRow: {
    flexDirection:'row',
    alignItems:'flex-end'
  },
  saveContainerSpacer: {
    flex:3
  },
  coachID: {
    color:colorsLight.mainBackground,
    backgroundColor:colorsLight.mainTextColor,
    padding:10,
    borderRadius:10,
    fontSize:24,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center'
  },
  stripeConnected: {
    fontSize:16,
    padding:5,
    borderRadius:10,
    marginTop:10,
    borderWidth:1,
    borderColor:btnColors.success,
    color:btnColors.success,
    fontFamily:'Poppins'
  }
})

export const paymentsLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodySubtitle: {
    color:colorsLight.darkGray,
    fontSize:20,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20
  },
  inputTitle: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  bodyRow: {
    flexDirection:'row',
    alignItems:'center',
  },
  bodyInputContainer: {
    flex:1,
    justifyContent:'center',
    paddingRight:20
  },
  saveText: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  saveButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  saveContainer: {
    flex:1,
  },
  saveContainerRow: {
    flexDirection:'row',
    alignItems:'flex-end'
  },
  saveContainerSpacer: {
    flex:3
  },
  paymentsControls: {
    flexDirection:'row',
    alignItems:'center'
  },
  paymentsControlsText: {
    padding:10,
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    color:colorsLight.secondaryTextColor,
    width:'100%'
  },
  paymentControlsTouchIcon: {
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmount: {
    flex:12,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmountCurrency: {
    flex:6,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmountStatus: {
    flex:12,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchDescription: {
    flex:45,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchClient: {
    flex:22,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchDate: {
    flex:25,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRow: {
    flexDirection:'row',
    alignItems:'center'
  },
  paymentRowText: {
    padding:10,
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor,
    width:'100%'
  },
  paymentRowTouchIcon: {
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmount: {
    flex:12,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmountCurrency: {
    flex:6,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmountStatus: {
    flex:12,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchDescription: {
    flex:45,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchClient: {
    flex:22,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchDate: {
    flex:25,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  noPayments: {
    width:'100%',
    padding:10,
    textAlign:'center',
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  }
})

export const managePlanLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodySubtitle: {
    color:colorsLight.darkGray,
    fontSize:20,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:16,
    lineHeight:18,
    fontFamily:'Poppins'
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20
  },
  currentEmail: {
    fontSize:20,
    padding:10,
    borderRadius:10,
    color:colorsLight.mainBackground,
    backgroundColor:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    width:'25%',
    textAlign:'center'
  },
  inputTitle: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  bodyRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyInputContainer: {
    flex:1,
    justifyContent:'center',
    paddingRight:20
  },
  saveText: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  saveButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  saveContainer: {
    flex:1,
  },
  saveContainerRow: {
    flexDirection:'row',
    alignItems:'flex-end'
  },
  saveContainerSpacer: {
    flex:3
  },
  passwordPromptError: {
    textAlign:'center',
    fontSize:16,
    color:btnColors.danger,
    fontFamily:'Poppins',
  },
  changeEmailSent: {
    flex:3,
    marginLeft:20,
    color:btnColors.success,
    fontSize:18,
    fontFamily:'Poppins'
  },
  inputHeader: {
    fontSize:16,
    padding:5,
    color:colorsLight.secondaryTextColor,
    fontFamily:'PoppinsSemiBold',
  },
  managePaymentsButton: {
    padding:10,
    borderWidth:1,
    borderColor:btnColors.primary,
    borderRadius:10,
    backgroundColor:btnColors.lightBackground,
    color:btnColors.primary,
  },
  managePaymentsButtonContainer: {
    width:'50%',
    marginLeft:5,
    marginTop:10
  },
  barSelected: {
    padding:10,
    marginRight:10,
    backgroundColor:btnColors.primary,
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:16,
    borderRadius:10,
  },
  barUnselected: {
    padding:10,
    marginRight:10,
    color:btnColors.primary,
    fontFamily:'Poppins',
    fontSize:16
  },
  planCurrency: {
    fontSize:24,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    padding:5,
    marginTop:-8
  },
  planAmount: {
    fontSize:40,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    marginTop:-10
  },
  planDuration: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.secondaryTextColor,
    paddingTop:2,
    paddingLeft:10
  },
  upgradePlanButton: {
    padding:10,
    borderWidth:1,
    borderColor:btnColors.primary,
    borderRadius:10,
    backgroundColor:btnColors.primary,
  },
  upgradePlanButtonContainer: {
    width:'30%',
    marginTop:8
  },
  upgradeToPlanButton: {
    padding:5,
    borderWidth:1,
    borderColor:btnColors.success,
    borderRadius:10,
    backgroundColor:btnColors.success,
  },
  upgradeToPlanButtonContainer: {
  },
  downgradeToPlanButton: {
    padding:5,
    borderWidth:1,
    borderColor:btnColors.danger,
    borderRadius:10,
    backgroundColor:btnColors.danger,
  },
  downgradeToPlanButtonContainer: {
  },
  planTitleAmount: {
    fontSize:18,
    marginRight:10,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold'
  },
  planTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center'
  },
  planDesc: {
    color:colorsLight.darkGray,
    fontSize:16,
    lineHeight:18,
    fontFamily:'Poppins',
    textAlign:'center'
  },
  planCurrent: {
    backgroundColor:colorsLight.mainTextColor,
    fontSize:18,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainBackground,
    padding:5,
    borderWidth:1,
    borderColor:colorsLight.mainBackground,
    borderRadius:10,
  },
  originalPrice: {
    fontSize:14,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign:'center',
    textDecorationLine:'line-through'
  },
  originalTitle: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign:'center',
    marginBottom:10
  },
  // Alert Button Styling
  alertContainer: {
    width:500,
    alignItems:'center',
    padding:20,
    backgroundColor:colorsLight.header,
    borderRadius:10,
    borderWidth:1,
    borderColor:colorsLight.mainTextColor
  },
  alertTitle: {
    fontSize:22,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    marginBottom:20,
  },
  alertDesc: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    marginBottom:20,
  },
  amountLineContainer: {
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:3,
  },
  amountLine: {
    fontSize:14,
    fontFamily:'Poppins',
    color:colorsLight.secondaryTextColor,
  },
  amountLineFinalContainer: {
    padding:3,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  amountLineBold: {
    fontFamily:'PoppinsSemiBold',
  },
  alertHelpRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1,
    width:'100%',
    marginTop:-5,
  },
  alertButtonRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1,
    width:'100%',
    marginTop:20
  },
  alertConfirm: {
    backgroundColor:btnColors.success,
    borderRadius:10,
    padding:10
  },
  alertConfirmContainer: {
  },
  alertCancel: {
    backgroundColor:btnColors.danger,
    borderRadius:10,
    padding:10
  },
  alertCancelContainer: {
  },
  paymentsNextInvoice: {
    flex:4,
    marginRight:20
  },
  paymentsNextInvoiceTop: {
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:10
  },
  paymentsMethod: {
    flex:2,
    paddingLeft:20,
    borderLeftWidth:1,
    borderLeftColor:colorsLight.headerBorder
  },
  cardName: {
    fontFamily:'OCRA',
    fontSize:18
  },
  cardNumbers: {
    flexDirection:'row',
    alignItems:'center'
  },
  cardNumberGroup: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    letterSpacing:10,
    fontFamily:'OCRA',
    fontSize:18,
    color:colorsLight.mainTextColor
  },
  cardRow: {
    flexDirection:'row',
    alignItems:'center',
  },
  cardholderTitle: {
    fontFamily:"PoppinsSemiBold",
    fontSize:14,
    color:colorsLight.secondaryTextColor,
    marginRight:10,
    marginTop:-3
  },
  cardExpTitle: {
    fontFamily:"PoppinsSemiBold",
    fontSize:14,
    color:colorsLight.secondaryTextColor,
    width:60,
    lineHeight:14
  },
  cardExp: {
    fontFamily:'OCRA',
    fontSize:20,
    color:colorsLight.mainTextColor,
    flex:1
  },
  paymentsNextInvoiceFinal: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingTop:20,
    paddingBottom:5
  },
  paymentsNextInvoiceAmount: {
    marginRight:20,
  },
  paymentsNextInvoiceDueDate: {
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.secondaryTextColor
  },
  paymentsNextInvoiceAmountDueDateTitle: {
    fontFamily:'PoppinsSemiBold',
    fontSize:16,
    lineHeight:16,
    color:colorsLight.mainTextColor
  },
  paymentsNextInvoiceCurrency: {
    fontFamily:'Poppins',
    fontSize:22,
    marginTop:6,
    color:colorsLight.mainTextColor
  },
  paymentsNextInvoiceAmountNum: {
    fontFamily:'Poppins',
    fontSize:40,
    color:colorsLight.mainTextColor
  },
  paymentsNextInvoiceAmountRow: {
    flexDirection:'row'
  },
  paymentsControls: {
    flexDirection:'row',
    alignItems:'center'
  },
  paymentsControlsText: {
    padding:10,
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    color:colorsLight.secondaryTextColor,
    width:'100%'
  },
  paymentControlsTouchIcon: {
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmount: {
    flex:12,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsNumber: {
    flex:16,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmountCurrency: {
    flex:6,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchAmountStatus: {
    flex:12,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchDescription: {
    flex:55,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchView: {
    flex:14,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentControlsTouchDate: {
    flex:19,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRow: {
    flexDirection:'row',
    alignItems:'center'
  },
  paymentRowText: {
    padding:10,
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor,
    width:'100%'
  },
  paymentRowTouchIcon: {
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmount: {
    flex:12,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowNumber: {
    flex:16,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmountCurrency: {
    flex:6,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchAmountStatus: {
    flex:12,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchDescription: {
    flex:55,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchView: {
    flex:14,
    height:40,
    alignItems:'flex-end',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  paymentRowTouchDate: {
    flex:19,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  invoicesHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    marginBottom:10
  },
  inputCardName: {
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderWidth:1,
    fontSize:16,
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.mainBackground,
    borderColor:colorsLight.secondaryBackground,
    padding:15,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    fontWeight:'1000',
    width:'100%'
  },
  cardWrapper: {
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    backgroundColor:colorsLight.mainBackground,
    borderColor:colorsLight.secondaryBackground,
    padding:15,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    width:'100%'
  },
})

export const accountLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodySubtitle: {
    color:colorsLight.darkGray,
    fontSize:20,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20
  },
  currentEmail: {
    fontSize:20,
    padding:10,
    borderRadius:10,
    color:colorsLight.mainBackground,
    backgroundColor:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    width:'25%',
    textAlign:'center'
  },
  inputTitle: {
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    fontSize:18,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  bodyRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyInputContainer: {
    flex:1,
    justifyContent:'center',
    paddingRight:20
  },
  saveText: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  saveButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  saveContainer: {
    flex:1,
  },
  saveContainerRow: {
    flexDirection:'row',
    alignItems:'flex-end'
  },
  saveContainerSpacer: {
    flex:3
  },
  passwordPromptError: {
    textAlign:'center',
    fontSize:16,
    color:btnColors.danger,
    fontFamily:'Poppins',
  },
  changeEmailSent: {
    flex:3,
    marginLeft:20,
    color:btnColors.success,
    fontSize:18,
    fontFamily:'Poppins'
  },
  inputHeader: {
    fontSize:16,
    padding:5,
    color:colorsLight.secondaryTextColor,
    fontFamily:'PoppinsSemiBold',
  },
})

export const socialFeedLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  socialFeedPages: {
    borderRadius:10,
    padding:20,
    backgroundColor:colorsLight.mainBackground,
  },
  socialFeedTabination: {
    borderRadius:10,
    padding:10,
    backgroundColor:colorsLight.header,
    marginBottom:20,
    width:'100%',
    flexDirection:'row',
  },
  socialFeedTabHighlighted: {
    flex:1,
    padding:5,
    marginLeft:5,
    marginLeft:5,
    borderRadius:10,
    backgroundColor:btnColors.primary,
  },
  socialFeedTabHighlightedText: {
    textAlign:'center',
    fontSize:18,
    fontFamily:'Poppins',
    color:'#fff'
  },
  socialFeedTab: {
    flex:1,
    padding:5,
    marginLeft:5,
    marginLeft:5,
    borderRadius:10,
  },
  socialFeedTabText: {
    textAlign:'center',
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  socialFeedContainer: {
    flexDirection:'row',
  }, 
  socialFeedMain: {
    flex:3,
  },
  socialFeedNoPosts: {
    justifyContent:'center',
    marginRight:20,
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
  },
  socialFeedNoPostsText: {
    lineHeight:20,
    fontFamily:'Poppins',
    fontSize:20,
    marginLeft:5,
    color:colorsLight.mainTextColor,
  },
  socialFeedColumn:{ 
    flex:1,
  },
  newPostButtonContainer: {
    borderRadius:10,
    padding:10,
    backgroundColor:colorsLight.mainBackground,
  },
  newPostContainer: {
    backgroundColor:colorsLight.mainBackground,
    padding:15,
    borderRadius:10,
    width:'50%',
    marginLeft:'25%'
  },
  newPostHeader: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder,
    marginBottom:20
  },
  newPostTitle: {
    fontSize:25,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  newPostTextInput: {
    padding:10,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    outlineWidth:0,
    marginBottom:20,
    fontSize:18
  },
  newPostAttachmentOptionsText: {
    fontFamily:'Poppins',
    fontSize:18,
    color:colorsLight.secondaryTextColor,
    marginBottom:10,
  },
  newPostAttachmentOptions: {
    flexDirection:'row',
    alignItems:'center'
  },
  newPostAttachmentOption: {
    borderColor:colorsLight.secondaryTextColor,
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:10,
    flex:1,
    marginLeft:10,
    marginRight:10,
    padding:10,
    justifyContent:'center',
    alignItems:'center'
  },
  newPostAttachmentOptionText: {
    fontFamily:'Poppins',
    fontSize:16,
    color:colorsLight.secondaryTextColor,
  },
  newPostAttachGoBack: {
    width:'100%',
    alignItems:'center'
  },
  newPostAttachGoBackText: {
    textAlign:'center',
    fontSize:18,
    color:btnColors.danger,
    textDecorationLine: 'underline',
    marginTop:10
  },
  newPostYouTubeContainer: {

  },
  newPostVideoContainer: {

  },
  reactPlayerContainer: {
    width:500,
    height:280,
    aspectRatio:16/9,
  },
})

export const coachBioLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  socialFeedPages: {
    borderRadius:10,
    padding:20,
    backgroundColor:colorsLight.mainBackground,
  },
  socialFeedTabination: {
    borderRadius:10,
    padding:10,
    backgroundColor:colorsLight.header,
    marginBottom:20,
    width:'100%',
    flexDirection:'row',
  },
  socialFeedTabHighlighted: {
    flex:1,
    padding:5,
    marginLeft:5,
    marginLeft:5,
    borderRadius:10,
    backgroundColor:btnColors.primary,
  },
  socialFeedTabHighlightedText: {
    textAlign:'center',
    fontSize:18,
    fontFamily:'Poppins',
    color:'#fff'
  },
  socialFeedTab: {
    flex:1,
    padding:5,
    marginLeft:5,
    marginLeft:5,
    borderRadius:10,
  },
  socialFeedTabText: {
    textAlign:'center',
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  socialFeedContainer: {
    flexDirection:'row',
  }, 
  socialFeedMain: {
    flex:3,
  },
  socialFeedColumn:{ 
    flex:1,
    borderRadius:10,
    padding:10,
    backgroundColor:colorsLight.mainBackground,
  },
})

export const featureBoardLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  barSelected: {
    padding:10,
    marginRight:10,
    backgroundColor:btnColors.primary,
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:16,
    borderRadius:10,
  },
  barUnselected: {
    padding:10,
    marginRight:10,
    color:btnColors.primary,
    fontFamily:'Poppins',
    fontSize:16
  },
  featureBoardHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder
  },
  featureBoardHeaderText: {
    flex:1
  },
  requestFeatureButton: {
    borderRadius:10,
    backgroundColor:btnColors.primary
  },
  featureBoardNone: {
    fontSize:18,
    marginTop:10,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  featureRequestForm: {
    marginTop:20,
  },
  inputLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    width:'100%',
    color:colorsLight.mainTextColor,
  },
  inputStyle: {
    color:colorsLight.mainTextColor,
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    width:'100%',
    fontFamily:'Poppins',
    fontSize:18,
    marginBottom:20
  },
  featureRow: {
    flexDirection:'row',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder
  },
  featureRowVoting: {
    alignItems:'center',
    justifyContent:'center',
    paddingRight:20
  },
  featureRowNum: {
    fontSize:16,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center'
  },
  featureRowData: {
    justifyContent:'center'
  },
  featureRowTitle: {
    fontSize:18,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold'
  },
  featureRowText: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins'
  },
  releaseRow: {
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:colorsLight.headerBorder
  },
  releaseBox: {
    padding:5,
    color:'#fff',
    marginBottom:10,
    marginTop:10,
    alignSelf:'flex-start',
    borderRadius:5,
    fontFamily:'Poppins',
    fontSize:18
  },
  releaseText: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
  }
})

export const forgotPasswordLight = StyleSheet.create({
  body: {
    flex:1,
    borderWidth:0,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colorsLight.secondaryBackground,
    borderLeftWidth:10,
    borderLeftColor:colorsLight.secondaryHighlight,
    borderRightWidth:10,
    borderRightColor:colorsLight.secondaryHighlight,
  },
  logo: {
    width:240,
    height:120,
    marginTop:40,
    marginBottom:20
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    width:'40%',
    marginTop:20,
    marginBottom:100,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:16,
    lineHeight:14,
    fontFamily:'Poppins',
    textAlign:'center',
  },
  form: {
    marginLeft:20,
    marginRight:20,
    marginTop:0,
    marginBottom:20
  },
  inputLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    marginTop:20,
    color:colorsLight.secondaryTextColor
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
    marginTop:5,
    marginBottom:20
  },
  forgotPasswordButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
  },
  link: {
    color:btnColors.primary,
    fontSize:18,
    textDecorationLine: 'underline',
  },
  subtitle: {
    color:colorsLight.mainTextColor,
    fontSize:18,
    width:'100%',
    marginBottom:15,
    marginTop:35,
    textAlign:'right'
  },
  confirmBox: {
    backgroundColor: colorsLight.secondaryHighlight,
    padding:20,
    borderRadius:10,
    width:'40%',
  },
  confirmBoxText: {
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:18,
    textAlign:'center'
  }
})

export const updatePasswordLight = StyleSheet.create({
  body: {
    flex:1,
    borderWidth:0,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colorsLight.secondaryBackground,
    borderLeftWidth:10,
    borderLeftColor:colorsLight.secondaryHighlight,
    borderRightWidth:10,
    borderRightColor:colorsLight.secondaryHighlight,
  },
  logo: {
    width:240,
    height:120,
    marginTop:40,
    marginBottom:20
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    width:'40%',
    marginTop:20,
    marginBottom:100,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:16,
    lineHeight:14,
    fontFamily:'Poppins',
    textAlign:'center',
  },
  form: {
    marginLeft:20,
    marginRight:20,
    marginTop:0,
    marginBottom:20
  },
  inputLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    marginTop:20,
    color:colorsLight.secondaryTextColor
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
    marginTop:5,
    marginBottom:30
  },
  forgotPasswordButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
  },
  link: {
    color:btnColors.primary,
    fontSize:18,
    textDecorationLine: 'underline',
  },
  subtitle: {
    color:colorsLight.mainTextColor,
    fontSize:18,
    width:'100%',
    marginBottom:15,
    marginTop:35,
    textAlign:'right'
  },
  confirmBox: {
    backgroundColor: colorsLight.secondaryHighlight,
    padding:20,
    borderRadius:10,
    width:'40%',
  },
  confirmBoxText: {
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:18,
    textAlign:'center'
  }
})

export const updateEmailLight = StyleSheet.create({
  body: {
    flex:1,
    borderWidth:0,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colorsLight.secondaryBackground,
    borderLeftWidth:10,
    borderLeftColor:colorsLight.secondaryHighlight,
    borderRightWidth:10,
    borderRightColor:colorsLight.secondaryHighlight,
  },
  logo: {
    width:240,
    height:120,
    marginTop:40,
    marginBottom:20
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    width:'40%',
    marginTop:20,
    marginBottom:100,
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:16,
    lineHeight:14,
    fontFamily:'Poppins',
    textAlign:'center',
  },
  form: {
    marginLeft:20,
    marginRight:20,
    marginTop:0,
    marginBottom:20
  },
  inputLabel: {
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    marginTop:20,
    color:colorsLight.secondaryTextColor
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
    marginTop:5,
    marginBottom:30
  },
  forgotPasswordButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
  },
  link: {
    color:btnColors.primary,
    fontSize:18,
    textDecorationLine: 'underline',
  },
  subtitle: {
    color:colorsLight.mainTextColor,
    fontSize:18,
    width:'100%',
    marginBottom:15,
    marginTop:35,
    textAlign:'right'
  },
  confirmBox: {
    backgroundColor: colorsLight.secondaryHighlight,
    padding:20,
    borderRadius:10,
    width:'40%',
  },
  confirmBoxText: {
    color:'#fff',
    fontFamily:'Poppins',
    fontSize:18,
    textAlign:'center'
  }
})

export const messagesLight = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20,
    flex:1
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  userListContainer: {
    width:200,
    backgroundColor:colorsLight.mainBackground,
    height:'100%',
  },
  
  chatContainer: {
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    flexDirection:'row',
  },
  userListNone: {
    fontFamily:'Poppins',
    fontSize:14,
    paddingTop:10,
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  chatListContainer: {
    padding:20,
    borderTopColor:colorsLight.headerBorder,
    borderTopWidth:2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  chatListAvatar: {
    width:30,
    height:30,
    borderRadius:30,
    backgroundColor:btnColors.info,
    justifyContent:'center',
    alignItems:'center'
  },
  chatListAvatarImage: {
    width:30,
    height:30,
    borderRadius:30
  },
  chatListText: {
    flex:1,
    marginLeft:10
  },
  chatListTextClient: {
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    lineHeight:14,
  },
  chatListTextMessage: {
    fontFamily:'Poppins',
    fontSize:12,
  },
  infoTitle: {
    textAlign:'center',
    color:colorsLight.mainTextColor,
    fontSize:26,
    padding:20
  },
  infoButtonRow: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  infoButtonTitle: {
    fontFamily:'Poppins',
    fontSize:22,
    color:'#fff'
  },
  chatArea: {
    flex:1,
    width:'100%',
    alignItems:'flex-end',
    flexDirection:'row',
    height:'100%'
  },
  chatAreaHeader: {
    padding:20,
    width:'100%',
    height:75,
    backgroundColor:colorsLight.mainBackground,
    borderBottomWidth:2,
    borderBottomColor:colorsLight.mainTextColor,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  chatAreaHeaderText: {
    fontSize:22,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  chatAreaHeaderRight: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  chatAreaHeaderManageButton: {
    backgroundColor:btnColors.primary,
    borderRadius:25,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5
  },
  chatAreaHeaderManageButtonTitle: {
    fontSize:16,
    color:'#fff',
    fontFamily:'Poppins'
  },
  chatMainContainer: {
    flex:1,
    flexGrow:1,
    width:'100%',
    height:'100%',
    justifyContent:'flex-end',
  },
  chatMain: {
    flexGrow:1,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingRight:10,
    paddingBottom:20,
    paddingLeft:10,
  },
  chatInfoText: {
    textAlign:'center',
    fontSize:16,
    color:colorsLight.secondaryTextColor
  },
  chatInputContainer: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colorsLight.header,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:15,
    paddingTop:15,
    marginRight:0,
  },
  chatInputAttachIconContainer: {
    width:28,
    height:28,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center'
  },
  chatMessageBoxContainer: {
    flex:1
  },
  chatMessageBox: {
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:10,
    padding:10,
    outlineWidth:0
  },
  chatMessageSubmitButtonContainer: {
    paddingLeft:20,
  },
  chatMessageSubmitButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:4,
    paddingBottom:4,

  },
  chatMessageSubmitButtonTitle: {
    fontSize:18,
    fontFamily:'Poppins',
    color:'#fff'
  },
  messageMain: {
    width:'100%',
    marginTop:5,
  },
  messageContainerMe: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  mainMessageMe: {
    padding:10,
    color:'#fff',
    backgroundColor:messageColorsLight.me,
    borderRadius:25,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'center',
    alignSelf:'flex-end',
  },
  messageTextMe: {
    color:'#fff',
    fontFamily:'Poppins',
    width:'100%',
    textAlign:'left'
  },
  messageContainerYou: {
    width:'100%',
    justifyContent:'flex-start',
    flexDirection:'row'
  },
  mainMessageYou: {
    padding:10,
    color:'#fff',
    backgroundColor:colorsLight.mainBackground,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    justifyContent:'flex-start',
    alignItems:'center',
    alignSelf:'flex-start',
  },
  messageNameYou: {
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  messageTextYou: {
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    width:'100%',
    textAlign:'left'
  },
  showAvatarYou: {
    width:50,
    height:50,
    marginRight:10
  },
  avatarYou: {
    width:50,
    height:50,
    borderRadius:60
  },
  timeContainer: {
    padding:10,
    alignItems:'center'
  },
  timeText: {
    fontSize:14,
    fontFamily:'Poppins',
    textAlign:'center'
  },
  attachmentField: {
    backgroundColor:colorsLight.header,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopRightRadius:10,
  },
  attachButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
    flex:1,
  },
  attachButtonContainer: {
    flex:1,
    paddingRight:10
  },
  moreComingButton: {
    borderRadius:10,
    flex:1,
  },
  moreComingButtonContainer: {
    paddingLeft:10,
    flex:1
  },
  attachErrorContainer:{
    height:39,
    flexDirection:'row',
    alignItems:'center',
  },
  attachError: {
    color:btnColors.danger,
    fontFamily:'Poppins',
    fontSize:16,
  },
  resetAttachButton: {
    backgroundColor:btnColors.primary,
    borderRadius:10,
    padding:8,
    marginLeft:10
  },
  resetAttachButtonTitle: {
    fontSize:16
  },
  attachmentFieldImageText: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16,
  },
  attachmentImagePreview: {
    width:100,
    height:100
  },
  photoOverlay: {
    flex:1,
    height:'100%',
    width:'100%',
  },
  createGroupContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
  createGroupButton: {
    marginBottom:20,
  },
  promptMain: {
    backgroundColor:colorsLight.mainBackground,
    padding:20,
    borderRadius:25,
    alignItems:'center'
  },
  createGroupHeader: {
    textAlign:'center',
    fontSize:20,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    marginBottom:20
  },
  createGroupNameInput: {
    marginBottom:20,
    backgroundColor:colorsLight.secondaryBackground,
    padding:10,
    borderRadius:10,
    fontSize:18,
    outlineWidth:0,
    width:'80%'
  },
  createGroupSpacer: {
    width:'80%',
    height:2,
    marginBottom:20,
    backgroundColor:colorsLight.mainTextColor
  },
  createGroupAdded: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:120,
    width:'100%',
    paddingBottom:20
  },
  createGroupAddedBubbleContainer: {
    paddingLeft:5,
    paddingRight:5
  },
  createGroupAddedBubbleUser: {
    backgroundColor:colorsLight.mainTextColor,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  },
  createGroupAddedBubbleTextInner: {
    color:colorsLight.mainBackground,
    fontFamily:'Poppins',
    fontSize:22,
    textAlign:'center'
  },
  createGroupAddedBubbleTextBottom: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    textAlign:'center',
    fontFamily:'PoppinsSemiBold'
  },
  noClientsSelected: {
    fontFamily:'Poppins',
    fontSize:14,
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  createGroupAddContainer: {
    width:'80%',
    flex:1
  },
  createGroupAddHeader: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:colorsLight.headerBorder,
    borderRadius:25,
    paddingRight:10,
    marginBottom:10
  },
  createGroupAddHeaderHighlight: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:colorsLight.mainTextColor,
    borderRadius:25,
    paddingRight:10,
    marginBottom:10
  },
  createGroupAddInput: {
    flex:1,
    marginLeft:4,
    fontSize:16,
    color:colorsLight.mainTextColor,
    outline:'none',
    paddingLeft:5,
    paddingTop:5,
    paddingBottom:5,
    outlineWidth:0,
    width:'100%'
  },
  createGroupAddIcon: {
    width:34,
    justifyContent:'center',
    alignItems:'center'
  },
  createGroupClient: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    borderBottomWidth:2,
    borderBottomColor:colorsLight.headerBorder  
  },
  createGroupList: {
    paddingTop:0,
  },
  createGroupClientAvatar: {
    width:50,
    height:50,
    borderRadius:50
  },
  createGroupClientNameContainer: {
    flex:1,
    marginLeft:10,
  },
  createGroupClientName: {
    fontSize:18,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  },
  createGroupClientButton: {
    borderRadius:25,
    backgroundColor:btnColors.success,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:3
  },
  createGroupClientButtonTitle: {
    fontSize:14,
    fontFamily:'Poppins',
    color:'#fff'
  },
  createGroupError: {
    fontSize:16,
    color:btnColors.danger,
    fontFamily:'Poppins',
    textAlign:'center',
    padding:5
  },
  chatSummary: {
    width:320,
    height:'92%',
    backgroundColor:colorsLight.mainBackground,
    marginLeft:20,
    marginRight:20,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    padding:20,
    alignItems:'center'
  },
  chatSummaryMainImage: {
    width:70,
    height:70,
    marginTop:-55,
    borderRadius:40,
    backgroundColor:btnColors.info,
    justifyContent:'center',
    alignItem:'center'
  },
  groupMembers: {
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
    paddingTop:10,
    width:'100%',
    marginBottom:10
  },
  groupMembersTitle: {
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    borderBottomColor:colorsLight.mainTextColor,
    borderBottomWidth:2,
    textAlign:'center',
    width:'100%',
    marginBottom:5,
  },
  groupOwner: {
    alignItems:'center',
  },
  groupOwnerTitle: {
    textAlign:'center',
    fontSize:18,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  groupOwnerAvatarContainer: {
    borderRadius:100,
    padding:5,
    backgroundColor:colorsLight.mainTextColor
  },
  groupOwnerAvatar: {
    width:90,
    height:90,
    borderRadius:100,
  },
  groupManageButton: {
    backgroundColor:colorsLight.mainBackground,
    borderWidth:1,
    borderColor:btnColors.primary,
    padding:5,
    marginTop:10,
  },
  groupManageButtonTitle: {
    color:btnColors.primary,
    fontSize:14
  },
  groupTooltipText: {
    fontSize:12,
    color:colorsLight.mainBackground
  },
  chatSummaryTitle: {
    fontSize:25,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    textAlign:'center'
  },
  chatAreaHeaderAvatars: {
    flexDirection:'row',
    alignItems:'center',
  },
  chatAreaHeaderAvatar: {
    width:45,
    height:45,
    borderRadius:50,
    marginRight:5,
  },
  chatAreaHeaderMoreText: {
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    fontSize:16,
    textAlign:'center',
    marginRight:5,
    width:'100%'
  },
  userListTitleContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
  },
  userListTitle: {
    fontSize:22,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  templateTitleContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    borderTopWidth:2,
    borderTopColor:colorsLight.mainTextColor,
    paddingTop:10,
    marginBottom:10
  },
  templateTextTitle: {
    fontSize:22,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
  },
  templateMainHeader: {
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    marginBottom:20
  },
  templateMainHeaderTitle: {
    fontSize:20,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold',
    marginBottom:0
  },
  templateMainDesc: {
    fontSize:16,
    color:colorsLight.mainTextColor,
    fontFamily:'Poppins',
    marginBottom:0,
    textAlign:'center'
  },
  templateMainSection: {
    padding:20,
    marginBottom:20,
    width:'100%',
    backgroundColor:colorsLight.secondaryBackground,
    borderRadius:20,
  },
  templateMainSubtitle: {
    fontSize:20,
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor
  },
  templateMessageInput: {
    backgroundColor:colorsLight.mainBackground,
    padding:10,
    color:colorsLight.mainTextColor,
    borderRadius:25,
    marginTop:10,
    marginBottom:20,
    outlineWidth:0
  },
  templateMessageRow: {
    flexDirection:'row',
    alignItems:'flex-end'
  },
  templateMessageContainer: {
    flex:1,
    marginRight:15
  },
  templateMessageSave: {
    backgroundColor:btnColors.success
  },
  templateMessageSaveTitle: {
    color:colorsLight.mainTextColor,
    fonttemplateTitleContainerFamily:'Poppins',
    color:'#fff'
  },
  templateMainExisting: {
    flex:1,
    width:'100%'
  },
  templateRowList: {
    flex:1,
    alignItems:'flex-start'
  },
  templateContainer: {
    width:'100%',
    alignItems:'flex-start'
  },
  templateRow: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
  },
  deleteTemplatesButtonf: {
    backgroundColor:btnColors.danger,
    marginRight:10,
    padding:5,
  },
  deleteTemplatesButtonTitle: {
    fontFamily:'Poppins',
    fontSize:14,
    color:'#fff'
  }
})

export const onboardingStylesLight = StyleSheet.create({
  container: {
    flex: 1,
  },
  link:{
    textDecorationLine: 'underline',
    color:btnColors.primary
  },
  alertSuccess: {
    backgroundColor:boxColors.success,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginBottom:20
  },
  alertDanger: {
    backgroundColor:boxColors.danger,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginBottom:20
  },
  alertText: {
    fontFamily:'Poppins',
    fontSize:16,
    color:'#fff'
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20,
    flex:1
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
  promptListContainer: {
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
    flex:1,
    alignItems:'center'
  },
  stepText: {
    width:'100%',
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
  },
  promptHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:5,
    width:'100%'
  },
  promptHeaderTitle: {
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:22,
    flex:1
  },
  promptHeaderDesc: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16,
    paddingLeft:10,
  },
  promptHeaderCount: {
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    fontSize:16
  },
  promptsRow: {
    paddingTop:10,
    flexDirection:'column',
    alignItems:'center',
    flex:1,
    width:'100%'
  },
  promptsData: {
    flex:1,
    width:'100%'
  },
  selectedPrompt: {
    width:'100%',
    marginRight:10,
    height:130,
    borderWidth:1,
    borderRadius:10,
    borderColor:colorsLight.headerBorder,
    justifyContent:'space-between',
    alignItems:'center',
  },
  selectedPromptHeader: {
    textAlign:'center',
    fontFamily:'PoppinsSemiBold',
    color:colorsLight.mainTextColor,
    fontSize:16,
    padding:7,
    width:'100%',
    backgroundColor:colorsLight.header
  },
  selectedPromptDesc: {
    fontSize:14,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor,
    textAlign: 'center',
    marginTop:3
  },
  selectedPromptTitle: {
    fontFamily:'PoppinsSemiBold',
    fontSize:14,
    color:colorsLight.mainTextColor,
    textAlign: 'center'
  },
  addPromptContainer: {
    width:200,
    height:200,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    backgroundColor:colorsLight.header,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },
  promptAddButtonTitle: {
    fontSize:14,
    fontFamily:'Poppins'
  },
  promptAddButton: {
    backgroundColor:btnColors.primary,
    borderRadius:50,
    padding:5,
  },
  promptAddButtonContainer: {
    width:'70%'
  },
  innerRow: {
    flexDirection:'column',
    alignItems:'center',
    flex:1
  },
  taskBox: {
    height:200,
    borderWidth:1,
    borderColor:colorsLight.headerBorder,
    borderRadius:10,
    overflow:'hidden',
    marginBottom:10,
    width:'100%'
  },
  taskPreview: {
    flex:1,
  },
  taskPreviewHeader: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:colorsLight.headerBorder,
    borderBottomWidth:1
  },
  taskPreviewHeaderIcon: {
    padding:10,
    borderRightColor:colorsLight.headerBorder,
    borderRightWidth:1
  },
  taskPreviewTitle: {
    flex:1,
    marginLeft:10,  
    fontSize:13,
    color:colorsLight.mainTextColor,
    fontFamily:'PoppinsSemiBold'
  },
  taskPreviewText: {
    fontSize:14,
    padding:10,
    flex:1,
    color:colorsLight.mainTextColor,
    textAlign:'center',
    fontFamily:'Poppins'
  },
  taskWarningText: {
    fontSize:14,
    padding:10,
    color:btnColors.danger,
    textAlign:'center',
    fontFamily:'Poppins'
  },
  taskSelectedTitle: {
    color:btnColors.success,
    fontFamily:'Poppins',
    fontSize:16
  },
  taskSelectedButton: {
    backgroundColor:colorsLight.mainBackground,
  },
  taskSelectTitle: {
    fontFamily:'Poppins',
    fontSize:16,
    color:'#fff'
  },
  helpBox: {
    width:400,
    height:200,
    justifyContent:'center',
    alignItems:'center'
  },
  helpBoxText: {
    fontFamily:'Poppins',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  helpBoxError: {
    fontFamily:'PoppinsSemiBold',
    textAlign:'center',
    fontSize:14,
    color:colorsLight.mainTextColor
  },
  searchHighlight: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:colorsLight.mainTextColor,
    borderRadius:25,
    paddingRight:10,
    marginTop:10,
    marginBottom:10,
    width:'100%'
  },
  searchInput: {
    flex:1,
    marginLeft:4,
    fontSize:16,
    color:colorsLight.mainTextColor,
    outline:'none',
    paddingLeft:5,
    paddingTop:5,
    paddingBottom:5,
    outlineWidth:0,
    width:'100%'
  },
  searchIcon: {
    width:34,
    justifyContent:'center',
    alignItems:'center'
  },
  saveOnboardingSpacer: {
    flex:1,
  },
  saveOnboardingInfo: {
    flex:3,
    fontSize:16,
    fontFamily:'Poppins',
    color:colorsLight.mainTextColor
  }
})

export const basic = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    flexDirection:'row',
  },
  scrollView: {
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  body: {
    flex:1,
    borderWidth:0,
  },
  bodyContainer: {
    backgroundColor:colorsLight.mainBackground,
    borderRadius:10,
    padding:20,
    marginBottom:20,
    flex:1
  },
  bodyHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    borderRadius:10,
    backgroundColor:colorsLight.mainBackground,
    marginBottom:20,
  },
  bodyTitleGroup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bodyTitle: {
    color:colorsLight.darkGray,
    fontSize:26,
    marginRight:10,
    fontFamily:'PoppinsSemiBold'
  },
  bodyDesc: {
    color:colorsLight.darkGray,
    fontSize:14,
    lineHeight:14,
    fontFamily:'Poppins'
  },
})
