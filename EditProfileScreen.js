import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const EditProfileScreen = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeEmail = () => {
    // Implement logic to change email
    console.log("Changing email to", newEmail);
  };

  const handleResetPassword = () => {
    // Implement logic to reset password
    console.log("Resetting password");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Current Email"
        editable={false}
      />
      <TextInput
        style={styles.input}
        value={newEmail}
        onChangeText={setNewEmail}
        placeholder="New Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleChangeEmail}>
        <Text style={styles.buttonText}>Change Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
