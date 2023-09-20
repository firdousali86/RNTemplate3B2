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
  LocaleTest,
  TestReduxQuery,
} from '../containers';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View, Linking} from 'react-native';
import {userActions} from '../features/user/userSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useSelector(state => state.user);
  const isUserLoggedIn =
    typeof user?.data?.id === 'string' && user?.data?.id.length > 20
      ? true
      : false;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="TestReduxQuery" component={TestReduxQuery} />
        <Stack.Screen name="LocaleTest" component={LocaleTest} />
        <Stack.Screen name="TestSaga" component={TestSaga} />
        <Stack.Screen name="TestUseRef" component={TestUseRef} />

        <Stack.Screen name="TestUseRefClass" component={TestUseRefClass} />

        <Stack.Screen name="TestFeed" component={TestFeed} />
        <Stack.Screen name="Test" component={TestContainer} />
      </Stack.Group>
    );
  };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="signupScreen" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{getMainStack()}</Stack.Navigator>;
};

export default Navigation;
