import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Screen2 = ({ route, navigation }) => {
  const { name } = route.params;

   useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

 return (
   <View style={styles.container}>
     <Text>Hello Screen2!</Text>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Screen2;