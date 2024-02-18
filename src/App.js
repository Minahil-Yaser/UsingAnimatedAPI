import Night from "./components/Night"
import Shooting from "./components/Shootingstar"
import {StyleSheet, Animated, TouchableOpacity, Text, View } from 'react-native';
import {  useEffect, useRef, useState } from "react";

function App() {
  const [clicked, setClick] = useState(false);
  const [mode, setMode] = useState('');
  const [bg, setBG] = useState('white');
  const fade = useRef(new Animated.Value(0)).current;
  const move = useRef(new Animated.Value(-1)).current;
  const dec = useRef(new Animated.Value(-200)).current;
  const textmove = useRef(new Animated.Value(0)).current;

  const animation1 = () => {
      setClick(!clicked)
      setBG('#151931')
      setMode('first')
      Animated.sequence([ 

        Animated.timing(fade, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.spring(move, {
          toValue: 0.75,
          friction: 3,
          useNativeDriver: true,
        })
      ]).start();
  };

  const animation2 = () => {
    setClick(!clicked)
    setBG('#151931')
    setMode('second')

    Animated.decay(dec, {
      toValue: 300,
      duration: 5000,
      velocity: 1.5,
      deceleration: 0.998,
      useNativeDriver: true
    }).start();
  };

  const removeAnimation1 = () => {
    setBG('white')
    setClick(!clicked)
    setMode('')
    Animated.sequence([ 
      Animated.spring(move, {
        toValue: -1,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 0,
        useNativeDriver: true,
      })
    ]).start();
  };

  const removeAnimation2 = () => {
    setClick(!clicked)
    setBG('white')
    setMode('')

    Animated.timing(dec, {
      toValue: -200,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    Animated.spring(textmove, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [textmove]);

  
  return (

    <div style={{backgroundColor: bg, height: '100vh', paddingTop:'80px'}}>
     
        {mode === 'first' && <Night fade={fade} move={move} />}
        {mode === 'second' && <Shooting dec={dec} />}

        {mode === '' && <>
        <View>
          <Animated.Text style={[styles.text1,{ transform: [{scale: textmove}]}]}>Hello! 👋</Animated.Text>
        </View>
        </>}

        
        {clicked && <>
          <View style={styles.container3}>
            {mode === 'first' && <TouchableOpacity style={[styles.button, {backgroundColor: 'grey'}]} onPress={removeAnimation1}>
              <Text style={{ color:'white'}}>Back</Text>
            </TouchableOpacity>}

            {mode === 'second' && <TouchableOpacity style={[styles.button, {backgroundColor: 'grey'}]} onPress={removeAnimation2}>
              <Text style={{ color:'white'}}>Back</Text>
            </TouchableOpacity>}
          </View>
        </>}
        {!clicked && <>
          <View style={styles.container3}>
            <TouchableOpacity style={[styles.button, {backgroundColor:'#000080'}]} onPress={animation1}>
              <Text style={{ color:'white'}}>Show me the starry night</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:'#000080'}]} onPress={animation2}>
              <Text style={{ color:'white'}}>Show me the shooting star</Text>
            </TouchableOpacity>
          </View>
        </>}
    
    </div>
);}

export default App;

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
  },
  container3:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
    marginRight:'400px',
    marginLeft:'400px'
  },

  text1:{
    
    //backgroundColor: 'red',
    marginLeft:'600px',
    color: '#000080',
    fontSize: 80
  },
  button: {
    alignItems: 'center',
    height: 40,
    width: 200,
    marginTop: 120,
    // marginLeft: 620, 
    justifyContent: 'center',
    borderRadius:'10px'
  },
});