import {StyleSheet, Animated, View } from 'react-native';
import Moon from "./Moon"
import Star from "./Star"

const Shooting = ({dec}) => {
return (
    <>
        <View style={styles.container1}>
            <Animated.View style={[  { transform: [{translateX: dec},{translateY: dec}]} ]} > <Star /></Animated.View>
        </View>
        
        <View style={styles.container1}>
            <Star />
            <Star />
            <Star />
        </View>

        <View style={styles.container2}> 
            <Animated.View style={[ {top:'-100px'} ]} > <Moon /></Animated.View>
            <Star />
        </View>
        
        <View style={styles.container4}>
            <Star />  
        </View>
  </>
);};

export default Shooting;

const styles = StyleSheet.create({

    container1:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      justifyContent: 'space-around'
    },
    container2:{
      flexDirection: 'col',
      flexWrap: 'wrap',
      flex: 1,
      marginTop: 200,
      marginLeft:500,
    },
    container4:{
        flexDirection: 'col',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        flex: 1,
        marginTop: 50,
        marginLeft:300,
      } 
});