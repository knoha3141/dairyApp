import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const PlaceholderImage = require('../../assets/images/partial-react-logo.png');

export default function Index() {
  const [emoji, setEmoji] = useState('');
  const [inputVisible, setInputVisible] = useState(false);

  const handleEmojiChange = (text: string) => {
    // 絵文字1つだけに制限（必要に応じて）
    if (text.length > 2) return;
    setEmoji(text);
    setInputVisible(false);
    Keyboard.dismiss(); // キーボード閉じる
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View> */}
      <Text style={styles.textContents}>最近、自分をちょっと褒めたいと思ったことは？</Text>
      {/* <Link href="/about" style={styles.button}>
        Go to About screen
      </Link> */}
      <View style={styles.underline} />
      <TouchableOpacity style={styles.emojiCircle} onPress={() => setInputVisible(true)}>
        <Text style={styles.emoji}>{emoji || '＋'}</Text>
      </TouchableOpacity>
      <Text style={styles.label}>絵文字を設定</Text>
      {inputVisible && (
        <TextInput
          style={styles.emojiInput}
          autoFocus
          onChangeText={handleEmojiChange}
          placeholder="😊"
          maxLength={2}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholder="ここに書く"
        maxLength={180}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  textContents: {
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 16,
  },
  underline: {
    marginTop: 50,
    width: '80%',
    height: 1,
    backgroundColor: '#C9C9C9',
  },
  emojiCircle: {
    marginTop: 50,
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  emoji: {
    fontSize: 32,
  },
  label: {
    marginTop: 8,
    color: '#999',
    fontSize: 12,
  },
  emojiInput: {
    height: 0,
    width: 0,
    opacity: 0,
  },
  // imageContainer: {
  //   flex: 1,
  // },
  // image: {
  //   width: 320,
  //   height: 440,
  //   borderRadius: 5,
  // },
});