import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersStart, refreshUsers } from '../redux/slices/userSlice';

const UserListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(refreshUsers());
    dispatch(fetchUsersStart());
  };

  const handleLoadMore = () => {
    if (!loading) {
      dispatch(fetchUsersStart());
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { user: item })}>
      <Text style={styles.item}>{item.name.first} {item.name.last}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.login.uuid}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default UserListScreen;
