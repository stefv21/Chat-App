import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Chat = ({ route, navigation }) => {
  const { name, color } = route.params;

  useEffect(() => {
    // Set the navigation bar title to the user's name
    navigation.setOptions({ title: name });
  }, [navigation, name]);

  return (
    <View style={[styles.container, { backgroundColor: color || '#fff' }]}>
      <Text style={styles.welcome}>Welcome, {name}!</Text>
      {/* ...rest of your chat UI */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
  },
});

export default Chat;
