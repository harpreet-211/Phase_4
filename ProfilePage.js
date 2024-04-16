import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import LoginPage from './LoginPage';
import ActivityHistoryScreen from './ActivityHistoryScreen'; // Step 1: Import ActivityHistoryScreen

const ProfilePage = ({ navigation }) => {
  const [userName, setUserName] = React.useState('John Doe');
  const [userEmail, setUserEmail] = React.useState('johndoe@gmail.com');
  const userAvatar = 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png';

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out user");
    // Navigate back to the login page
    navigation.navigate("Home");
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleViewActivityHistory = () => {
    navigation.navigate('ActivityHistory'); // Step 2: Navigate to ActivityHistoryScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={{ uri: userAvatar }} style={styles.avatar} />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userName}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userEmail}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleViewActivityHistory}>
          <Text style={styles.buttonText}>Activity History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSettings}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  options: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
