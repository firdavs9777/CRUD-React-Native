import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );
  return (
    <View style={styles.view}>
      <Text style={styles.label}> Title </Text>
      <Text style={styles.val}>{blogPost.title}</Text>
      <Text style={styles.label}> Content:</Text>
      <Text style={styles.val}>{blogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <Feather name="edit" size={30} style={{ padding: 5 }} />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontStyle: 'normal',
    fontSize: 22,
    padding: 10
  },
  val: {
    fontSize: 18,
    margin: 2
  }
});
export default ShowScreen;
