import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Edit Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.label}>Edit Content</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContent(text)}
        value={content}
      />
      <Button
        style={styles.submit}
        title="Edit Blog Post"
        onPress={() => {
          editPost(id, title, content, () => navigation.pop());
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
export default EditScreen;
