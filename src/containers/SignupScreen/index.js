import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {userActions} from '../../features/user/userSlice';
import {kApiSignup} from '../../config/WebServices';

const {request} = userActions;

const SignupScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user.data.signupSuccessful) {
      props.navigation.goBack();
    }
  }, [user]);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={changedText => {
          setUsername(changedText);
        }}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={email}
        autoCapitalize="none"
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        placeholder="Email"
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        placeholder="Password"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(
            request({url: kApiSignup, data: {username, email, password}}),
          );
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Text>Go to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
