import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const RandomColorGenerator = () => {
  const [newColor, setNewColor] = useState([]);

  const randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setNewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.textStyle}>GENERATE RANDOM COLOR</Text>
      </TouchableOpacity>
      <FlatList
        data={newColor}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  marginTop: 35,
                  backgroundColor: item,
                  height: 120,
                  width: 320,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  selectable
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 40,
    backgroundColor: "blue",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 21,
    color: "#eee",
    fontWeight: "bold",
  },
});

export default RandomColorGenerator;
