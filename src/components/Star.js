import {StyleSheet, View } from 'react-native';

const Star = () => {
return (
    <View style={styles.starfive}>
        <View style={styles.starfiveTop} />
        <View style={styles.starfiveBefore} />
        <View style={styles.starfiveAfter} />
  </View>
);
};

export default Star;


const styles = StyleSheet.create({
    starfive: {
      width: 20,
      height: 20,
    },
    starfiveTop: {
        top:-15,
        left:13,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 20,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#FFB81C",
      },
    starfiveBefore: {
      backgroundColor: "transparent",
      position: "absolute",
      left: 0,
      top: 0,
      borderStyle: "solid",
      borderRightWidth: 20,
      borderRightColor: "transparent",
      borderBottomWidth: 15,
      borderBottomColor: "#FFB81C",
      borderLeftWidth: 20,
      borderLeftColor: "transparent",
      transform: [{ rotate: "35deg" }],
    },
    starfiveAfter: {
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      left: -3,
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderRightWidth: 20,
      borderRightColor: "transparent",
      borderBottomWidth: 15,
      borderBottomColor: "#FFB81C",
      borderLeftWidth: 20,
      borderLeftColor: "transparent",
      transform: [{ rotate: "-35deg" }],
    },
});