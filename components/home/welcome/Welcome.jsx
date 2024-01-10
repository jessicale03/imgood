import React from 'react'
import { userState } from 'react';
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  FlatList
} from 'react-native';

import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Adrian </Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          />

        </View>
      </View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome