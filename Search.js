import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity, Image, Linking } from 'react-native';

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Dummy data for courses and videos
  const courseAndVideoData = [
    { id: '1', title: 'React Native Basics', type: 'course', image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '2', title: 'JavaScript Fundamentals', type: 'course', image: 'https://fthmb.tqn.com/_P_IpRezcdFY2uZZNjKtLpyj2zA=/1500x1000/filters:fill(auto,1)/JavaScript-58acbb8a3df78c345bad32c2.jpg', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '3', title: 'Node.js for Beginners', type: 'course', image: 'https://i.ytimg.com/vi/C7TFgfY7JdE/maxresdefault.jpg', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '4', title: 'HTML and CSS Crash Course', type: 'course', image: 'https://i2.wp.com/www.globalwireonline.org/wp-content/uploads/2014/05/html5-css3.png', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '5', title: 'React Native Tutorial', type: 'video', image: 'https://cdn-images-1.medium.com/max/947/1*3_h5fHumgtGtL0cytrRx9w.png', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '6', title: 'JavaScript Tutorial', type: 'video', image: 'https://ictacademy.com.ng/wp-content/uploads/2020/02/92.-JavaScript-logo.png', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '7', title: 'Node.js Tutorial', type: 'video', image: 'https://yourserveradmin.com/wp-content/uploads/2018/04/node.jpg', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '8', title: 'HTML and CSS Tutorial', type: 'video', image: 'https://www.zuaneducation.com/blog/wp-content/uploads/2017/11/html-css.png', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '9', title: 'Python Programming', type: 'course', image: 'https://raspberry-valley.azurewebsites.net/img/Python-01.jpg', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
    { id: '10', title: 'SQL Fundamentals', type: 'course', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348441704i/5127478._UY630_SR1200,630_.jpg', url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk&pp=ygUxY29kaW5nIGFsbCBjb3Vyc2VzIHJlYWN0ZSBqYXZhc2NycGl0IGh0bWwgY3NzIHNxbA%3D%3D' },
  ];

  useEffect(() => {
    // Initialize suggestions with all course data
    setSuggestions(courseAndVideoData);
  }, []);

  const handleSearch = () => {
    // Filter the data based on the search query
    const filteredData = courseAndVideoData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (item.type === 'course' || item.type === 'video')
    );
    setSuggestions(filteredData);
    // Pass the filtered data to the parent component
    onSearch(filteredData);
  };

  const handleCoursePress = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleCoursePress(item.url)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search courses and videos..."
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={suggestions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  flatList: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchComponent;
