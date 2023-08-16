// @flow
import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Text} from '../../components';

import {userActions} from '../../features/user/userSlice';
import {AnalyticsHelper} from '../../helpers';
import {kApiLogin} from '../../config/WebServices';

const {request, clear} = userActions;

import styles from './styles';

// const videoFile = require('./Orama_background_video_1080.m3u8');

const LoginScreen = props => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        ref={usernameRef}
        style={styles.input}
        onChangeText={text => {
          setEmail(text);
        }}
        value={email}
        placeholder="Email/Username"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        ref={passwordRef}
        style={styles.input}
        onChangeText={text => {
          setPassword(text);
        }}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          AnalyticsHelper.logEvent('login', {email});

          dispatch(
            request({
              apiType: 'login',
              uri: kApiLogin,
              body: {
                email,
                password,
              },
            }),
          );
        }}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginHorizontal: 15, marginTop: 10}}
        onPress={() => {
          props.navigation.navigate('signupScreen');
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>

      <ActivityIndicator
        animating={user.isFetching}
        hidesWhenStopped
        size={'large'}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            usernameRef.current.focus();
          }}
          style={{flex: 1, height: 44}}>
          <Text>Focus username field</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            passwordRef.current.focus();
          }}
          style={{flex: 1, height: 44}}>
          <Text>Focus password field</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default LoginScreen;
