import {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const TestUseRef = () => {
  const [myval, setmyval] = useState('');

  const count = useRef(0);

  const increment = () => {
    count.current += 1;

    console.log('value of count: ' + count.current);

    setmyval(new Date());
  };

  console.log('render runs');

  return (
    <View>
      <Text>test</Text>
      <Text>{count.current}</Text>

      <TouchableOpacity
        onPress={() => {
          increment();
        }}>
        <Text>Increase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestUseRef;
