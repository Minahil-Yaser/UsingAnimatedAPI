import {StyleSheet, Animated, View } from 'react-native';
import Moon from "./Moon"
import Star from "./Star"

const Night = ({fade, move}) => {
return (
    <>
        <View style={styles.container1}>
            <Animated.View style={[  { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
        </View>

        <View style={styles.container2}>
            <Animated.View style={[  { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ {top:'-100px'},{ opacity: fade} ]} > <Moon /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
        </View>

        <View style={[styles.container1, {marginTop:'50px'}]}>
            <Animated.View style={[  { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
            <Animated.View style={[ { opacity: fade}, { transform: [{scale: move}]} ]} > <Star /></Animated.View>
        </View>
  </>
);};

export default Night;

const styles = StyleSheet.create({

    container1:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      justifyContent: 'space-around'
    },
    container2:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      justifyContent: 'space-between',
      marginTop: 200,
    }
});