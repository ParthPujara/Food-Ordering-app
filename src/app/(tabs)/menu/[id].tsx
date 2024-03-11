import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function ProductDetailsScreen() {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title:"Detials "+id}}/>
      <Text style={{color: "white"}}>{id}</Text>
     </View>
  );
}
