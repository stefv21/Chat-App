import { useState } from 'react';
import {
    Button,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  return (
    <ImageBackground
      source={require('../assets/images/Background Image.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Chat!</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='Type your username here'
        />
        <View style={styles.colorWrapper}>
          <Text style={styles.colorPrompt}>Choose Background Color:</Text>
          <View style={styles.colorContainer}>
            {colors.map((bgColor) => (
              <TouchableOpacity
                key={bgColor}
                style={[
                  styles.colorCircle,
                  { backgroundColor: bgColor },
                  color === bgColor && styles.colorSelected,
                ]}
                onPress={() => setColor(bgColor)}
                accessibilityLabel={`Select background color ${bgColor}`}
              />
            ))}
          </View>
        </View>
        <Button
          title="Enter Chat Room"
          onPress={() => navigation.navigate('Chat', { name, color })}
          disabled={!name}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: 10,
    margin: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
  },
  colorWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  colorPrompt: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  colorSelected: {
    borderColor: '#555',
    borderWidth: 4,
  },
});

export default Start;
