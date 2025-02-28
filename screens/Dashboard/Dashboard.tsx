import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text, View,Image } from 'react-native';



function Dashboard() {
  const navigate= useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../assets/s.png')}/>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard