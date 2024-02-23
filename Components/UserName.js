import React from 'react';
import {Text, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>We are the Strategies Titan {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Joyce" />
      <Cat name="Roniel" />
      <Cat name="Baby Jane" />
    </View>
  );
};

export default Cafe;