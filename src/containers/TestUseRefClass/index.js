import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../components';
import {runSaga} from 'redux-saga';

class TestUseRefClass extends React.Component {
  count = 0;

  state = {something: ''};

  increment = () => {
    this.count += 1;

    console.log('value of count: ' + this.count);

    this.setState({something: 'something'});
  };

  render() {
    console.log('render runs');

    return (
      <View>
        <Text>test class</Text>
        <Text>{this.count}</Text>

        <TouchableOpacity
          onPress={() => {
            this.increment();
          }}>
          <Text>Increase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TestUseRefClass;
