import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const MyCustomControl = forwardRef((props, ref) => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const textInput1Ref = useRef(null);
  const textInput2Ref = useRef(null);

  // useImperativeHandle()

  useImperativeHandle(ref, () => ({
    focusFirstOne: () => {
      textInput1Ref.current.focus();
    },
    focusSecondOne: () => {
      textInput2Ref.current.focus();
    },
  }));

  //   const focusFirstOne = () => {
  //     textInput1Ref.current.focus();
  //   };

  //   const focusSecondOne = () => {
  //     textInput2Ref.current.focus();
  //   };

  //   useEffect(() => {
  //     console.log(props.currentlySelectedField);

  //     if (props.currentlySelectedField === 'first') {
  //       textInput1Ref.current.focus();
  //     } else {
  //       textInput2Ref.current.focus();
  //     }
  //   }, [props.currentlySelectedField]);

  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Text>test my custom control</Text>
      <TextInput
        ref={textInput1Ref}
        value={textInput1}
        onChangeText={changedText => {
          setTextInput1(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 10}}
      />
      <TextInput
        ref={textInput2Ref}
        value={textInput2}
        onChangeText={changedText => {
          setTextInput2(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 10}}
      />
    </View>
  );
});

export default MyCustomControl;
