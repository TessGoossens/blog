import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const BlogPostForm =({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.view}>
          <Text style={styles.label}>Enter Title:</Text>
          <TextInput
            style={styles.imput}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={styles.label}>Enter Content:</Text>
          <TextInput
            style={styles.imput}
            value={content}
            onChangeText={text => setContent(text)}
          />
          <Button
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
          />
        </View>
      );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    imput: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 18,
        marginVertical: 15
    },
    label: {
        fontSize: 20,
        marginVertical: 5
    },
    view: {
        marginHorizontal: 15
    }
})

export default BlogPostForm;


