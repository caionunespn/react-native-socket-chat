import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {subscribeToMessages, sendNewMessage} from '../../providers/Socket';
import styles from './styles';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const user = {
    id: 1,
    name: 'Caio Nunes',
  };

  useEffect(() => {
    subscribeToMessages(setMessages);
    console.log(messages);
  }, [messages]);

  function handleNewMessage() {
    if (message.length <= 0) return;

    const toSendMessage = {
      sender_id: user.id,
      sender: user.name,
      description: message,
      createdAt: `${addZero(new Date().getHours())}:${addZero(
        new Date().getMinutes(),
      )}`,
    };

    sendNewMessage(toSendMessage);
    setMessage('');
  }

  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.select({
            ios: 'padding',
            android: null,
          })}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Image
                style={styles.headerImage}
                source={{
                  uri: 'https://api.adorable.io/avatars/285/sergiomaland.png',
                }}
              />
              <Text style={styles.headerName}>Caio Nunes</Text>
            </View>
            <ScrollView contentContainerStyle={styles.chatContainer}>
              {messages.map((chatMessage, index) => (
                <View
                  style={[
                    styles.chatBubbleContainer,
                    chatMessage.sender_id === user.id &&
                      styles.myChatBubbleContainer,
                  ]}
                  key={index}>
                  <Text style={styles.chatBubbleSenderName}>
                    {chatMessage.sender}
                  </Text>
                  <View
                    style={[
                      styles.chatBubble,
                      chatMessage.sender_id === user.id && styles.myChatBubble,
                    ]}>
                    <Text
                      style={[
                        styles.chatBubbleText,
                        chatMessage.sender_id === user.id &&
                          styles.myChatBubbleText,
                      ]}>
                      {`${chatMessage.description}   `}
                      <Text
                        style={[
                          styles.chatBubbleTime,
                          chatMessage.sender_id === user.id &&
                            styles.myChatBubbleTime,
                        ]}>
                        {chatMessage.createdAt}
                      </Text>
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.messageInput}
                returnKeyType="send"
                onSubmitEditing={handleNewMessage}
                placeholder="Digite uma mensagem..."
                value={message}
                onChangeText={(text) => setMessage(text)}
              />
              <TouchableOpacity
                style={styles.inputSendButton}
                onPress={handleNewMessage}>
                <Ionicons
                  name="md-send"
                  size={16}
                  color="#FFFFFF"
                  style={{marginLeft: 4}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
