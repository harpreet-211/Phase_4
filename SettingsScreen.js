import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

const SettingsScreen = () => {
  const [muteNotifications, setMuteNotifications] = useState(false);
  const [muteSound, setMuteSound] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleMuteNotifications = () => {
    setMuteNotifications((prev) => !prev);
  };

  const toggleMuteSound = () => {
    setMuteSound((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  const handleResetSettings = () => {
    // Reset all settings to default values
    setMuteNotifications(false);
    setMuteSound(false);
    setDarkModeEnabled(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.settingItem}>
        <Text>Mute Notifications</Text>
        <Switch
          value={muteNotifications}
          onValueChange={toggleMuteNotifications}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>Mute Sound</Text>
        <Switch value={muteSound} onValueChange={toggleMuteSound} />
      </View>
      <View style={styles.settingItem}>
        <Text>Enable Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
        />
      </View>
      <TouchableOpacity onPress={handleResetSettings}>
        <Text style={styles.resetButton}>Reset Settings</Text>
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
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 10,
  },
  resetButton: {
    color: "red",
    fontSize: 16,
    marginTop: 20,
  },
});

export default SettingsScreen;
