import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Alert, Image } from "react-native";
import SignUpScreen from "./SignUpScreen";
import Calendar from '../assets/Calendar.png';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false); 

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      // Implement login logic here
      console.log("Login credentials", { email, password });
      // Usually, you would send these credentials to your backend server for authentication

      // Simulating successful login for demonstration purposes
      setIsLoggedIn(true);
      setLogoVisible(true); // Show logo on successful login
    } else {
      Alert.alert("Invalid Input", "Please check your email and password");
    }
  };

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const navigateToLogin = () => {
    setShowSignUp(false);
  };

  if (showSignUp) {
    return <SignUpScreen navigateToLogin={navigateToLogin} />;
  }

  // Conditional rendering for the welcome message and image
  if (isLoggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to Study Sync!!</Text>
          {logoVisible && <Image source={{ uri: 'https://th.bing.com/th/id/OIP.w4tIwy-bvt7mTKj3M5qxoAHaE0?rs=1&pid=ImgDetMain' }} style={styles.logo} />}
        </View>
        {/* Additional content for logged-in user */}
        <Text style={styles.loggedInText}>Let's get started!</Text>
        <Text style={styles.loggedInText}>Here is Your today's Schedule. Have a great day!!</Text>
        <Text style={styles.loggedInAsText}>Logged in as: {email}</Text>
        {/* Add image from assets below */}
        <Image source={Calendar} style={styles.calendarImage} />
        {/* Add more content here as needed */}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to Study Sync!!</Text>
      </View>
      <Image source={{ uri: 'https://th.bing.com/th/id/OIP.w4tIwy-bvt7mTKj3M5qxoAHaE0?rs=1&pid=ImgDetMain' }} style={styles.image} />
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        <Button title="Submit" onPress={handleLogin} />
        <Text style={[styles.signupLink, { textAlign: "center" }]} onPress={handleSignUp}>Don't have an account? Sign Up</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  calendarImage: {
    width: 350, 
    height: 400, 
    resizeMode: "cover",
    marginTop: 20, 
  },
  loggedInText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loggedInAsText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },
  loginText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
  signupLink: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default LoginPage;
