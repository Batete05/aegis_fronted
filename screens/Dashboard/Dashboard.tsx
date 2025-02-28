import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native';
import Logo from '../../assets/Logo-s.svg';


function Dashboard() {
  const navigate= useNavigation();

  return (
    <View>
      <Logo width='35px' height='40px'/>
    </View>
  )
}

export default Dashboard