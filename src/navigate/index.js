import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  LoginScreen,
  SignupScreen,
  TestSaga,
  TestContainer,
  TestFeed,
  TestUseRef,
  TestUseRefClass,
} from '../containers';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View, Linking} from 'react-native';
import {userActions} from '../features/user/userSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {}, []);

  getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="TestSaga" component={TestSaga} />
        <Stack.Screen name="TestUseRef" component={TestUseRef} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TestUseRefClass" component={TestUseRefClass} />

        <Stack.Screen name="TestFeed" component={TestFeed} />
        <Stack.Screen name="Test" component={TestContainer} />

        <Stack.Screen name="signupScreen" component={SignupScreen} />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{getAuthStack()}</Stack.Navigator>;
};

export default Navigation;
