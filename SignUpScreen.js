import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";
import Calendar from '../assets/Calendar.png';

const SignUpScreen = ({ navigateToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false); 

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = () => {
    let isValid = true;

    // Name validation
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

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
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Confirm Password validation
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (isValid) {
      // Implement signup logic here
      console.log("Signup credentials", { name, email, password });
      // Usually, you would send these credentials to your backend server for user registration

      // Set the sign-up status to true
      setIsSignedUp(true);
    } else {
      Alert.alert("Invalid Input", "Please check your input fields");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Conditional rendering for displaying welcome message and image upon successful sign-up */}
        {isSignedUp ? (
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome to Study Sync, {name}!</Text>
            <Text style={styles.loggedInText}>Let's get started!</Text>
            <Text style={styles.loggedInText}>Here is Your today's Schedule. Have a great day!!</Text>
            <Text style={styles.loggedInAsText}>Logged in as: {email}</Text>
            {/* Add image from assets */}
            <Image source={Calendar} style={styles.calendarImage} />
            {/* Add more content here as needed */}
          </View>
        ) : (
          <>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome to Study Sync!!</Text>
            </View>
            <Image source={{ uri: 'https://th.bing.com/th/id/OIP.w4tIwy-bvt7mTKj3M5qxoAHaE0?rs=1&pid=ImgDetMain' }} style={styles.image} />
            <Text style={styles.signupText}>Sign Up</Text>
            
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              {!!nameError && <Text style={styles.errorText}>{nameError}</Text>}
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
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
              {!!confirmPasswordError && (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              )}
              <Button title="Sign Up" onPress={handleSignUp} />
              <Text style={styles.loginLink} onPress={navigateToLogin}>Already have an account? Login</Text>
            </View>
          </>
        )}
      </ScrollView>
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
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },
  signupText: {
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
    marginBottom: 10,
  },
  loginLink: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
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
  calendarImage: {
    width: 350,
    height: 400,
    resizeMode: "cover",
    marginTop: 20, // Added margin top
  },
});

export default SignUpScreen;
