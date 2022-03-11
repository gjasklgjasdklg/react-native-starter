import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DatePicker from 'react-native-date-picker';

function LoginPage() {
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.center}>Enter your User Code:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Text style={[styles.marginTop20, styles.redText]}>
          Error Placeholder
        </Text>
      </View>
      <View>
        <Text style={[styles.center, styles.marginTop50]}>
          Enter your date of birth:
        </Text>
        <DatePicker
          date={date}
          onDateChange={setDate}
          fadeToColor={'none'}
          mode={'date'}
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log in to ClassCharts" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  textInput: {
    borderWidth: 1,
    width: 200,
    marginTop: 5,
  },

  center: {
    textAlign: 'center',
  },

  marginTop50: {
    marginTop: 50,
  },

  marginTop20: {
    marginTop: 20,
  },

  redText: {
    color: 'red',
  },
});

export default App; 