import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { id: messages.length, text: inputText, sender: 'Me' }]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
        style={styles.messageList}
        inverted // To display messages from bottom to top
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  messageContainer: {
    marginBottom: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
