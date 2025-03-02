import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
const promotions = [
  {
    id: '1',
    title: "Free live subscription of $23",
    desc: 'Get your free subscription of a month matches live',
    img: require('../../assets/basketball.png')
  },
  {
    id: '2',
    title: "BK Arena Rap season 1",
    desc: 'Icyambu Rap season 2',
    img: require('../../assets/event.png')
  },
  {
    id: '3',
    title: "Football Updates",
    desc: 'CAF CHAMPIONSHIP',
    img: require('../../assets/event.png'),
    gameDetails: {
      "location": "Amahoro stadium 4PM",
      "date": "Saturday 23, 2025"
    }
  },
];

function Dashboard() {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // Fading out duration
        useNativeDriver: true,
      }).start(() => {
        // Change the promotion
        setIndex((prevIndex) => (prevIndex + 1) % promotions.length);

        // Fade in
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500, 
          useNativeDriver: true,
        }).start();
      });
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../../assets/s.png')} style={styles.logo} />
      </View>

      <Animated.View style={[styles.promotion, { opacity: fadeAnim }]}>
        <Image source={promotions[index].img} style={styles.image} />
        <View style={{marginLeft:20}}>
        <Text style={styles.title}>{promotions[index].title}</Text>
        <Text style={styles.desc}>{promotions[index].desc}</Text>
        {promotions[index].gameDetails && (
          <Text style={styles.details}>
            {promotions[index].gameDetails.location} - {promotions[index].gameDetails.date}
          </Text>
        )}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#12171D",
    flex: 1,
    alignItems: 'center',
    padding:10,
  },
  navbar: {
    height: '10%',
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    padding:10,
  },
  promotion: {
    backgroundColor: "#4CEC32",
    borderRadius: 10,
    width: '90%',
    height:"25%",
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:"row",
    paddingHorizontal:20,
    gap:4,
    paddingVertical:10
  },
  image: {
    height: "100%",
    borderRadius: 10,
    resizeMode: 'contain',
    paddingHorizontal:20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  desc: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,

  },
  details: {
    fontSize: 12,
    color: '#bbb',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Dashboard;
