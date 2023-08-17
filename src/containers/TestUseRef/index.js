import {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {MyCustomControl} from '../../controls';

const TestUseRef = () => {
  const [myval, setmyval] = useState('');
  const [currentlySelectedField, setCurrentlySelectedField] = useState('first');

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
      <MyCustomControl currentlySelectedField={currentlySelectedField} />

      <View
        style={{
          marginHorizontal: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            setCurrentlySelectedField('first');
          }}>
          <Text>Focus 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentlySelectedField('second');
          }}>
          <Text>Focus 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TestUseRef;
