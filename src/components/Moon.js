import {StyleSheet, View } from 'react-native';

const Moon = () => {
  return <View style={styles.moon} > <View style={styles.moon2} /></View>
    ;
};

export default Moon;

const styles=StyleSheet.create({
  moon: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor:'white' 
  },
  moon2: {
    left:15,
    top: -12,
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor:'#151931' 
  },
});