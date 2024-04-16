import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ActivityHistoryScreen = () => {
  
  const activityHistory = [
    { id: 1, title: "Logged in", timestamp: "2022-04-10 09:30 AM" },
    { id: 2, title: "Posted a new photo", timestamp: "2022-04-11 02:15 PM" },
    { id: 3, title: "Liked a post", timestamp: "2022-04-12 11:00 AM" },
    { id: 4, title: "Commented on a post", timestamp: "2022-04-12 02:30 PM" },
    { id: 5, title: "Updated profile", timestamp: "2022-04-13 10:45 AM" },
    { id: 6, title: "Changed password", timestamp: "2022-04-13 03:20 PM" },
  ];

  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Activity History</Text>
      <FlatList
        data={activityHistory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
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
  list: {
    width: "100%",
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 14,
    color: "#666",
  },
});

export default ActivityHistoryScreen;
