import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);
  return (
    <View style={styles.view}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContent(text)}
        value={content}
      />
      <Button
        title="Add Blog Post "
        style={styles.submit}
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    borderColor: 'grey'
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  },
  submit: {
    borderColor: 'red',
    borderWidth: 1
  }
});
export default CreateScreen;
