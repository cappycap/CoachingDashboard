import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState, useRef, useContext } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { messagesLight, colorsLight, innerDrawerLight, btnColors, boxColors } from '../Scripts/Styles.js'
import { allClientsDark, colorsDark, innerDrawerDark } from '../Scripts/Styles.js'
import { useLinkTo } from '@react-navigation/native'
import LoadingScreen from '../Scripts/LoadingScreen.js'
import ActivityIndicatorView from '../Scripts/ActivityIndicatorView.js'
import { TextInput } from 'react-native-web'
import { set, get, getTTL, ttl } from './Storage.js'
import { Icon, Button, Chip } from 'react-native-elements'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { postMessage, getMessageInfo, parseSimpleDateText, sqlToJsDate, dateToSql, parseDateText } from './API.js'
import { Dropdown, Accordion, Radio, Checkbox, Popup } from 'semantic-ui-react'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import './DatePickerClients/DatePicker.css'
import JoditEditor from "jodit-react";
import { useSpring, animated } from 'react-spring';
const io = require('socket.io-client');

import userContext from './Context.js'

var socket = io("https://messages.coachsync.me/")

export default function Messages() {


  // Hooks.
  const linkTo = useLinkTo()
  const user = useContext(userContext)
  const scrollViewRef = useRef();
  var messagesEnd = useRef();

  // Styles.
  const [styles, setStyles] = useState(messagesLight)
  const [colors, setColors] = useState(colorsLight)

  // Main stage controls.
  const [showUserList, setShowUserList] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)

  // Main variables.
  const [coach, setCoach] = useState(user)

  // User list variables.
  const [userListLoading, setUserListLoading] = useState(true)
  const [userList, setUserList] = useState([])

  // Create group variables.
  const [showCreateGroup, setShowCreateGroup] = useState(false)

  // Add template variables.
  const [showAddTemplate, setShowAddTemplate] = useState(false)
  const [templateMessage, setTemplateMessage] = useState('')
  
  // Chat variables.
  const [chatLoading, setChatLoading] = useState(true)
  const [chatIndex, setChatIndex] = useState(-1)
  const [messages, setMessages] = useState([])
  const [scrollHeight, setScrollHeight] = useState(null)
  const [templates, setTemplates] = useState([])
  const [isSending, setIsSending] = useState(false)
  const [showAttachmentField, setShowAttachmentField] = useState(false)

  // Reaction variables.
  const [showReactionMenu, setShowReactionMenu] = useState(false)
  const [chosenReaction, setChosenReaction] = useState('')

  // Helper functions.
  const generateChatName = (list, index) => {
    // Generate chat name.
    var name = ''
    if (list.length > 2) {
      // TODO: Generate list of names string.
    } else {
      name = list[index].FirstName + ' ' + list[index].LastName
    }
    return name
  }


  // User list functions. 
  const openChat = (index) => {
    setChatIndex(index)
  }

  // Create group functions.

  // Add template functions.

  // Chat functions.
  const checkMessage = (t) => {
    if (t.length < 1000) {
      var newMs = JSON.parse(JSON.stringify(messages))
      newMs[chatIndex] = t
      setMessages(newMs)
    }
  }

  const sendMessage = async () => {
    setIsSending(true)
    var posted = await postMessage(userList[chatIndex].Id, messages[chatIndex], coach.Id, coach.Token, 'Message from Coach')
    if (posted) {
      // Send test emission.
      console.log('Sending socket emit...')
      socket.emit('sent-message', { recepients:'[3,6]', conversationId:'3' })
      // Add message locally.
      var newUserList = JSON.parse(JSON.stringify(userList))
      var conversation = newUserList[chatIndex]
      conversation.LastSenderId = coach.Id
      var date = dateToSql(new Date())
      conversation.LastSenderCreated = date
      conversation.LastSenderMessage = messages[chatIndex]
      // TODO: Add Image

      // Calculate TimeAbove if applicable.
      var prevDate = sqlToJsDate(userList[chatIndex].Messages[userList[chatIndex].Messages.length-1].Created)
      var now = new Date()
      var timeAbove = ''
      if ((now - prevDate) > (60*60*1000)) {
        timeAbove = parseDateText(now)
      }
      var m = {
        Text: messages[chatIndex],
        UserId: coach.Id,
        Image: '',
        Created: date,
        Sent:1,
        ConversationId: userList[chatIndex].ConversationId,
        TimeAbove: timeAbove
      }
      conversation.Messages.unshift(m)
      newUserList[chatIndex] = conversation
      setUserList(newUserList)
      messagesEnd.current.scrollIntoView({ behavior: "smooth" });
      setIsSending(false)
    } 
  }

  const attachImage = () => {

  }

  const removeImage = () => {
    
  }

  // Reaction functions.

  // Main functions.
  const refreshChatList = async () => {
    var get = await getMessageInfo(coach.Id, coach.Token)
    console.log('data:', get)
    setUserList(get[0])
    setTemplates(get[1])
    setUserListLoading(false)
    setChatLoading(false)
    // Build message arrays.
    var ms = []
    for (var i = 0; i < get[0].length; i++) {
      ms.push('')
    }
    setMessages(ms)
    setChatIndex(0)
  }

  const configureSocket = () => {

    // Mount primary socket.
    console.log('Loading socket...')

    socket.on('connect', () => {
      console.log('Socket connected.')
    })

    socket.on('get-conversations', (data) => {
      console.log('Received socket emission...')
      refreshChatList()
    })

    // For when the window closes.
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault()
      console.log('Closing socket...')
      socket.disconnect()
    })

  }

  useEffect(() => {
    console.log('Welcome to messages.')
    if (coach != null) {
      configureSocket()
      refreshChatList()
    }
  }, [])

  return (<View style={styles.container}>
    <View style={styles.userListContainer}>
      <Text style={styles.userListTitle} onPress={() => setChatIndex(-1)}>Messages</Text>
      {userListLoading && (<View>
        <ActivityIndicatorView size={'small'} />
      </View>) || (<View>
        {userList.length == 0 && (<View>
          <Text style={styles.userListNone}>No conversations yet.</Text>
        </View>) || (<View>
          {userList.map((chat, index) => {

            var name = generateChatName(chat.ClientData, 0)

            // Generate message.
            var message = chat.LastSenderMessage
            if (message.length > 14) {
              message = chat.LastSenderMessage.slice(0, 14) + '...'
            } else if (message.length == 0) {
              message = 'No messages yet.'
            }

            // Add current message highlighting.
            var currentHighlight = {}
            if (index == chatIndex) {
              currentHighlight = {backgroundColor:colorsLight.secondaryBackground}
            }

            // Add bottom border.
            var borderBottom = {}
            if (index == userList.length-1) {
              borderBottom = {
                borderBottomColor:colorsLight.headerBorder,
                borderBottomWidth:2,
              }
            }

            return (<TouchableOpacity key={'chat_'+index} style={[styles.chatListContainer,borderBottom,currentHighlight]}
              onPress={() => openChat(index)}
            >
              <View style={styles.chatListAvatar}>
                <Image
                  source={{ uri: chat.ClientData[0].Avatar }}
                  style={styles.chatListAvatarImage}
                />
              </View>
              <View style={styles.chatListText}>
                <Text style={styles.chatListTextClient}>{name}</Text>
                <Text style={styles.chatListTextMessage}>{message}</Text>
              </View>
            </TouchableOpacity>)
          })}
        </View>)}
      </View>)}
    </View>
    <View style={styles.chatContainer}>
      {chatLoading && (<View>
        <ActivityIndicatorView />
      </View>) || (<View style={styles.chatContainer}>
        {userList.length > 0 && (<>
          {chatIndex == -1 && (<View>
            <Text style={styles.infoTitle}>Select a chat to the left, or:</Text>
            <View style={styles.infoButtonRow}>
              <Button 
                title='Create Group'
                icon={{
                  name: 'people',
                  size: 26,
                  type: 'ionicon',
                  color:'#fff',
                  style: {
                    marginTop:0
                  }
                }}
                buttonStyle={styles.createGroupChatButton}
                titleStyle={styles.infoButtonTitle}
                onPress={() => setShowCreateGroup(true)}
              />
              <Button 
                title='Add Templates'
                icon={{
                  name: 'chatbubble',
                  size: 26,
                  type: 'ionicon',
                  color:'#fff',
                  style: {
                    marginTop:-1
                  }
                }}
                buttonStyle={styles.addDMTemplatesButton}
                titleStyle={styles.infoButtonTitle}
                onPress={() => setShowAddTemplate(true)}
              />
              </View>
          </View>) || (<View style={styles.chatArea}>
            <View style={styles.chatMainContainer}>
              {userList[chatIndex].Messages.length > 0 && (<ScrollView contentContainerStyle={[styles.chatMain,{justifyContent:'flex-end',flexGrow:1}]}
              ref={scrollViewRef}
              onContentSizeChange={(width, height) => {
                setScrollWidth((width-20)-(width/5))
                setTimeout(() => {
                  scrollViewRef.current.scrollToEnd({animated: true})
                }, 50)
              }}>
                {userList[chatIndex].Messages.map((message, index) => {

                  if (message.UserId == coach.Id) {

                    // Me.
                    return (<View key={'messages_'+message.Id} style={styles.messageMain}>
                      {message.TimeAbove.length > 0 && (<View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{message.TimeAbove}</Text>
                      </View>)}
                      <View key={'messages_'+message.Id} style={styles.messageContainerMe}>
                        <View style={styles.messageMe}>
                          <View style={styles.messageInfoMe}>
                            
                          </View>
                          <View style={[styles.mainMessageMe,{maxWidth:scrollWidth}]}>
                            <Text style={styles.messageTextMe}>{message.Text}</Text>
                          </View>
                          <View style={styles.messageReactionsMe}>

                          </View>
                        </View>
                      </View>
                    </View>)

                  } else {

                    // Not me.
                    return (<View key={'messages_'+message.Id} style={styles.messageMain}>
                      {message.TimeAbove.length > 0 && (<View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{message.TimeAbove}</Text>
                      </View>)}
                      <View style={styles.messageContainerYou}>
                        <View style={styles.showAvatarYou}>
                          {message.ShowAvatar && (<Image 
                            source={{ uri: message.TheirAvatar }}
                            style={styles.avatarYou}
                          />)}
                        </View>
                        <View style={styles.messageYou}>
                          {message.ShowAvatar && (<View>
                            <Text style={styles.messageNameYou}>{message.TheirHeaderText}</Text>
                          </View>)}
                          <View style={[styles.mainMessageYou,{maxWidth:scrollWidth}]}>
                            <Text style={styles.messageTextYou}>{message.Text}</Text>
                          </View>
                          <View style={styles.messageReactionsYou}>

                          </View>
                        </View>
                      </View>
                    </View>)

                  }

                })}
                {isSending && (<ActivityIndicatorView />)}
                <div style={{ float:"left", clear: "both" }}
                  ref={messagesEnd}>
                </div>
              </ScrollView>) || (<View style={[styles.chatMain,{paddingTop:20}]}>
                <Text style={styles.chatInfoText}>No messages yet.</Text>
              </View>)}
              {showAttachmentField && (<View style={styles.attachmentField}>
                <View style={styles.attachmentFieldRemoveIcon}>
                  <Icon
                    name='close'
                    type='ionicon'
                    size={28}
                    color={btnColors.danger}
                    style={{}}
                    onPress={() => removeImage()}
                  />
                </View>
                <View style={styles.attachmentFieldImagePreview}>
                  
                </View>
              </View>)}
              <View style={styles.chatInputContainer}>
                <TouchableOpacity style={styles.chatInputAttachIconContainer}>
                  <Icon
                    name='document-attach'
                    type='ionicon'
                    size={28}
                    color={colors.mainTextColor}
                    style={{}}
                    disabled={showAttachmentField}
                    onPress={() => attachImage()}
                  />
                </TouchableOpacity>
                <View style={styles.chatMessageBoxContainer}>
                  <TextInput 
                    style={[styles.chatMessageBox,{ height: scrollHeight }]}
                    placeholder='Message...'
                    multiline={true}
                    numberOfLines={1}
                    onChangeText={(t) => checkMessage(t)}
                    value={messages[chatIndex]}
                    onChange={(e) => {
                      console.log(e.currentTarget.value.length)
                      if (e.currentTarget.value.length < 4) {
                        setScrollHeight(null)
                      } else if (e.target.scrollHeight - scrollHeight > 50) {
                        setScrollHeight(e.target.scrollHeight)
                      }
                    }}
                  />
                </View>
                <View style={styles.chatMessageSubmitButtonContainer}>
                  <Button 
                    title='Send'
                    buttonStyle={styles.chatMessageSubmitButton}
                    titleStyle={styles.chatMessageSubmitButtonTitle}
                    onPress={() => sendMessage()}
                    disabled={isSending}
                  />
                </View>
              </View>
            </View>
            <View style={styles.templateList}>
              <Text style={styles.templateTextTitle}>Templates</Text>
              {templates.length > 0 && (<ScrollView>
              
              </ScrollView>) || (<View>
              <Text style={styles.chatInfoText}>No templates yet.</Text>
              </View>)}
            </View>
          </View>)}
        </>) || (<View>
          <Text style={styles.infoTitle}>Add clients to message.</Text>
        </View>)}
      </View>)}
    </View>
  </View>)
}
