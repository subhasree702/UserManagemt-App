import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {user.name.first} {user.name.last}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Phone: {user.phone}</Text>
      <Text style={styles.text}>Location: {user.location.city}, {user.location.country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UserDetailScreen;
