import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ApiHelper} from '../../helpers';
import {useGetTodosQuery} from '../../config/todosApi';

const TestReduxQuery = () => {
  const {data, error, isLoading} = useGetTodosQuery();

  console.log(data);
  console.log(error);
  console.log(isLoading);

  useEffect(() => {
    // ApiHelper.get('/todos')
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <View>
      <Text>test redux query</Text>
    </View>
  );
};

export default TestReduxQuery;
